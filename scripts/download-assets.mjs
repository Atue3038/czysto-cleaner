#!/usr/bin/env node
/**
 * Запусти один раз: node scripts/download-assets.mjs
 * Скачает все ассеты из Figma в /public/images/
 * После этого URL в компонентах обновятся автоматически.
 */

import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "public", "images");
fs.mkdirSync(OUT, { recursive: true });

const ASSETS = {
  "logo.png":         "https://www.figma.com/api/mcp/asset/f14d9e51-3ddc-4ed7-bb44-ef6ed1b2b986",
  "hero-bg.jpg":      "https://www.figma.com/api/mcp/asset/ec18fda3-9015-4e2e-8f2a-eb6cd0709546",
  "hero-arrow.png":   "https://www.figma.com/api/mcp/asset/7abd941d-724d-4de1-aff0-9409fcbe99f1",
  "lang-arrow.png":   "https://www.figma.com/api/mcp/asset/6f18e0c3-8d38-47c7-b18e-1685bfeafb03",
  // Advantage icons
  "adv-1.png":        "https://www.figma.com/api/mcp/asset/d4bb2a99-309f-4e96-a626-e98729b8daf3",
  "adv-2.png":        "https://www.figma.com/api/mcp/asset/0aa5e33a-9d0f-44f4-b3a2-8a0f15866214",
  "adv-3.png":        "https://www.figma.com/api/mcp/asset/5f3e0a78-d3bf-4db2-8a6e-a2b30392300e",
  "adv-4.png":        "https://www.figma.com/api/mcp/asset/74c32e2c-7a0a-4b49-9a31-09696abf3e00",
  "adv-5.png":        "https://www.figma.com/api/mcp/asset/fd9aed02-cecb-43bb-a5b0-4d87dd7ec18c",
  "adv-6.png":        "https://www.figma.com/api/mcp/asset/627d57e4-f9aa-49a6-bd16-0d5ac3fa77a7",
  // Included
  "included-photo.jpg": "https://www.figma.com/api/mcp/asset/94c5d63d-0282-44be-9830-5c8a71fba5c0",
  "check-icon.png":   "https://www.figma.com/api/mcp/asset/64d06cb3-f862-4c0f-9dcf-79c262a77a2b",
  // Packages
  "badge-star.png":   "https://www.figma.com/api/mcp/asset/0d121c2c-b388-41fc-8873-bfe8494b8b6e",
  // Additional
  "addl-icon.png":    "https://www.figma.com/api/mcp/asset/33525793-55ea-4217-b524-3f53e69b21a5",
  // Equipment icons
  "equip-kirby.png":      "https://www.figma.com/api/mcp/asset/4a77b9b7-668a-40ae-8ee8-a70214191bbd",
  "equip-sabrina.png":    "https://www.figma.com/api/mcp/asset/fab6efc0-800b-461c-8800-1ab85507cdab",
  "equip-karcher.png":    "https://www.figma.com/api/mcp/asset/77364f63-0f4b-448f-9837-40ebf29cdf02",
  "equip-raypath.png":    "https://www.figma.com/api/mcp/asset/710a2e68-9d31-47c5-9a5f-d58df724dfa6",
  // Guarantees
  "guar-1.png":       "https://www.figma.com/api/mcp/asset/940379cd-d840-485c-9cf6-b26a8ff58b0d",
  "guar-2.png":       "https://www.figma.com/api/mcp/asset/e8e8b38f-1a97-4bbf-b171-eb8647314b88",
  "guar-3.png":       "https://www.figma.com/api/mcp/asset/69d5bfa6-d4d8-46ad-95f6-d8e606dcea6c",
  // CTA
  "cta-call.png":     "https://www.figma.com/api/mcp/asset/9056f69d-39ce-4535-b087-26ce69b4097b",
  "cta-envelope.png": "https://www.figma.com/api/mcp/asset/a1013f49-ee9d-4f68-9d02-12d20a6e3e29",
  "cta-arrow.png":    "https://www.figma.com/api/mcp/asset/a4bd55b8-03c8-4a05-a461-99a646d77c2e",
};

function download(url, dest) {
  return new Promise((res, rej) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (r) => {
      if (r.statusCode === 301 || r.statusCode === 302) {
        file.close();
        download(r.headers.location, dest).then(res).catch(rej);
        return;
      }
      r.pipe(file);
      file.on("finish", () => { file.close(); res(); });
    }).on("error", (e) => { fs.unlink(dest, () => {}); rej(e); });
  });
}

(async () => {
  console.log(`Downloading ${Object.keys(ASSETS).length} assets to public/images/...\n`);
  for (const [name, url] of Object.entries(ASSETS)) {
    const dest = path.join(OUT, name);
    try {
      await download(url, dest);
      console.log(`  ✅  ${name}`);
    } catch (e) {
      console.log(`  ❌  ${name} — ${e.message}`);
    }
  }
  console.log("\nDone! Now update image paths in components from Figma URLs to /images/<name>");
})();
