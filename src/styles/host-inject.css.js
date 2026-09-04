/**
 * AksesKita - Comprehensive Host Injected Stylesheet
 * Injected into document.head to style the target web page non-destructively.
 */

export const hostStyles = `
/* ==========================================================================
   1. Typography & Content Scaling
   ========================================================================== */
html.akseskita-scale-0 { --akseskita-font-scale: 1; }
html.akseskita-scale-1 { --akseskita-font-scale: 1.15; }
html.akseskita-scale-2 { --akseskita-font-scale: 1.30; }
html.akseskita-scale-3 { --akseskita-font-scale: 1.50; }
html.akseskita-scale-4 { --akseskita-font-scale: 1.75; }

html[class*="akseskita-scale-"] body {
  font-size: calc(1rem * var(--akseskita-font-scale, 1)) !important;
}

html[class*="akseskita-scale-"] p,
html[class*="akseskita-scale-"] span,
html[class*="akseskita-scale-"] a,
html[class*="akseskita-scale-"] li,
html[class*="akseskita-scale-"] label,
html[class*="akseskita-scale-"] button,
html[class*="akseskita-scale-"] input,
html[class*="akseskita-scale-"] textarea,
html[class*="akseskita-scale-"] select {
  font-size: calc(1em * var(--akseskita-font-scale, 1));
}

/* Font Weight */
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
html.akseskita-lh-1 body,
html.akseskita-lh-1 p,
html.akseskita-lh-1 span,
html.akseskita-lh-1 li,
html.akseskita-lh-1 a {
  line-height: 1.8 !important;
}

html.akseskita-lh-2 body,
html.akseskita-lh-2 p,
html.akseskita-lh-2 span,
html.akseskita-lh-2 li,
html.akseskita-lh-2 a {
  line-height: 2.2 !important;
}

/* Letter Spacing */
html.akseskita-ls-1 body,
html.akseskita-ls-1 p,
html.akseskita-ls-1 span,
html.akseskita-ls-1 li,
html.akseskita-ls-1 h1,
html.akseskita-ls-1 h2,
html.akseskita-ls-1 h3 {
  letter-spacing: 0.08em !important;
}

html.akseskita-ls-2 body,
html.akseskita-ls-2 p,
html.akseskita-ls-2 span,
html.akseskita-ls-2 li,
html.akseskita-ls-2 h1,
html.akseskita-ls-2 h2,
html.akseskita-ls-2 h3 {
  letter-spacing: 0.16em !important;
}

/* Text Alignment */
html.akseskita-align-left body,
html.akseskita-align-left p,
html.akseskita-align-left div,
html.akseskita-align-left article,
html.akseskita-align-left section {
  text-align: left !important;
}

html.akseskita-align-center body,
html.akseskita-align-center p,
html.akseskita-align-center div,
html.akseskita-align-center article,
html.akseskita-align-center section {
  text-align: center !important;
}

html.akseskita-align-right body,
html.akseskita-align-right p,
html.akseskita-align-right div,
html.akseskita-align-right article,
html.akseskita-align-right section {
  text-align: right !important;
}

html.akseskita-align-justify body,
html.akseskita-align-justify p,
html.akseskita-align-justify div,
html.akseskita-align-justify article,
html.akseskita-align-justify section {
  text-align: justify !important;
}

/* Dyslexia Mode */
@font-face {
  font-family: 'OpenDyslexic3';
  src: local('OpenDyslexic'), local('Comic Sans MS'), local('Verdana');
}

html.akseskita-dyslexia,
html.akseskita-dyslexia body,
html.akseskita-dyslexia h1,
html.akseskita-dyslexia h2,
html.akseskita-dyslexia h3,
html.akseskita-dyslexia h4,
html.akseskita-dyslexia h5,
html.akseskita-dyslexia h6,
html.akseskita-dyslexia p,
html.akseskita-dyslexia span,
html.akseskita-dyslexia a,
html.akseskita-dyslexia li,
html.akseskita-dyslexia button,
html.akseskita-dyslexia input,
html.akseskita-dyslexia textarea {
  font-family: 'OpenDyslexic3', 'Verdana', 'Arial', sans-serif !important;
  letter-spacing: 0.05em !important;
  word-spacing: 0.15em !important;
  line-height: 1.85 !important;
}

/* Highlight Links */
html.akseskita-highlight-links a,
html.akseskita-highlight-links a:visited {
  background-color: #fef08a !important;
  color: #0f172a !important;
  text-decoration: underline 3px solid #ca8a04 !important;
  font-weight: bold !important;
  padding: 1px 5px !important;
  border-radius: 4px !important;
  box-shadow: 0 0 0 2px #eab308 !important;
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
  padding-left: 10px !important;
  border-radius: 4px !important;
}

/* ==========================================================================
   2. Color & Contrast Schemes
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
html.akseskita-contrast-high div,
html.akseskita-contrast-high article,
html.akseskita-contrast-high section,
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

/* Dark Contrast (Dark + Crisp White) */
html.akseskita-contrast-dark,
html.akseskita-contrast-dark body {
  background-color: #121212 !important;
  color: #f8fafc !important;
}

html.akseskita-contrast-dark h1,
html.akseskita-contrast-dark h2,
html.akseskita-contrast-dark h3,
html.akseskita-contrast-dark h4,
html.akseskita-contrast-dark h5,
html.akseskita-contrast-dark h6,
html.akseskita-contrast-dark p,
html.akseskita-contrast-dark span,
html.akseskita-contrast-dark li,
html.akseskita-contrast-dark div,
html.akseskita-contrast-dark section,
html.akseskita-contrast-dark article {
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
html.akseskita-contrast-light h4,
html.akseskita-contrast-light h5,
html.akseskita-contrast-light h6,
html.akseskita-contrast-light p,
html.akseskita-contrast-light span,
html.akseskita-contrast-light li,
html.akseskita-contrast-light div {
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
}

html.akseskita-monochrome #akseskita-monochrome-overlay {
  display: block !important;
}

@supports not (backdrop-filter: grayscale(100%)) {
  html.akseskita-monochrome body > *:not(akses-kita):not(#akseskita-reading-guide):not(#akseskita-tts-popover):not(#akseskita-monochrome-overlay):not(#akseskita-invert-overlay) {
    filter: grayscale(100%) !important;
  }
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
   3. Visual & Navigation Aids + Usability
   ========================================================================== */

/* Reading Line Guide */
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
  transform: translateY(-50%);
  transition: top 0.05s linear;
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
  transition: top 0.05s linear, height 0.05s linear;
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

/* Super Focus Mode */
html.akseskita-super-focus body {
  background-color: #000000 !important;
}

html.akseskita-super-focus body > *:not(akses-kita):not(#akseskita-reading-guide):not(#akseskita-tts-popover) {
  opacity: 0.35 !important;
  filter: blur(1px) !important;
  transition: opacity 0.2s ease, filter 0.2s ease !important;
}

html.akseskita-super-focus .akseskita-focus-target,
html.akseskita-super-focus .akseskita-focus-target * {
  opacity: 1 !important;
  filter: none !important;
  outline: 3px solid #0284c7 !important;
  outline-offset: 3px !important;
  background-color: #ffffff !important;
  color: #0f172a !important;
  border-radius: 4px !important;
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
