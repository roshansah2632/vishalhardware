# Vishal Hardware — Website (Design & Deployment Guide)

This branch adds product and contact pages, Netlify form wiring, and placeholder images to help with testing and deployment.

What this branch contains:
- products.html — product catalogue (sand, TMT rods, cement, tools)
- contact.html — contact & Netlify-compatible quick quote form example
- index.html — updated to include Netlify-ready form and conservative product wording
- placeholder images in /images for quick local previews

Deployment recommendations
- Host on Netlify (recommended) or GitHub Pages. Netlify is preferred if you want built-in form handling.
- Images: replace the placeholders with optimized WebP files (400/800/1200 widths). Use descriptive filenames and alt text (e.g., `sand-coarse-800.webp`).
- Forms: The site includes a Netlify-ready form (`data-netlify="true"`). Deploy to Netlify and verify submissions in Site → Forms.
- Map: add a Google Maps embed or OpenStreetMap iframe with the exact address.

Image optimization guidance
- Suggested filenames and sizes:
  - hero-shop-1200.webp — hero image (1200px wide)
  - sand-coarse-400.webp, sand-coarse-800.webp, sand-coarse-1200.webp
  - tmt-rods-400.webp, tmt-rods-800.webp, tmt-rods-1200.webp
- Use lossy WebP quality 60–80 for photos and strip EXIF metadata.
- Generate srcset attributes for responsive loading.

Netlify form notes
- The included form uses `data-netlify="true"` and a hidden input `form-name`. Netlify detects forms automatically on deploy.
- Configure email notifications in Netlify site settings or add a serverless function to forward submissions.

How to preview locally
- Simple static server: `npx http-server .` or `python -m http.server 8000`
- For image optimization locally: `cwebp` and `magick` (ImageMagick)

PR plan
- Branch: feature/site-products-contact
- Base: main
- Title: "Add products & contact pages, Netlify form wiring, README guidance"
- Body: "Adds products.html and contact.html, Netlify form example, README guidance and placeholder images. Preview locally and deploy to Netlify to test the form."