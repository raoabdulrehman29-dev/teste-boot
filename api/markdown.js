import { NodeHtmlMarkdown } from "node-html-markdown";

export const config = {
  runtime: "edge",
};

export default async function handler(request) {
  const accept = request.headers.get("accept") || "";

  if (!accept.includes("text/markdown")) {
    return new Response("This endpoint is intended for Markdown requests.", {
      status: 406,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }

  const html = `
    <h1>Invictus Hub</h1>
    <p>Invictus Hub is a software development and AI solutions company.</p>
    <h2>Services</h2>
    <ul>
      <li>Artificial Intelligence</li>
      <li>Web Development</li>
      <li>Mobile Application Development</li>
      <li>Cloud Solutions</li>
    </ul>
    <p>Website: https://invictushub.com</p>
    <p>Contact: https://invictushub.com/contact</p>
  `;

  const markdown = NodeHtmlMarkdown.translate(html);

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Vary": "Accept",
      "Cache-Control": "public, max-age=3600",
    },
  });
}