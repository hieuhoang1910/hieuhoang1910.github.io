# Hieu Hoang Portfolio Webapp

Static, dependency-free portfolio webapp, live at **<https://hieuhoang1910.github.io/>**.

Built from personal portfolio notes, local Vinnotek project summaries and reports, a Cold Plate Master Baseline Viewer screenshot, and public GitHub profile/repository pages for `hieuhoang1910`.

## Live site and QR code

- Live URL: <https://hieuhoang1910.github.io/>
- `qr-portfolio.png` / `qr-portfolio.svg` - QR codes pointing to the portfolio homepage
- `qr-card.png` / `qr-card.svg` - QR codes pointing to the digital business card (`card.html`)
- All QR codes use high error correction; the SVGs scale cleanly for print

To update the site, edit files and push to `main`; GitHub Pages redeploys automatically in about a minute.

## Open locally

Open `index.html` directly in a browser. No build step is required.

## Regenerating the resume PDF

After editing `resume.html`, regenerate `Hieu_Hoang_Resume.pdf` with headless Edge:

```text
msedge --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="Hieu_Hoang_Resume.pdf" "file:///C:/Vinnotek/portfolio/resume.html"
```

## Remaining content checks

- Confirm whether GPA should remain public (currently shown in resume files).
- Review Vinnotek/customer project wording periodically for confidentiality.
- Replace representative images with approved project screenshots, CAD renders, plots, or report figures when available.

## Files

- `index.html` - page structure and content containers
- `styles.css` - responsive visual design
- `app.js` - project data, filters, modal detail views, and animated canvas schematic
- `resume.html` - printable resume page
- `resume.md` - ATS-friendly Markdown resume
- `Hieu_Hoang_Resume.pdf` - generated resume PDF
- `card.html` / `card.css` - digital business card page (QR landing target)
- `card-image.html` - fixed 1200x630 source for the shareable card image (screenshot with headless Edge to regenerate `assets/hieu-card.png`)
- `assets/hieu-card.png` - shareable business-card image; also the Open Graph link-preview image
- `Hieu_Hoang.vcf` - vCard downloaded by the card's Save contact button
- `qr-portfolio.png` / `qr-portfolio.svg` - QR codes linking to the homepage
- `qr-card.png` / `qr-card.svg` - QR codes linking to the business card
- `SOURCES.md` - source and image-credit notes
