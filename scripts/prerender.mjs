// Runs after `vite build` and the SSR build: renders every route to static HTML
// so search engines and link previews see the page text without running JavaScript.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");
const SITE = "https://www.skolabilijarapecelj.com";

const { routes, render } = await import(pathToFileURL(ssrEntry).href);
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const escapeAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// A function replacement keeps "$" in page text from being read as a replace pattern.
function replaceOnce(html, pattern, replacement) {
  const found = typeof pattern === "string" ? html.includes(pattern) : pattern.test(html);
  if (!found) throw new Error(`prerender: ${pattern} not found in index.html`);
  return html.replace(pattern, () => replacement);
}

for (const route of routes) {
  let html = replaceOnce(template, '<div id="root"></div>', `<div id="root">${render(route)}</div>`);

  if (route.path !== "/") {
    const url = `${SITE}${route.path}`;
    const title = escapeAttr(route.title);
    const description = escapeAttr(route.description);
    html = replaceOnce(html, /<title>.*?<\/title>/, `<title>${title}</title>`);
    html = replaceOnce(html, /<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`);
    html = replaceOnce(html, /<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${url}"`);
    for (const attr of ['name="description"', 'property="og:description"', 'name="twitter:description"']) {
      html = replaceOnce(html, new RegExp(`<meta ${attr} content="[^"]*"`), `<meta ${attr} content="${description}"`);
    }
    for (const attr of ['property="og:title"', 'name="twitter:title"']) {
      html = replaceOnce(html, new RegExp(`<meta ${attr} content="[^"]*"`), `<meta ${attr} content="${title}"`);
    }
    if (route.jsonLd) {
      const json = JSON.stringify(route.jsonLd).replace(/</g, "\\u003c");
      html = replaceOnce(html, "</head>", `<script type="application/ld+json">${json}</script>\n  </head>`);
    }
  }

  // /casovi-bilijara-beograd -> casovi-bilijara-beograd.html, served without ".html" via cleanUrls in vercel.json
  const file = route.path === "/" ? "index.html" : `${route.path.slice(1)}.html`;
  fs.writeFileSync(path.join(dist, file), html);
  console.log(`prerendered ${route.path}`);
}

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
