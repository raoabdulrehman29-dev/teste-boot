import puppeteer from "puppeteer";
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
  ".mp4": "video/mp4",
};

// A minimal static file server with SPA fallback that NEVER redirects.
// Real routes (no file extension) fall back to index.html for SPA
// navigation. Real ASSETS (js/css/images/video - anything with a file
// extension) that are genuinely missing return an honest 404 instead
// of silently serving index.html - that silent fallback was masking
// broken import paths behind a confusing "Unexpected token '<'" error,
// since the browser would try to parse HTML as JavaScript.
function startServer() {
  const server = http.createServer((req, res) => {
    const reqPath = decodeURIComponent(req.url.split("?")[0]);
    let filePath = path.join(distDir, reqPath);

    const looksLikeAsset = path.extname(reqPath) !== "";

    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      if (looksLikeAsset) {
        res.statusCode = 404;
        res.end(`Not found: ${reqPath}`);
        return;
      }
      filePath = path.join(distDir, "index.html"); // SPA fallback, real routes only
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
  return puppeteer.launch();
}

async function prerender() {
  console.log(`Prerendering ${allRoutes.length} routes...`);

  const server = await startServer();
  const baseUrl = `http://localhost:${PORT}`;
  console.log(`Static server confirmed running at: ${baseUrl}`);

  const browser = await getBrowser();
  const page = await browser.newPage();


  // Flag this as a prerender pass before any page JS runs, so
  // WebGL-based components can skip themselves entirely - avoids
  // hangs/timeouts from WebGL context creation in headless
  // environments with no real GPU (like Vercel's build sandbox)
  await page.evaluateOnNewDocument(() => {
    window.__IS_PRERENDER__ = true;
  });

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      console.log("[Browser Error]");
      console.log(msg.text());
    }
  });
  page.on("pageerror", (err) => {
    console.log("[Browser pageerror]", err.message);
  });
  page.on("response", (response) => {
  if (response.status() === 404) {
    console.log("[404]", response.url());
  }
});

  let failures = 0;

  for (const route of allRoutes) {
    const url = `${baseUrl}${route}`;
    console.log(`Rendering: ${route}`);

    try {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
      await new Promise((resolve) => setTimeout(resolve, 600));

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
    } catch (err) {
      failures++;
      console.error(`FAILED to render ${route}: ${err.message}`);
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