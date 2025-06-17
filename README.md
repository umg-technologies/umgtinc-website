
# UMG Technologies Corporate Website

Welcome to the codebase for the next‑generation **umgtinc.com**.  
This repository contains a lightweight vanilla HTML/CSS/JS template that you can extend and style to match UMG branding.

## Features
- ⚡ **Instant load** – no heavy frameworks or build pipelines.
- 🖌️ **Easy theming** – central `css/style.css` file.
- 🗂️ **Modular** – separate pages for About & Contact.
- ♻️ **Portable** – runs from any static file host (GitHub Pages, Netlify, AWS S3, etc.).

## Directory structure
```
/
├── index.html         # Landing page
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── logo.png
```

## Quick start
```bash
git clone https://github.com/umg-technologies/umgtinc-website.git
cd umgtinc-website

# Option 1: Python 3 built‑in server
python -m http.server 8000

# Option 2: Node http-server
npx http-server -p 8000
```

Then open http://localhost:8000 in your browser.

## Deploying to production
- **GitHub Pages** – push to `main` and enable Pages → Deploy from root.  
  Add a `CNAME` file containing `umgtinc.com` to serve the paid domain.
- **Netlify / Vercel** – drag‑and‑drop folder or point to repo; no build command required.  
- **Any static host** – upload the contents of this folder.

## Customizing
Update the HTML sections or replace placeholder text/images.  
Global styles are in `css/style.css`.

## License
MIT
