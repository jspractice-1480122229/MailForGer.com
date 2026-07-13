# MailForGer.com

Personal static site for mailforger.com. No build step, no framework — plain HTML/CSS/JS served as-is (currently via GitHub Pages, see `CNAME`).

## Structure

- `index.html` — root lander page. Explains to sysadmins/mail providers that this domain doesn't send bulk email, so spoofed spam claiming to be "from" this domain shouldn't get the domain blacklisted.
- `css/site0.css` – `site7.css` — eight visual themes. `scripts/script_swapper.js` picks one at random on each page load via `document.write`.
- `perlpie/` — small standalone page (`perlpie.com`) demonstrating the `perl -p -i -e` find/replace one-liner. Has its own CSS and a `scripts/mailto.js` that builds an obfuscated email link.
- `pleading-paper-template/` — SEO lander for the open-source [pleading paper ODT templates](https://github.com/jspractice-1480122229/ca-fed-pleading-odt) project (California Superior Court + C.D. Cal. formats). Self-contained page with its own copies of the `.ott`/`.pdf` files for direct download.
- `manifest.json`, `browserconfig.xml`, `robots.txt`, favicons — standard PWA/crawler metadata for the root site.

## Ideas / later

- Tip jar link on the `pleading-paper-template` page.
