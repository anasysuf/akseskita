/**
 * AksesKita - Host Injected Stylesheet
 * Injected into host page document.head to style the target web page non-destructively.
 */

export const hostStyles = `
/* AksesKita Font Scaler */
html.akseskita-scale-0 { --akseskita-font-scale: 1; }
html.akseskita-scale-1 { --akseskita-font-scale: 1.15; }
html.akseskita-scale-2 { --akseskita-font-scale: 1.30; }
html.akseskita-scale-3 { --akseskita-font-scale: 1.50; }

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
  line-height: calc(1.5 * var(--akseskita-font-scale, 1));
}

/* Dyslexia Friendly Mode */
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
  line-height: 1.8 !important;
}

/* High Contrast Mode */
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

/* Monochrome Mode with Non-Breaking Overlay */
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

/* Fallback if backdrop-filter is not supported */
@supports not (backdrop-filter: grayscale(100%)) {
  html.akseskita-monochrome body > *:not(akses-kita):not(#akseskita-reading-guide):not(#akseskita-tts-popover):not(#akseskita-monochrome-overlay):not(#akseskita-invert-overlay) {
    filter: grayscale(100%) !important;
  }
}

/* Invert Filter Mode with Non-Breaking Overlay */
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

@supports not (backdrop-filter: invert(100%)) {
  html.akseskita-invert body > *:not(akses-kita):not(#akseskita-reading-guide):not(#akseskita-tts-popover):not(#akseskita-monochrome-overlay):not(#akseskita-invert-overlay) {
    filter: invert(100%) hue-rotate(180deg) !important;
  }
}

/* Highlight Links Mode */
html.akseskita-highlight-links a,
html.akseskita-highlight-links a:visited {
  background-color: #fef08a !important;
  color: #0f172a !important;
  text-decoration: underline 3px solid #ca8a04 !important;
  font-weight: bold !important;
  padding: 1px 4px !important;
  border-radius: 3px !important;
  box-shadow: 0 0 0 2px #eab308 !important;
}

/* Reading Line Guide */
#akseskita-reading-guide {
  position: fixed;
  left: 0;
  width: 100vw;
  height: 28px;
  background: rgba(250, 204, 21, 0.28);
  border-top: 2px solid #eab308;
  border-bottom: 2px solid #eab308;
  pointer-events: none;
  z-index: 2147483640;
  display: none;
  transform: translateY(-50%);
  transition: top 0.05s linear;
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
