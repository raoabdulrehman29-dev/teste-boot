import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import careerData from "../src/stores/career.json" with { type: "json" };
import projectsData from "../src/stores/projects.json" with { type: "json" };
import servicesData from "../src/stores/Services.json" with { type: "json" };

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const PORT = 4174;

const staticRoutes = ["/", "/about", "/services", "/projects", "/contact", "/career"];
const careerRoutes = careerData.map((job) => `/careers/${job.slug}`);
const applyRoutes = careerData.map((job) => `/applyfor/${job.slug}`);
const projectRoutes = projectsData.map((p) => `/project-details/${p.slug}`);
const allServices = servicesData.categories.flatMap((cat) => cat.services);
const serviceRoutes = allServices.map((s) => `/services/${s.id}`);

const allRoutes = [...staticRoutes, ...careerRoutes, ...applyRoutes, ...projectRoutes, ...serviceRoutes];

const mimeTypes = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".webp": "image/webp", ".svg": "image/svg+xml", ".json": "application/json",
  ".woff": "font/woff", ".woff2": "font/woff2", ".ico": "image/x-icon",
};

// A minimal static file server with SPA fallback that NEVER redirects —
// it always returns 200 and serves either the real asset or index.html,
// while leaving the requested URL untouched. This is what fixes the bug.
function startServer() {
  const server = http.createServer((req, res) => {
    const reqPath = decodeURIComponent(req.url.split("?")[0]);
    let filePath = path.join(distDir, reqPath);

    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      filePath = path.join(distDir, "index.html"); // SPA fallback, no redirect
    }

    const ext = path.extname(filePath);
    res.statusCode = 200;
    res.setHeader("Content-Type", mimeTypes[ext] || "application/octet-stream");
    fs.createReadStream(filePath).pipe(res);
  });

  return new Promise((resolve) => {
    server.listen(PORT, () => resolve(server));
  });
}

// NEW: launches a Vercel-compatible Chromium when running on Vercel's
// build servers, and falls back to your normal local Chrome install
// everywhere else (your machine, other CI, etc.)
async function getBrowser() {
  const isVercel = !!process.env.VERCEL;

  if (isVercel) {
    console.log("Detected Vercel build environment — using @sparticuz/chromium");
    const chromium = (await import("@sparticuz/chromium")).default;
    const puppeteerCore = (await import("puppeteer-core")).default;

    return puppeteerCore.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  }

  console.log("Local environment — using full puppeteer install");
  const puppeteer = (await import("puppeteer")).default;
  return puppeteer.launch();
}

async function prerender() {
  console.log(`Prerendering ${allRoutes.length} routes...`);

  const server = await startServer();
  const baseUrl = `http://localhost:${PORT}`;
  console.log(`Static server confirmed running at: ${baseUrl}`);

  const browser = await getBrowser();
  const page = await browser.newPage();
  page.on("console", (msg) => {
  console.log("[Browser]", msg.type(), msg.text());
});

page.on("pageerror", (err) => {
  console.error("[Browser Error]");
  console.error(err);
});

page.on("requestfailed", (request) => {
  console.error(
    "[Request Failed]",
    request.url(),
    request.failure()?.errorText
  );
});

  let failures = 0;

  for (const route of allRoutes) {
    const url = `${baseUrl}${route}`;
    console.log(`Rendering: ${route}`);

    try {
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
      console.log(
  "Loaded:",
  await page.title(),
  await page.url()
);
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Critical check: confirm Vue Router actually landed on the right route
      const actualPath = await page.evaluate(() => window.location.pathname);
      if (actualPath !== route) {
        throw new Error(`Router mismatch — requested ${route} but ended up on ${actualPath}`);
      }

      const html = await page.content();

      const outputPath =
        route === "/"
          ? path.join(distDir, "index.html")
          : path.join(distDir, route, "index.html");

      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.writeFileSync(outputPath, html);
    } } catch (err) {
  failures++;

  console.error("====================================");
  console.error("FAILED ROUTE:", route);
  console.error(err);
  console.error(err.stack);
  console.error("====================================");
}
  }

  await browser.close();
  server.close();

  if (failures > 0) {
    console.error(`\nPrerendering finished with ${failures} failure(s) out of ${allRoutes.length} routes.`);
    process.exitCode = 1;
  } else {
    console.log("\nPrerendering complete — all routes rendered successfully.");
  }
}

prerender();