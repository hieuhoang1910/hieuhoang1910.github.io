# Hieu Hoang Portfolio Webapp

Static, dependency-free portfolio webapp, live at **<https://hieuhoang1910.github.io/>**.

Built from personal portfolio notes, local Vinnotek project summaries and reports, a Cold Plate Master Baseline Viewer screenshot, and public GitHub profile/repository pages for `hieuhoang1910`.

## Live pages and QR codes

- Portfolio: <https://hieuhoang1910.github.io/>
- Digital business card: <https://hieuhoang1910.github.io/card.html>
- Resume PDF: [https://hieuhoang1910.github.io/downloads/Hieu_Hoang_Resume.pdf](https://hieuhoang1910.github.io/downloads/Hieu_Hoang_Resume.pdf)
- `assets/qr/qr-portfolio.png` / `.svg` - QR codes pointing to the portfolio homepage
- `assets/qr/qr-card.png` / `.svg` - QR codes pointing to the business card page (kept for later; not currently displayed)
- `assets/share/hieu-card.png` - shareable 1200x630 card image (also the Open Graph link preview)
- `assets/share/hieu-card-vertical.png` - shareable 1080x1920 phone-size card image

The QR shown on both share images and on the card page currently points to the portfolio homepage.

All QR codes use high error correction; the SVGs scale cleanly for print.

To update the site, edit files and push to `main`; GitHub Pages redeploys automatically in about a minute.

## Folder structure

```text
index.html, card.html, resume.html   entry pages (URLs must stay stable - QR codes target them)
favicon.svg                          shared favicon
assets/css/                          styles.css (site), resume.css, card.css
assets/js/                           app.js (project data, filters, dialogs, canvas)
assets/images/profile/               profile photos
assets/images/projects/              project and M-SAT photos
assets/qr/                           QR code files
assets/share/                        shareable card images
downloads/                           Hieu_Hoang_Resume.pdf, Hieu_Hoang.vcf, resume.md
tools/                               card-image sources for regenerating share images
private/                             (gitignored) personal source material, old resume
```

## Open locally

Open `index.html` directly in a browser. No build step is required.

## Regenerating generated files

Resume PDF (after editing `resume.html`):

```text
msedge --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="downloads/Hieu_Hoang_Resume.pdf" "file:///C:/Vinnotek/portfolio/resume.html"
```

Share images (after editing `tools/card-image*.html`):

```text
msedge --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 --screenshot="assets/share/hieu-card.png" "file:///C:/Vinnotek/portfolio/tools/card-image.html"
msedge --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --window-size=1080,1920 --screenshot="assets/share/hieu-card-vertical.png" "file:///C:/Vinnotek/portfolio/tools/card-image-vertical.html"
```

QR codes were generated with Python `segno` (error level H) for `https://hieuhoang1910.github.io/` and `https://hieuhoang1910.github.io/card.html`.

## Remaining content checks

- Confirm whether GPA should remain public (currently shown in resume files).
- Review Vinnotek/customer project wording periodically for confidentiality.
- Replace representative images with approved project screenshots, CAD renders, plots, or report figures when available.

## Files

- `index.html` - portfolio page structure and content containers
- `card.html` - digital business card (QR landing target, vCard save, share, image downloads)
- `resume.html` - printable resume page (source for the PDF)
- `downloads/resume.md` - ATS-friendly Markdown resume
- `downloads/Hieu_Hoang_Resume.pdf` - generated two-page resume PDF
- `downloads/Hieu_Hoang.vcf` - vCard saved by the card's Save contact button
- `SOURCES.md` - source and image-credit notes
