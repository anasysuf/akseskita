/**
 * AksesKita - High Performance Host Injected Stylesheet (60 FPS Optimized)
 * Injected into document.head to style the target web page smoothly without layout thrashing.
 */

export const hostStyles = `
/* ==========================================================================
   1. Typography & Content Scaling (Responsive & Adaptive Navigation Safe)
   ========================================================================== */
html.akseskita-scale-sub1 { --akseskita-font-scale: 0.85; }
html.akseskita-scale-0    { --akseskita-font-scale: 1.00; }
html.akseskita-scale-1    { --akseskita-font-scale: 1.25; }
html.akseskita-scale-2    { --akseskita-font-scale: 1.50; }
html.akseskita-scale-3    { --akseskita-font-scale: 1.75; }
html.akseskita-scale-4    { --akseskita-font-scale: 2.00; }

html[class*="akseskita-scale-"] {
  font-size: calc(100% * var(--akseskita-font-scale, 1)) !important;
}

/* Ensure navbar & header containers automatically expand gracefully */
html[class*="akseskita-scale-"] header,
html[class*="akseskita-scale-"] nav,
html[class*="akseskita-scale-"] .navbar,
html[class*="akseskita-scale-"] .nav-container,
html[class*="akseskita-scale-"] .nav-menu {
  height: auto !important;
  min-height: fit-content !important;
  flex-wrap: wrap !important;
}

/* Scale text in navigation proportionally to prevent menu overflow */
html.akseskita-scale-sub1 nav a, html.akseskita-scale-sub1 header a, html.akseskita-scale-sub1 .nav-link, html.akseskita-scale-sub1 .nav-action-btn { font-size: 12px !important; }
html.akseskita-scale-1 nav a, html.akseskita-scale-1 header a, html.akseskita-scale-1 .nav-link, html.akseskita-scale-1 .nav-action-btn { font-size: 15px !important; }
html.akseskita-scale-2 nav a, html.akseskita-scale-2 header a, html.akseskita-scale-2 .nav-link, html.akseskita-scale-2 .nav-action-btn { font-size: 17px !important; }
html.akseskita-scale-3 nav a, html.akseskita-scale-3 header a, html.akseskita-scale-3 .nav-link, html.akseskita-scale-3 .nav-action-btn { font-size: 19px !important; }
html.akseskita-scale-4 nav a, html.akseskita-scale-4 header a, html.akseskita-scale-4 .nav-link, html.akseskita-scale-4 .nav-action-btn { font-size: 21px !important; }

/* Scale body & main content elements (75% - 200%) */
html.akseskita-scale-sub1 body,
html.akseskita-scale-sub1 p,
html.akseskita-scale-sub1 span:not(akses-kita span):not(akses-kita *):not(nav span),
html.akseskita-scale-sub1 a:not(akses-kita a):not(akses-kita *):not(nav a):not(header a),
html.akseskita-scale-sub1 li,
html.akseskita-scale-sub1 blockquote,
html.akseskita-scale-sub1 td,
html.akseskita-scale-sub1 th,
html.akseskita-scale-sub1 label,
html.akseskita-scale-sub1 input:not(akses-kita input),
html.akseskita-scale-sub1 button:not(akses-kita button):not(nav button),
html.akseskita-scale-sub1 textarea {
  font-size: 13px !important;
}
html.akseskita-scale-sub1 h1 { font-size: 1.75rem !important; }
html.akseskita-scale-sub1 h2 { font-size: 1.45rem !important; }
html.akseskita-scale-sub1 h3 { font-size: 1.25rem !important; }
html.akseskita-scale-sub1 h4 { font-size: 1.10rem !important; }

html.akseskita-scale-1 body,
html.akseskita-scale-1 p,
html.akseskita-scale-1 span:not(akses-kita span):not(akses-kita *):not(nav span),
html.akseskita-scale-1 a:not(akses-kita a):not(akses-kita *):not(nav a):not(header a),
html.akseskita-scale-1 li,
html.akseskita-scale-1 blockquote,
html.akseskita-scale-1 td,
html.akseskita-scale-1 th,
html.akseskita-scale-1 label,
html.akseskita-scale-1 input:not(akses-kita input),
html.akseskita-scale-1 button:not(akses-kita button):not(nav button),
html.akseskita-scale-1 textarea {
  font-size: 18px !important;
}
html.akseskita-scale-1 h1 { font-size: 2.5rem !important; }
html.akseskita-scale-1 h2 { font-size: 2.1rem !important; }
html.akseskita-scale-1 h3 { font-size: 1.75rem !important; }
html.akseskita-scale-1 h4 { font-size: 1.45rem !important; }

html.akseskita-scale-2 body,
html.akseskita-scale-2 p,
html.akseskita-scale-2 span:not(akses-kita span):not(akses-kita *):not(nav span),
html.akseskita-scale-2 a:not(akses-kita a):not(akses-kita *):not(nav a):not(header a),
html.akseskita-scale-2 li,
html.akseskita-scale-2 blockquote,
html.akseskita-scale-2 td,
html.akseskita-scale-2 th,
html.akseskita-scale-2 label,
html.akseskita-scale-2 input:not(akses-kita input),
html.akseskita-scale-2 button:not(akses-kita button):not(nav button),
html.akseskita-scale-2 textarea {
  font-size: 22px !important;
}
html.akseskita-scale-2 h1 { font-size: 3.1rem !important; }
html.akseskita-scale-2 h2 { font-size: 2.6rem !important; }
html.akseskita-scale-2 h3 { font-size: 2.15rem !important; }
html.akseskita-scale-2 h4 { font-size: 1.75rem !important; }

html.akseskita-scale-3 body,
html.akseskita-scale-3 p,
html.akseskita-scale-3 span:not(akses-kita span):not(akses-kita *):not(nav span),
html.akseskita-scale-3 a:not(akses-kita a):not(akses-kita *):not(nav a):not(header a),
html.akseskita-scale-3 li,
html.akseskita-scale-3 blockquote,
html.akseskita-scale-3 td,
html.akseskita-scale-3 th,
html.akseskita-scale-3 label,
html.akseskita-scale-3 input:not(akses-kita input),
html.akseskita-scale-3 button:not(akses-kita button):not(nav button),
html.akseskita-scale-3 textarea {
  font-size: 26px !important;
}
html.akseskita-scale-3 h1 { font-size: 3.6rem !important; }
html.akseskita-scale-3 h2 { font-size: 3.0rem !important; }
html.akseskita-scale-3 h3 { font-size: 2.5rem !important; }
html.akseskita-scale-3 h4 { font-size: 2.1rem !important; }

html.akseskita-scale-4 body,
html.akseskita-scale-4 p,
html.akseskita-scale-4 span:not(akses-kita span):not(akses-kita *):not(nav span),
html.akseskita-scale-4 a:not(akses-kita a):not(akses-kita *):not(nav a):not(header a),
html.akseskita-scale-4 li,
html.akseskita-scale-4 blockquote,
html.akseskita-scale-4 td,
html.akseskita-scale-4 th,
html.akseskita-scale-4 label,
html.akseskita-scale-4 input:not(akses-kita input),
html.akseskita-scale-4 button:not(akses-kita button):not(nav button),
html.akseskita-scale-4 textarea {
  font-size: 30px !important;
}
html.akseskita-scale-4 h1 { font-size: 4.2rem !important; }
html.akseskita-scale-4 h2 { font-size: 3.5rem !important; }
html.akseskita-scale-4 h3 { font-size: 2.9rem !important; }
html.akseskita-scale-4 h4 { font-size: 2.4rem !important; }

/* Font Weight */
html.akseskita-font-bold,
html.akseskita-font-bold body,
html.akseskita-font-bold p,
html.akseskita-font-bold span,
html.akseskita-font-bold a,
html.akseskita-font-bold li,
html.akseskita-font-bold h1,
html.akseskita-font-bold h2,
html.akseskita-font-bold h3,
html.akseskita-font-bold h4,
html.akseskita-font-bold h5,
html.akseskita-font-bold h6 {
  font-weight: 700 !important;
}

/* Line Height */
html.akseskita-lh-1 body { line-height: 1.8 !important; }
html.akseskita-lh-1 p, html.akseskita-lh-1 li, html.akseskita-lh-1 a, html.akseskita-lh-1 span { line-height: 1.8 !important; }

html.akseskita-lh-2 body { line-height: 2.2 !important; }
html.akseskita-lh-2 p, html.akseskita-lh-2 li, html.akseskita-lh-2 a, html.akseskita-lh-2 span { line-height: 2.2 !important; }

/* Letter Spacing */
html.akseskita-ls-1 body, html.akseskita-ls-1 p, html.akseskita-ls-1 span, html.akseskita-ls-1 a, html.akseskita-ls-1 h1, html.akseskita-ls-1 h2, html.akseskita-ls-1 h3 {
  letter-spacing: 0.08em !important;
}

html.akseskita-ls-2 body, html.akseskita-ls-2 p, html.akseskita-ls-2 span, html.akseskita-ls-2 a, html.akseskita-ls-2 h1, html.akseskita-ls-2 h2, html.akseskita-ls-2 h3 {
  letter-spacing: 0.16em !important;
}

/* Text Alignment */
html.akseskita-align-left p, html.akseskita-align-left article, html.akseskita-align-left section { text-align: left !important; }
html.akseskita-align-center p, html.akseskita-align-center article, html.akseskita-align-center section { text-align: center !important; }
html.akseskita-align-right p, html.akseskita-align-right article, html.akseskita-align-right section { text-align: right !important; }
html.akseskita-align-justify p, html.akseskita-align-justify article, html.akseskita-align-justify section { text-align: justify !important; }

/* Dyslexia Mode */
@font-face {
  font-family: 'OpenDyslexic3';
  src: local('OpenDyslexic'), local('Comic Sans MS'), local('Verdana');
}

html.akseskita-dyslexia,
html.akseskita-dyslexia body,
html.akseskita-dyslexia p,
html.akseskita-dyslexia span,
html.akseskita-dyslexia a,
html.akseskita-dyslexia li,
html.akseskita-dyslexia h1,
html.akseskita-dyslexia h2,
html.akseskita-dyslexia h3,
html.akseskita-dyslexia h4,
html.akseskita-dyslexia button,
html.akseskita-dyslexia input {
  font-family: 'OpenDyslexic3', 'Verdana', 'Arial', sans-serif !important;
  letter-spacing: 0.05em !important;
  word-spacing: 0.15em !important;
}

/* Highlight Links */
html.akseskita-highlight-links a,
html.akseskita-highlight-links a:visited {
  background-color: #fef08a !important;
  color: #0f172a !important;
  text-decoration: underline 3px solid #ca8a04 !important;
  font-weight: bold !important;
  padding: 1px 4px !important;
  border-radius: 4px !important;
  outline: 2px solid #eab308 !important;
}

/* Highlight Titles / Headings */
html.akseskita-highlight-titles h1,
html.akseskita-highlight-titles h2,
html.akseskita-highlight-titles h3,
html.akseskita-highlight-titles h4,
html.akseskita-highlight-titles h5,
html.akseskita-highlight-titles h6 {
  background: rgba(2, 132, 199, 0.12) !important;
  border-left: 5px solid #0284c7 !important;
  padding-left: 8px !important;
  border-radius: 4px !important;
}

/* ==========================================================================
   2. Color & Contrast Schemes (Hardware Accelerated)
   ========================================================================== */

/* High Contrast (Dark + Yellow/Cyan) */
html.akseskita-contrast-high,
html.akseskita-contrast-high body {
  background-color: #0b0f19 !important;
  color: #fef08a !important;
}

html.akseskita-contrast-high h1,
html.akseskita-contrast-high h2,
html.akseskita-contrast-high h3,
html.akseskita-contrast-high h4,
html.akseskita-contrast-high h5,
html.akseskita-contrast-high h6,
html.akseskita-contrast-high p,
html.akseskita-contrast-high span,
html.akseskita-contrast-high li,
html.akseskita-contrast-high label,
html.akseskita-contrast-high header,
html.akseskita-contrast-high footer,
html.akseskita-contrast-high nav,
html.akseskita-contrast-high aside,
html.akseskita-contrast-high main {
  background-color: transparent !important;
  color: #ffff00 !important;
  border-color: #ffff00 !important;
}

html.akseskita-contrast-high a {
  color: #38bdf8 !important;
  text-decoration: underline !important;
}

html.akseskita-contrast-high button,
html.akseskita-contrast-high input,
html.akseskita-contrast-high textarea,
html.akseskita-contrast-high select {
  background-color: #000000 !important;
  color: #ffff00 !important;
  border: 2px solid #ffff00 !important;
}

/* Dark Contrast (Dark + White) */
html.akseskita-contrast-dark,
html.akseskita-contrast-dark body {
  background-color: #121212 !important;
  color: #f8fafc !important;
}

html.akseskita-contrast-dark h1,
html.akseskita-contrast-dark h2,
html.akseskita-contrast-dark h3,
html.akseskita-contrast-dark p,
html.akseskita-contrast-dark span,
html.akseskita-contrast-dark li {
  background-color: transparent !important;
  color: #f8fafc !important;
}

html.akseskita-contrast-dark a {
  color: #60a5fa !important;
}

/* Light Contrast (Pitch Black on Pure White) */
html.akseskita-contrast-light,
html.akseskita-contrast-light body {
  background-color: #ffffff !important;
  color: #000000 !important;
}

html.akseskita-contrast-light h1,
html.akseskita-contrast-light h2,
html.akseskita-contrast-light h3,
html.akseskita-contrast-light p,
html.akseskita-contrast-light span,
html.akseskita-contrast-light li {
  color: #000000 !important;
}

/* Low Saturation (50%) */
html.akseskita-low-sat body > *:not(akses-kita):not(#akseskita-reading-guide):not(#akseskita-tts-popover) {
  filter: saturate(50%) !important;
}

/* High Saturation (180%) */
html.akseskita-high-sat body > *:not(akses-kita):not(#akseskita-reading-guide):not(#akseskita-tts-popover) {
  filter: saturate(180%) !important;
}

/* Monochrome Filter Overlay */
#akseskita-monochrome-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: grayscale(100%);
  -webkit-backdrop-filter: grayscale(100%);
  pointer-events: none;
  z-index: 2147483640;
  display: none;
  transform: translateZ(0);
  will-change: backdrop-filter;
}

html.akseskita-monochrome #akseskita-monochrome-overlay {
  display: block !important;
}

/* Invert Filter Overlay */
#akseskita-invert-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: invert(100%) hue-rotate(180deg);
  -webkit-backdrop-filter: invert(100%) hue-rotate(180deg);
  pointer-events: none;
  z-index: 2147483640;
  display: none;
  transform: translateZ(0);
  will-change: backdrop-filter;
}

html.akseskita-invert #akseskita-invert-overlay {
  display: block !important;
}

html.akseskita-invert img,
html.akseskita-invert video,
html.akseskita-invert picture,
html.akseskita-invert canvas {
  filter: invert(100%) hue-rotate(180deg) !important;
}

/* ==========================================================================
   3. Visual & Navigation Aids + Usability (High Performance)
   ========================================================================== */

/* Screen Reader & Continuous Page Reader Element Highlight */
.akseskita-reader-highlight {
  outline: 3px solid #0284c7 !important;
  outline-offset: 3px !important;
  background-color: rgba(2, 132, 199, 0.15) !important;
  border-radius: 6px !important;
  transition: all 0.15s ease !important;
}

/* Reading Line Guide (GPU Accelerated) */
#akseskita-reading-guide {
  position: fixed;
  left: 0;
  width: 100vw;
  height: 32px;
  background: rgba(250, 204, 21, 0.32);
  border-top: 2px solid #eab308;
  border-bottom: 2px solid #eab308;
  pointer-events: none;
  z-index: 2147483640;
  display: none;
  transform: translate3d(0, -50%, 0);
  will-change: top;
}

/* Reading Mask Curtains */
.akseskita-mask-curtain {
  position: fixed;
  left: 0;
  width: 100vw;
  background: rgba(0, 0, 0, 0.72);
  pointer-events: none;
  z-index: 2147483640;
  display: none;
  will-change: top, height;
}

#akseskita-reading-mask-top {
  top: 0;
  height: 200px;
}

#akseskita-reading-mask-bottom {
  top: 320px;
  bottom: 0;
  height: auto;
}

/* Super Focus Spotlight Box (High-Performance Hardware Box Overlay) */
#akseskita-super-focus-box {
  position: absolute;
  pointer-events: none;
  z-index: 2147483639;
  display: none;
  border-radius: 8px;
  outline: 3px solid #0284c7;
  outline-offset: 4px;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.65);
  transition: all 0.1s ease-out;
  will-change: top, left, width, height;
}

/* Big Cursor */
html.akseskita-big-cursor,
html.akseskita-big-cursor * {
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='%23000000' stroke='%23ffffff' stroke-width='1.5'%3E%3Cpath d='M3 3l7 18 3-7 7-3L3 3z'/%3E%3C/svg%3E"), auto !important;
}

/* Stop Animations */
html.akseskita-stop-anim *,
html.akseskita-stop-anim *::before,
html.akseskita-stop-anim *::after {
  animation: none !important;
  transition: none !important;
  scroll-behavior: auto !important;
}

/* Hide Images */
html.akseskita-hide-images img,
html.akseskita-hide-images svg:not(akses-kita svg),
html.akseskita-hide-images picture,
html.akseskita-hide-images video,
html.akseskita-hide-images [style*="background-image"] {
  visibility: hidden !important;
  opacity: 0 !important;
}

/* Image Tooltips Badge */
#akseskita-image-tooltip-badge {
  position: absolute;
  z-index: 2147483644;
  display: none;
  background: rgba(15, 23, 42, 0.94);
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 8px;
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  pointer-events: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Quick TTS Floating Popover */
#akseskita-tts-popover {
  position: absolute;
  z-index: 2147483645;
  display: none;
  align-items: center;
  gap: 8px;
  background: #0f172a;
  color: #ffffff;
  padding: 8px 14px;
  border-radius: 9999px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3);
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 13px;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.15);
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;
  user-select: none;
  animation: aksesKitaPopIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

#akseskita-tts-popover:hover {
  background: #1e293b;
  transform: translateY(-2px) scale(1.03);
}

#akseskita-tts-popover svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

@keyframes aksesKitaPopIn {
  from {
    opacity: 0;
    transform: translateY(6px) scale(0.92);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
`;
