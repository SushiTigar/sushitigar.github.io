// @ts-check
import { defineConfig } from "astro/config";

// Astro configuration
// Docs: https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // GitHub Pages deploys to https://<user>.github.io by default.
  // Set your custom domain in the CNAME file instead of here.
  site: "https://sushiil.com",

  // Append trailing slashes so /admin resolves to /admin/index.html
  // (GitHub Pages does this automatically; this ensures dev parity)
  trailingSlash: "always",
});
