/**
 * AksesKita - High Performance Host Injected Stylesheet (60 FPS Optimized)
 * Injected into document.head to style the target web page smoothly without layout thrashing.
 */

const hostStyles = `
/* ==========================================================================
   1. Typography & Content Scaling (Root-Based, Zero Compound Recursion)
   ========================================================================== */
html.akseskita-scale-sub1 { --akseskita-font-scale: 0.75; }
html.akseskita-scale-0    { --akseskita-font-scale: 1.00; }
html.akseskita-scale-1    { --akseskita-font-scale: 1.25; }
html.akseskita-scale-2    { --akseskita-font-scale: 1.50; }
html.akseskita-scale-3    { --akseskita-font-scale: 1.75; }
html.akseskita-scale-4    { --akseskita-font-scale: 2.00; }

html[class*="akseskita-scale-"] {
  font-size: calc(100% * var(--akseskita-font-scale, 1)) !important;
}

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

/**
 * AksesKita - Shadow DOM Encapsulated Stylesheet
 * Fully self-contained styles for the FAB trigger, A11y Toolbar panel, and Fullscreen AAC Communicator.
 */

const a11yStyles = `
:host {
  --ak-primary: #0284c7;
  --ak-primary-hover: #0369a1;
  --ak-primary-light: #e0f2fe;
  --ak-accent: #f59e0b;
  --ak-bg: #ffffff;
  --ak-card-bg: #f8fafc;
  --ak-text-main: #0f172a;
  --ak-text-muted: #64748b;
  --ak-border: #e2e8f0;
  --ak-radius: 14px;
  --ak-shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  --ak-shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color: var(--ak-text-main);
  line-height: 1.5;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Floating Action Button (Trigger) */
.fab-trigger {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 2147483646;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 9999px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 25px -5px rgba(2, 132, 199, 0.5), 0 8px 10px -6px rgba(2, 132, 199, 0.3);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;
}

.fab-trigger:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 14px 28px -5px rgba(2, 132, 199, 0.6), 0 10px 10px -5px rgba(2, 132, 199, 0.4);
  background: linear-gradient(135deg, #0369a1 0%, #075985 100%);
}

.fab-trigger:focus-visible {
  outline: 3px solid #facc15;
  outline-offset: 3px;
}

.fab-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  font-size: 16px;
}

/* Toolbar Panel Container */
.panel-container {
  position: fixed;
  bottom: 84px;
  right: 24px;
  width: 420px;
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 100px);
  background: #ffffff;
  border: 1px solid var(--ak-border);
  border-radius: 20px;
  box-shadow: var(--ak-shadow-xl);
  z-index: 2147483646;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  animation: panelSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.panel-container.hidden {
  display: none !important;
}

@keyframes panelSlideUp {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Panel Header */
.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  background: #f8fafc;
  border-bottom: 1px solid var(--ak-border);
  position: sticky;
  top: 0;
  z-index: 10;
}

.panel-title-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.panel-title-wrapper h3 {
  font-size: 16px;
  font-weight: 800;
  color: var(--ak-text-main);
  letter-spacing: -0.02em;
}

.panel-title-badge {
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  background: #e0f2fe;
  color: #0369a1;
  padding: 2px 7px;
  border-radius: 9999px;
  letter-spacing: 0.05em;
}

/* Language Switcher Pill */
.lang-toggle-bar {
  display: inline-flex;
  align-items: center;
  background: #e2e8f0;
  border-radius: 9999px;
  padding: 2px;
  gap: 2px;
}

.lang-btn {
  background: transparent;
  border: none;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 9999px;
  color: #475569;
  cursor: pointer;
  transition: all 0.15s ease;
}

.lang-btn.active {
  background: #ffffff;
  color: #0284c7;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.btn-icon-close {
  background: none;
  border: none;
  font-size: 22px;
  color: var(--ak-text-muted);
  cursor: pointer;
  padding: 4px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: background 0.15s ease;
}

.btn-icon-close:hover {
  background: #e2e8f0;
  color: var(--ak-text-main);
}

/* Panel Category Navigation Tabs */
.panel-nav-tabs {
  display: flex;
  background: #ffffff;
  border-bottom: 1px solid var(--ak-border);
  padding: 6px 12px;
  gap: 6px;
  overflow-x: auto;
  position: sticky;
  top: 56px;
  z-index: 9;
}

.panel-tab-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 10px;
  border: 1px solid transparent;
  background: transparent;
  color: #64748b;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s ease;
}

.panel-tab-btn:hover {
  background: #f1f5f9;
  color: #0f172a;
}

.panel-tab-btn.active {
  background: #e0f2fe;
  color: #0284c7;
  border-color: #bae6fd;
}

/* Panel Body */
.panel-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

/* Section Header */
.section-label {
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #64748b;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* AAC Launcher CTA */
.btn-aac-launch {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 12px 16px;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
  transition: all 0.2s ease;
}

.btn-aac-launch:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(245, 158, 11, 0.4);
  background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
}

/* Preset Profile Cards Grid */
.profiles-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.profile-card {
  display: flex;
  flex-direction: column;
  padding: 12px;
  background: #f8fafc;
  border: 1px solid var(--ak-border);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.15s ease;
  text-align: left;
}

.profile-card:hover {
  background: #ffffff;
  border-color: #cbd5e1;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}

.profile-card.active {
  background: #f0fdf4;
  border-color: #22c55e;
  box-shadow: 0 0 0 1px #22c55e;
}

.profile-card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.profile-card-icon {
  font-size: 18px;
}

.profile-card-title {
  font-size: 12px;
  font-weight: 700;
  color: #0f172a;
}

.profile-card-desc {
  font-size: 10px;
  color: #64748b;
  line-height: 1.35;
}

/* Generic Button Grid */
.button-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}

.button-grid.cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.button-grid.cols-4 {
  grid-template-columns: repeat(4, 1fr);
}

/* Font Size Stepper Box (75% - 200%) */
.font-scaler-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f8fafc;
  border: 1px solid var(--ak-border);
  border-radius: 14px;
  padding: 8px 12px;
  gap: 10px;
}

.font-scale-value-badge {
  font-size: 14px;
  font-weight: 800;
  color: #0284c7;
  background: #e0f2fe;
  padding: 6px 14px;
  border-radius: 10px;
  min-width: 68px;
  text-align: center;
  user-select: none;
  border: 1px solid #bae6fd;
}

.font-step-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 800;
  color: #0f172a;
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
}

.font-step-btn:hover {
  background: #0284c7;
  color: #ffffff;
  border-color: #0284c7;
  transform: scale(1.05);
}

.font-presets-row {
  display: flex;
  gap: 5px;
  margin-top: 8px;
}

.font-preset-chip {
  flex: 1;
  padding: 6px 0;
  font-size: 11px;
  font-weight: 700;
  border: 1px solid var(--ak-border);
  background: #f8fafc;
  color: #475569;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  transition: all 0.15s ease;
  user-select: none;
}

.font-preset-chip:hover {
  background: #f1f5f9;
  color: #0f172a;
}

.font-preset-chip.active {
  background: #0284c7;
  color: #ffffff;
  border-color: #0284c7;
  box-shadow: 0 2px 6px rgba(2, 132, 199, 0.25);
}

.tool-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 8px;
  background: #f8fafc;
  border: 1px solid var(--ak-border);
  border-radius: 12px;
  color: var(--ak-text-main);
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
  text-align: center;
}

.tool-btn:hover {
  background: #ffffff;
  border-color: #cbd5e1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}

.tool-btn.active {
  background: #e0f2fe;
  border-color: #0284c7;
  color: #0284c7;
  box-shadow: 0 0 0 1px #0284c7;
}

.btn-icon {
  font-size: 18px;
}

/* Text Alignment Segmented Control */
.align-segmented-bar {
  display: flex;
  background: #f1f5f9;
  border-radius: 10px;
  padding: 3px;
  gap: 3px;
}

.align-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 0;
  border: none;
  background: transparent;
  border-radius: 7px;
  font-size: 14px;
  color: #475569;
  cursor: pointer;
  transition: all 0.15s ease;
}

.align-btn:hover {
  background: #e2e8f0;
  color: #0f172a;
}

.align-btn.active {
  background: #ffffff;
  color: #0284c7;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Panel Footer */
.panel-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 18px;
  background: #f8fafc;
  border-top: 1px solid var(--ak-border);
  font-size: 11px;
  color: var(--ak-text-muted);
}

.reset-link {
  background: none;
  border: none;
  color: #ef4444;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background 0.15s ease;
}

.reset-link:hover {
  background: #fee2e2;
}

/* Audio & Screen Reader Tab Styles */
.audio-card-box {
  background: #f8fafc;
  border: 1px solid var(--ak-border);
  border-radius: 14px;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
  transition: all 0.15s ease;
}

.audio-card-box.active {
  background: #eff6ff;
  border-color: #0284c7;
  box-shadow: 0 0 0 1px #0284c7;
}

.audio-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.audio-card-title-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 800;
  color: #0f172a;
}

.shortcut-kbd {
  font-size: 10px;
  font-weight: 800;
  background: #e2e8f0;
  color: #334155;
  padding: 2px 6px;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  font-family: monospace;
}

.audio-card-desc {
  font-size: 11px;
  color: #64748b;
  line-height: 1.35;
}

.speech-rate-grid {
  display: flex;
  gap: 6px;
}

.speech-rate-chip {
  flex: 1;
  padding: 8px 0;
  font-size: 11px;
  font-weight: 700;
  border: 1px solid var(--ak-border);
  background: #ffffff;
  color: #475569;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  transition: all 0.15s ease;
  user-select: none;
}

.speech-rate-chip:hover {
  background: #f1f5f9;
  color: #0f172a;
}

.speech-rate-chip.active {
  background: #0284c7;
  color: #ffffff;
  border-color: #0284c7;
  box-shadow: 0 2px 6px rgba(2, 132, 199, 0.25);
}

.btn-audio-action {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 14px;
  background: #ffffff;
  border: 1px solid var(--ak-border);
  border-radius: 12px;
  color: #0f172a;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
}

.btn-audio-action:hover {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.btn-audio-action.active {
  background: #e0f2fe;
  color: #0284c7;
  border-color: #0284c7;
  box-shadow: 0 0 0 1px #0284c7;
}

.btn-audio-action.danger {
  color: #ef4444;
  border-color: #fecaca;
  background: #fff5f5;
}

.btn-audio-action.danger:hover {
  background: #fee2e2;
  border-color: #ef4444;
}
`;

const aacModalStyles = `
/* Fullscreen AAC Communicator Backdrop */
.aac-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 2147483647;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  animation: fadeIn 0.2s ease-out;
}

.aac-backdrop.hidden {
  display: none !important;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* AAC Window Card */
.aac-window {
  width: 960px;
  max-width: 100%;
  height: 88vh;
  max-height: 840px;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* AAC Header */
.aac-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  background: #ffffff;
  border-bottom: 2px solid #f1f5f9;
}

.aac-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.aac-header-icon {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: #ffffff;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.aac-header-title {
  font-size: 19px;
  font-weight: 800;
  color: #0f172a;
}

.aac-header-subtitle {
  font-size: 12px;
  color: #64748b;
}

.aac-header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-secondary-action {
  padding: 8px 14px;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  color: #334155;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease;
}

.btn-secondary-action:hover {
  background: #e2e8f0;
  color: #0f172a;
}

/* Sentence Strip (Pita Kalimat) */
.sentence-strip-wrapper {
  background: #f8fafc;
  border-bottom: 2px solid #e2e8f0;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.sentence-items-container {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 64px;
  background: #ffffff;
  border: 2px dashed #cbd5e1;
  border-radius: 16px;
  padding: 8px 14px;
  overflow-x: auto;
  scroll-behavior: smooth;
}

.sentence-empty-placeholder {
  color: #94a3b8;
  font-size: 14px;
  font-style: italic;
  user-select: none;
}

.sentence-card {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f1f5f9;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
  white-space: nowrap;
  animation: cardPop 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  transition: all 0.15s ease;
}

.sentence-card.highlight-reading {
  background: #fef08a !important;
  border-color: #ca8a04 !important;
  transform: scale(1.08);
  box-shadow: 0 4px 12px rgba(202, 138, 4, 0.3);
}

.sentence-card-remove {
  background: none;
  border: none;
  color: #94a3b8;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 4px;
  border-radius: 50%;
  padding: 0 4px;
}

.sentence-card-remove:hover {
  color: #ef4444;
}

.sentence-actions {
  display: flex;
  gap: 8px;
}

.btn-speak-main {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
  color: #ffffff;
  border: none;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(22, 163, 74, 0.3);
  transition: all 0.2s ease;
}

.btn-speak-main:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(22, 163, 74, 0.4);
}

.btn-strip-action {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  color: #475569;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease;
}

.btn-strip-action:hover {
  background: #e2e8f0;
  color: #0f172a;
}

/* Category Filter Bar */
.category-tabs-bar {
  display: flex;
  gap: 8px;
  padding: 12px 24px;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  overflow-x: auto;
}

.cat-tab-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 700;
  color: #475569;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s ease;
}

.cat-tab-btn:hover {
  background: #f1f5f9;
  color: #0f172a;
}

.cat-tab-btn.active {
  background: #0284c7;
  color: #ffffff;
  border-color: #0284c7;
  box-shadow: 0 2px 8px rgba(2, 132, 199, 0.3);
}

/* Main Cards Grid View */
.aac-body {
  flex: 1;
  padding: 20px 24px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 14px;
  align-content: start;
}

.aac-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 14px 10px;
  background: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 18px;
  cursor: pointer;
  transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  text-align: center;
  user-select: none;
}

.aac-card:hover {
  transform: translateY(-4px) scale(1.02);
  border-color: #0284c7;
  box-shadow: 0 10px 20px -5px rgba(2, 132, 199, 0.2);
}

.aac-card:focus-visible {
  outline: 3px solid #0284c7;
  outline-offset: 2px;
}

.aac-card-icon-wrap {
  width: 58px;
  height: 58px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-bottom: 8px;
  border: 1px solid #e2e8f0;
}

.aac-card-icon-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 13px;
}

.aac-card-label {
  font-size: 13px;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.25;
}

.aac-card-badge-custom {
  position: absolute;
  top: 8px;
  left: 8px;
  font-size: 9px;
  font-weight: 800;
  background: #fef08a;
  color: #854d0e;
  padding: 2px 6px;
  border-radius: 6px;
}

.aac-card-delete-btn {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 22px;
  height: 22px;
  background: #fee2e2;
  color: #ef4444;
  border: none;
  border-radius: 50%;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.aac-card-delete-btn:hover {
  background: #ef4444;
  color: #ffffff;
}

/* Floating Add Card Action */
.btn-fab-add {
  position: absolute;
  bottom: 24px;
  right: 32px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
  color: #ffffff;
  border: none;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(2, 132, 199, 0.4);
  transition: all 0.2s ease;
}

.btn-fab-add:hover {
  transform: translateY(-3px) scale(1.04);
  box-shadow: 0 14px 28px rgba(2, 132, 199, 0.5);
}

/* Custom Card Creator Dialog */
.custom-card-modal {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
}

.custom-card-modal.hidden {
  display: none !important;
}

.custom-card-dialog {
  width: 440px;
  max-width: 90%;
  background: #ffffff;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 13px;
  font-weight: 700;
  color: #334155;
}

.form-input, .form-select {
  padding: 10px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.15s ease;
}

.form-input:focus, .form-select:focus {
  border-color: #0284c7;
}

.recorder-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: #f8fafc;
  border: 1px dashed #cbd5e1;
  border-radius: 10px;
}

.btn-record {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease;
}

.btn-record.recording {
  background: #ef4444;
  color: #ffffff;
  border-color: #dc2626;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@keyframes cardPop {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}
`;

/**
 * AksesKita - Native IndexedDB Wrapper
 * Zero external dependency storage for AAC categories, cards, and voice blobs.
 */

const DB_NAME = 'AksesKitaDB';
const DB_VERSION = 1;

let dbInstance = null;

function openAksesKitaDB() {
  if (dbInstance) return Promise.resolve(dbInstance);

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (e) => {
      const db = e.target.result;

      if (!db.objectStoreNames.contains('categories')) {
        const catStore = db.createObjectStore('categories', { keyPath: 'id', autoIncrement: true });
        catStore.createIndex('name', 'name', { unique: false });
      }

      if (!db.objectStoreNames.contains('cards')) {
        const cardStore = db.createObjectStore('cards', { keyPath: 'id', autoIncrement: true });
        cardStore.createIndex('categoryId', 'categoryId', { unique: false });
      }

      if (!db.objectStoreNames.contains('settings')) {
        db.createObjectStore('settings', { keyPath: 'key' });
      }
    };

    request.onsuccess = (e) => {
      dbInstance = e.target.result;
      resolve(dbInstance);
    };

    request.onerror = (e) => {
      console.error('[AksesKita] IndexedDB error:', e.target.error);
      reject(e.target.error);
    };
  });
}

/**
 * Get all categories
 */
async function getAllCategories() {
  const db = await openAksesKitaDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('categories', 'readonly');
    const store = tx.objectStore('categories');
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Add category
 */
async function addCategory(category) {
  const db = await openAksesKitaDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('categories', 'readwrite');
    const store = tx.objectStore('categories');
    const request = store.add(category);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Get cards optionally filtered by category
 */
async function getAllCards(categoryId = null) {
  const db = await openAksesKitaDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('cards', 'readonly');
    const store = tx.objectStore('cards');
    
    if (categoryId !== null && categoryId !== undefined && categoryId !== 'all') {
      const index = store.index('categoryId');
      const request = index.getAll(Number(categoryId));
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    } else {
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    }
  });
}

/**
 * Add single card
 */
async function addCard(card) {
  const db = await openAksesKitaDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('cards', 'readwrite');
    const store = tx.objectStore('cards');
    const request = store.add({
      ...card,
      createdAt: Date.now()
    });
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Delete card by ID
 */
async function deleteCard(cardId) {
  const db = await openAksesKitaDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('cards', 'readwrite');
    const store = tx.objectStore('cards');
    const request = store.delete(Number(cardId));
    request.onsuccess = () => resolve(true);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Helper to convert Blob to Base64 Data URL
 */
function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    if (!blob) return resolve(null);
    if (typeof blob === 'string') return resolve(blob);
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

/**
 * Helper to convert Base64 Data URL to Blob
 */
function base64ToBlob(base64) {
  if (!base64 || typeof base64 !== 'string' || !base64.startsWith('data:')) return null;
  const parts = base64.split(';base64,');
  const contentType = parts[0].split(':')[1];
  const raw = window.atob(parts[1]);
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);
  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }
  return new Blob([uInt8Array], { type: contentType });
}

/**
 * Export AAC database to JSON
 */
async function exportBackup() {
  const categories = await getAllCategories();
  const rawCards = await getAllCards();

  const cards = await Promise.all(rawCards.map(async (c) => {
    let audioData = null;
    if (c.audioBlob instanceof Blob) {
      audioData = await blobToBase64(c.audioBlob);
    } else if (typeof c.audioBlob === 'string') {
      audioData = c.audioBlob;
    }
    return {
      ...c,
      audioBlob: audioData
    };
  }));

  return JSON.stringify({
    version: 1,
    exportedAt: new Date().toISOString(),
    categories,
    cards
  }, null, 2);
}

/**
 * Import AAC database from JSON
 */
async function importBackup(jsonString) {
  const data = JSON.parse(jsonString);
  if (!data.categories || !data.cards) {
    throw new Error('Format file backup tidak valid');
  }

  const db = await openAksesKitaDB();

  // Clear existing
  await new Promise((resolve, reject) => {
    const tx = db.transaction(['categories', 'cards'], 'readwrite');
    tx.objectStore('categories').clear();
    tx.objectStore('cards').clear();
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });

  // Re-insert categories
  for (const cat of data.categories) {
    await addCategory(cat);
  }

  // Re-insert cards
  for (const card of data.cards) {
    let blob = null;
    if (card.audioBlob && typeof card.audioBlob === 'string' && card.audioBlob.startsWith('data:')) {
      blob = base64ToBlob(card.audioBlob);
    }
    await addCard({
      ...card,
      audioBlob: blob
    });
  }

  return true;
}

/**
 * Initialize default AAC categories and cards if store is empty
 */
async function initDefaultData(defaultCategories, defaultCards) {
  const existingCategories = await getAllCategories();
  if (existingCategories.length === 0) {
    for (const cat of defaultCategories) {
      await addCategory(cat);
    }
  }

  const existingCards = await getAllCards();
  if (existingCards.length === 0) {
    for (const card of defaultCards) {
      await addCard(card);
    }
  }
}

/**
 * AksesKita - Default AAC Symbols (Bilingual: ID & EN)
 * Crisp, lightweight inline SVG symbols tailored for assistive communication.
 */

const defaultCategories = [
  { id: 1, name: 'Kebutuhan', nameEn: 'Needs', icon: '🍽️', color: '#EA580C' },
  { id: 2, name: 'Respon', nameEn: 'Responses', icon: '💬', color: '#16A34A' },
  { id: 3, name: 'Perasaan', nameEn: 'Feelings', icon: '😊', color: '#2563EB' },
  { id: 4, name: 'Aktivitas & Orang', nameEn: 'Activities & People', icon: '👥', color: '#9333EA' }
];

const defaultCards = [
  // 1. KEBUTUHAN (Category 1)
  {
    id: 101,
    categoryId: 1,
    label: 'Mau Makan',
    labelEn: 'Want Food',
    speechText: 'Saya mau makan',
    speechTextEn: 'I want to eat',
    iconEmoji: '🍚',
    bgColor: '#FFF7ED',
    borderColor: '#EA580C',
    isDefault: true
  },
  {
    id: 102,
    categoryId: 1,
    label: 'Mau Minum',
    labelEn: 'Want Water',
    speechText: 'Saya mau minum air',
    speechTextEn: 'I want to drink water',
    iconEmoji: '🥛',
    bgColor: '#FFF7ED',
    borderColor: '#EA580C',
    isDefault: true
  },
  {
    id: 103,
    categoryId: 1,
    label: 'Ke Toilet',
    labelEn: 'Restroom',
    speechText: 'Saya ingin pergi ke toilet',
    speechTextEn: 'I need to go to the restroom',
    iconEmoji: '🚻',
    bgColor: '#FFF7ED',
    borderColor: '#EA580C',
    isDefault: true
  },
  {
    id: 104,
    categoryId: 1,
    label: 'Tolong',
    labelEn: 'Help',
    speechText: 'Tolong bantu saya',
    speechTextEn: 'Please help me',
    iconEmoji: '🆘',
    bgColor: '#FFF7ED',
    borderColor: '#EA580C',
    isDefault: true
  },
  {
    id: 105,
    categoryId: 1,
    label: 'Istirahat',
    labelEn: 'Rest',
    speechText: 'Saya mau istirahat',
    speechTextEn: 'I want to take a rest',
    iconEmoji: '🛋️',
    bgColor: '#FFF7ED',
    borderColor: '#EA580C',
    isDefault: true
  },
  {
    id: 106,
    categoryId: 1,
    label: 'Sakit',
    labelEn: 'Pain / Hurt',
    speechText: 'Badan saya terasa sakit',
    speechTextEn: 'I am in pain or feeling sick',
    iconEmoji: '🩹',
    bgColor: '#FFF7ED',
    borderColor: '#EA580C',
    isDefault: true
  },
  {
    id: 107,
    categoryId: 1,
    label: 'Tidur',
    labelEn: 'Sleep',
    speechText: 'Saya mau tidur',
    speechTextEn: 'I want to go to sleep',
    iconEmoji: '🛏️',
    bgColor: '#FFF7ED',
    borderColor: '#EA580C',
    isDefault: true
  },
  {
    id: 108,
    categoryId: 1,
    label: 'Minum Obat',
    labelEn: 'Medicine',
    speechText: 'Saya butuh minum obat',
    speechTextEn: 'I need to take my medicine',
    iconEmoji: '💊',
    bgColor: '#FFF7ED',
    borderColor: '#EA580C',
    isDefault: true
  },
  {
    id: 109,
    categoryId: 1,
    label: 'Cuci Tangan',
    labelEn: 'Wash Hands',
    speechText: 'Saya mau cuci tangan',
    speechTextEn: 'I want to wash my hands',
    iconEmoji: '🧼',
    bgColor: '#FFF7ED',
    borderColor: '#EA580C',
    isDefault: true
  },
  {
    id: 110,
    categoryId: 1,
    label: 'Ganti Baju',
    labelEn: 'Change Clothes',
    speechText: 'Saya ingin ganti baju',
    speechTextEn: 'I want to change my clothes',
    iconEmoji: '👕',
    bgColor: '#FFF7ED',
    borderColor: '#EA580C',
    isDefault: true
  },

  // 2. RESPON (Category 2)
  {
    id: 201,
    categoryId: 2,
    label: 'Ya',
    labelEn: 'Yes',
    speechText: 'Ya',
    speechTextEn: 'Yes',
    iconEmoji: '👍',
    bgColor: '#F0FDF4',
    borderColor: '#16A34A',
    isDefault: true
  },
  {
    id: 202,
    categoryId: 2,
    label: 'Tidak',
    labelEn: 'No',
    speechText: 'Tidak',
    speechTextEn: 'No',
    iconEmoji: '👎',
    bgColor: '#F0FDF4',
    borderColor: '#16A34A',
    isDefault: true
  },
  {
    id: 203,
    categoryId: 2,
    label: 'Mau',
    labelEn: 'I Want',
    speechText: 'Saya mau',
    speechTextEn: 'I want this',
    iconEmoji: '👌',
    bgColor: '#F0FDF4',
    borderColor: '#16A34A',
    isDefault: true
  },
  {
    id: 204,
    categoryId: 2,
    label: 'Tidak Mau',
    labelEn: "Don't Want",
    speechText: 'Saya tidak mau',
    speechTextEn: 'I do not want this',
    iconEmoji: '🙅',
    bgColor: '#F0FDF4',
    borderColor: '#16A34A',
    isDefault: true
  },
  {
    id: 205,
    categoryId: 2,
    label: 'Terima Kasih',
    labelEn: 'Thank You',
    speechText: 'Terima kasih banyak',
    speechTextEn: 'Thank you very much',
    iconEmoji: '🙏',
    bgColor: '#F0FDF4',
    borderColor: '#16A34A',
    isDefault: true
  },
  {
    id: 206,
    categoryId: 2,
    label: 'Permisi',
    labelEn: 'Excuse Me',
    speechText: 'Permisi',
    speechTextEn: 'Excuse me',
    iconEmoji: '👋',
    bgColor: '#F0FDF4',
    borderColor: '#16A34A',
    isDefault: true
  },
  {
    id: 207,
    categoryId: 2,
    label: 'Maaf',
    labelEn: 'Sorry',
    speechText: 'Saya minta maaf',
    speechTextEn: 'I am sorry',
    iconEmoji: '🙇',
    bgColor: '#F0FDF4',
    borderColor: '#16A34A',
    isDefault: true
  },
  {
    id: 208,
    categoryId: 2,
    label: 'Tolong Ulangi',
    labelEn: 'Repeat Please',
    speechText: 'Tolong ulangi lagi',
    speechTextEn: 'Please repeat that again',
    iconEmoji: '🔄',
    bgColor: '#F0FDF4',
    borderColor: '#16A34A',
    isDefault: true
  },
  {
    id: 209,
    categoryId: 2,
    label: 'Mengerti',
    labelEn: 'Understood',
    speechText: 'Saya sudah mengerti',
    speechTextEn: 'I understand',
    iconEmoji: '💡',
    bgColor: '#F0FDF4',
    borderColor: '#16A34A',
    isDefault: true
  },
  {
    id: 210,
    categoryId: 2,
    label: 'Tidak Tahu',
    labelEn: "Don't Know",
    speechText: 'Saya tidak tahu',
    speechTextEn: 'I do not know',
    iconEmoji: '🤷',
    bgColor: '#F0FDF4',
    borderColor: '#16A34A',
    isDefault: true
  },

  // 3. PERASAAN (Category 3)
  {
    id: 301,
    categoryId: 3,
    label: 'Senang',
    labelEn: 'Happy',
    speechText: 'Saya merasa senang',
    speechTextEn: 'I feel happy',
    iconEmoji: '😄',
    bgColor: '#EFF6FF',
    borderColor: '#2563EB',
    isDefault: true
  },
  {
    id: 302,
    categoryId: 3,
    label: 'Sedih',
    labelEn: 'Sad',
    speechText: 'Saya merasa sedih',
    speechTextEn: 'I feel sad',
    iconEmoji: '😢',
    bgColor: '#EFF6FF',
    borderColor: '#2563EB',
    isDefault: true
  },
  {
    id: 303,
    categoryId: 3,
    label: 'Marah',
    labelEn: 'Angry',
    speechText: 'Saya sedang marah',
    speechTextEn: 'I feel angry',
    iconEmoji: '😠',
    bgColor: '#EFF6FF',
    borderColor: '#2563EB',
    isDefault: true
  },
  {
    id: 304,
    categoryId: 3,
    label: 'Takut',
    labelEn: 'Scared',
    speechText: 'Saya merasa takut',
    speechTextEn: 'I feel scared',
    iconEmoji: '😨',
    bgColor: '#EFF6FF',
    borderColor: '#2563EB',
    isDefault: true
  },
  {
    id: 305,
    categoryId: 3,
    label: 'Bingung',
    labelEn: 'Confused',
    speechText: 'Saya merasa bingung',
    speechTextEn: 'I feel confused',
    iconEmoji: '😕',
    bgColor: '#EFF6FF',
    borderColor: '#2563EB',
    isDefault: true
  },
  {
    id: 306,
    categoryId: 3,
    label: 'Lelah',
    labelEn: 'Tired',
    speechText: 'Saya merasa lelah sekali',
    speechTextEn: 'I feel very tired',
    iconEmoji: '😫',
    bgColor: '#EFF6FF',
    borderColor: '#2563EB',
    isDefault: true
  },
  {
    id: 307,
    categoryId: 3,
    label: 'Kaget',
    labelEn: 'Surprised',
    speechText: 'Saya kaget',
    speechTextEn: 'I am surprised',
    iconEmoji: '😲',
    bgColor: '#EFF6FF',
    borderColor: '#2563EB',
    isDefault: true
  },
  {
    id: 308,
    categoryId: 3,
    label: 'Cemas',
    labelEn: 'Anxious',
    speechText: 'Saya merasa cemas dan gelisah',
    speechTextEn: 'I feel anxious and uneasy',
    iconEmoji: '😰',
    bgColor: '#EFF6FF',
    borderColor: '#2563EB',
    isDefault: true
  },
  {
    id: 309,
    categoryId: 3,
    label: 'Bangga',
    labelEn: 'Proud',
    speechText: 'Saya bangga',
    speechTextEn: 'I feel proud',
    iconEmoji: '🌟',
    bgColor: '#EFF6FF',
    borderColor: '#2563EB',
    isDefault: true
  },

  // 4. AKTIVITAS & ORANG (Category 4)
  {
    id: 401,
    categoryId: 4,
    label: 'Saya',
    labelEn: 'Me / I',
    speechText: 'Saya',
    speechTextEn: 'Me',
    iconEmoji: '🙋',
    bgColor: '#FAF5FF',
    borderColor: '#9333EA',
    isDefault: true
  },
  {
    id: 402,
    categoryId: 4,
    label: 'Kamu',
    labelEn: 'You',
    speechText: 'Kamu',
    speechTextEn: 'You',
    iconEmoji: '👉',
    bgColor: '#FAF5FF',
    borderColor: '#9333EA',
    isDefault: true
  },
  {
    id: 403,
    categoryId: 4,
    label: 'Belajar',
    labelEn: 'Study',
    speechText: 'Saya mau belajar',
    speechTextEn: 'I want to study',
    iconEmoji: '📚',
    bgColor: '#FAF5FF',
    borderColor: '#9333EA',
    isDefault: true
  },
  {
    id: 404,
    categoryId: 4,
    label: 'Bermain',
    labelEn: 'Play',
    speechText: 'Saya mau bermain',
    speechTextEn: 'I want to play',
    iconEmoji: '⚽',
    bgColor: '#FAF5FF',
    borderColor: '#9333EA',
    isDefault: true
  },
  {
    id: 405,
    categoryId: 4,
    label: 'Jalan-jalan',
    labelEn: 'Go Outside',
    speechText: 'Mau jalan-jalan keluar',
    speechTextEn: 'I want to go for a walk outside',
    iconEmoji: '🚶',
    bgColor: '#FAF5FF',
    borderColor: '#9333EA',
    isDefault: true
  },
  {
    id: 406,
    categoryId: 4,
    label: 'Pulang',
    labelEn: 'Go Home',
    speechText: 'Saya mau pulang ke rumah',
    speechTextEn: 'I want to go home',
    iconEmoji: '🏠',
    bgColor: '#FAF5FF',
    borderColor: '#9333EA',
    isDefault: true
  },
  {
    id: 407,
    categoryId: 4,
    label: 'Ibu',
    labelEn: 'Mom / Mother',
    speechText: 'Ibu',
    speechTextEn: 'Mother',
    iconEmoji: '👩',
    bgColor: '#FAF5FF',
    borderColor: '#9333EA',
    isDefault: true
  },
  {
    id: 408,
    categoryId: 4,
    label: 'Ayah',
    labelEn: 'Dad / Father',
    speechText: 'Ayah',
    speechTextEn: 'Father',
    iconEmoji: '👨',
    bgColor: '#FAF5FF',
    borderColor: '#9333EA',
    isDefault: true
  },
  {
    id: 409,
    categoryId: 4,
    label: 'Guru',
    labelEn: 'Teacher',
    speechText: 'Bapak atau Ibu Guru',
    speechTextEn: 'Teacher',
    iconEmoji: '🧑‍🏫',
    bgColor: '#FAF5FF',
    borderColor: '#9333EA',
    isDefault: true
  },
  {
    id: 410,
    categoryId: 4,
    label: 'Teman',
    labelEn: 'Friend',
    speechText: 'Teman',
    speechTextEn: 'Friend',
    iconEmoji: '🧑‍🤝‍🧑',
    bgColor: '#FAF5FF',
    borderColor: '#9333EA',
    isDefault: true
  },
  {
    id: 411,
    categoryId: 4,
    label: 'Dokter',
    labelEn: 'Doctor',
    speechText: 'Dokter atau Petugas Medis',
    speechTextEn: 'Doctor or medical staff',
    iconEmoji: '🧑‍⚕️',
    bgColor: '#FAF5FF',
    borderColor: '#9333EA',
    isDefault: true
  }
];

/**
 * AksesKita - Internationalization (i18n) Module
 * Seamless bilingual support: Bahasa Indonesia (id) & English (en)
 */

const STORAGE_KEY_LANG = 'akseskita_lang';

const translations = {
  id: {
    // Toolbar A11y Header & Tabs
    toolbarTitle: 'AksesKita',
    a11yBadge: 'A11y Pro',
    openAacBtn: 'Buka Papan Bicara (AAC)',
    tabProfiles: 'Profil Cepat',
    tabContent: 'Tipografi',
    tabColor: 'Warna',
    tabVisual: 'Alat Visual',
    tabAudio: 'Suara (TTS)',
    shortcutHint: 'Pintasan',
    resetAll: 'Atur Ulang Semua',
    close: 'Tutup',

    // Preset Profiles
    profilesSection: '🌟 Profil Aksesibilitas 1-Klik',
    profileSeizureTitle: 'Aman Kejang',
    profileSeizureDesc: 'Hentikan animasi & kurangi saturasi warna',
    profileVisionTitle: 'Gangguan Penglihatan',
    profileVisionDesc: 'Kontras tinggi, perbesar teks, & sorot tautan',
    profileAdhdTitle: 'Ramah ADHD',
    profileAdhdDesc: 'Fokus intensif, tirai baca, kurangi gangguan',
    profileCognitiveTitle: 'Kognitif & Belajar',
    profileCognitiveDesc: 'Font disleksia, spasi luas, & garis pandu',
    profileMotorTitle: 'Gangguan Motorik',
    profileMotorDesc: 'Kursor besar & navigasi fokus ramah keyboard',
    profileBlindTitle: 'Tunanetra Total',
    profileBlindDesc: 'Pengoptimalan screen reader & navigasi suara',

    // Content & Typography Adjustments
    contentSection: '🔤 Konten & Tipografi',
    fontSize: 'Ukuran Teks',
    fontSmall: 'Kecil',
    fontNormal: 'Normal',
    fontLarge: 'Besar',
    fontXLarge: 'Sangat Besar',
    fontBolder: 'Tebalkan Teks',
    lineHeight: 'Spasi Baris',
    lineHeightNormal: 'Normal',
    lineHeightWide: 'Lebar',
    lineHeightWider: 'Sangat Lebar',
    letterSpacing: 'Spasi Huruf',
    letterSpacingNormal: 'Normal',
    letterSpacingWide: 'Lebar',
    letterSpacingWider: 'Sangat Lebar',
    fontDyslexia: 'Font Disleksia',
    highlightLinks: 'Sorot Tautan',
    highlightTitles: 'Sorot Judul',
    textAlign: 'Perataan Teks',
    alignLeft: 'Kiri',
    alignCenter: 'Tengah',
    alignRight: 'Kanan',
    alignJustify: 'Rata Kanan Kiri',

    // Color & Contrast
    colorSection: '🎨 Warna & Kontras',
    contrastHigh: 'Kontras Tinggi',
    contrastDark: 'Kontras Gelap',
    contrastLight: 'Kontras Terang',
    contrastMono: 'Monokrom',
    contrastLowSat: 'Saturasi Rendah',
    contrastHighSat: 'Saturasi Tinggi',
    contrastInvert: 'Balik Warna',

    // Visual & Navigation Aids
    visualSection: '🔍 Alat Bantu Visual & Navigasi',
    readingGuide: 'Garis Pandu Baca',
    readingMask: 'Tirai Baca (Mask)',
    superFocus: 'Super Fokus',
    bigCursor: 'Kursor Besar',

    // Usability & Motion Utilities
    usabilitySection: '🛠️ Utilitas & Kontrol Gerak',
    stopAnimations: 'Hentikan Animasi',
    hideImages: 'Sembunyikan Gambar',
    imageTooltips: 'Tooltip Gambar',

    // Audio & Screen Reader for Blind Users
    audioSection: '🔊 Pembaca Layar & Suara (TTS)',
    screenReaderMode: 'Mode Pembaca Layar (Hover/Tab)',
    screenReaderDesc: 'Baca elemen bersuara saat kursor hover atau tekan tombol Tab (Alt + R)',
    pageReader: 'Baca Seluruh Halaman',
    pageReaderPlaying: 'Membaca Halaman...',
    stopPageReader: 'Hentikan Baca (Alt + S)',
    speechRate: 'Kecepatan Suara',
    rateSlow: '0.75x Lambat',
    rateNormal: '1.0x Normal',
    rateFast: '1.25x Cepat',
    rateVeryFast: '1.5x Sangat Cepat',

    // AAC Modal
    aacTitle: 'AksesKita: Papan Bicara',
    aacSubtitle: 'Papan Komunikasi Visual Interaktif (AAC)',
    exportBtn: 'Ekspor',
    importBtn: 'Impor',
    sentencePlaceholder: 'Klik kartu simbol di bawah untuk menyusun kalimat...',
    speakBtn: 'Bicara',
    backspaceBtn: 'Hapus',
    clearBtn: 'Bersih',
    allCategory: 'Semua',
    addCardBtn: 'Tambah Kartu',
    newCardTitle: 'Buat Kartu Bicara Baru',
    cardLabel: 'Label Teks Kartu *',
    cardLabelPlaceholder: 'Contoh: Mau Es Krim',
    cardSpeech: 'Teks yang Diucapkan *',
    cardSpeechPlaceholder: 'Contoh: Saya ingin makan es krim rasa cokelat',
    cardCategory: 'Pilih Kategori *',
    cardImage: 'Ikon / Gambar Kartu',
    cardVoice: 'Rekam Suara Asli (Opsional)',
    voiceStatusDefault: 'Gunakan suara asli atau native TTS',
    voiceRecording: '🔴 Merekam suara...',
    voiceRecorded: '✅ Suara tersimpan!',
    recordBtn: 'Rekam',
    recordAgainBtn: 'Rekam Ulang',
    saveBtn: 'Simpan Kartu',
    cancelBtn: 'Batal',
    customBadge: 'Kustom',
    emptyCategory: 'Belum ada kartu di kategori ini.',
    emptyCategoryHint: 'Klik tombol "+ Tambah Kartu" di pojok kanan bawah untuk membuat kartu baru.',
    deleteConfirm: 'Apakah Anda yakin ingin menghapus kartu ini?',
    importSuccess: 'Berhasil mengimpor data AAC!',
    importFail: 'Gagal mengimpor file: ',
    fillRequired: 'Mohon isi label teks kartu.',
    micError: 'Gagal mengakses mikrofon: ',

    // Quick TTS
    ttsListen: 'Dengarkan',
  },
  en: {
    // Toolbar A11y Header & Tabs
    toolbarTitle: 'AksesKita',
    a11yBadge: 'A11y Pro',
    openAacBtn: 'Open AAC Communicator',
    tabProfiles: 'Profiles',
    tabContent: 'Content',
    tabColor: 'Color',
    tabVisual: 'Visual Aids',
    tabAudio: 'Audio & TTS',
    shortcutHint: 'Shortcuts',
    resetAll: 'Reset All',
    close: 'Close',

    // Preset Profiles
    profilesSection: '🌟 1-Click Accessibility Profiles',
    profileSeizureTitle: 'Seizure Safe Profile',
    profileSeizureDesc: 'Stops animations and reduces color saturation',
    profileVisionTitle: 'Vision Impaired Profile',
    profileVisionDesc: 'High contrast, larger font, & highlighted links',
    profileAdhdTitle: 'ADHD Friendly Profile',
    profileAdhdDesc: 'Reading mask, super focus, & lower distractions',
    profileCognitiveTitle: 'Cognitive & Learning',
    profileCognitiveDesc: 'Dyslexia font, wide spacing, & reading guide',
    profileMotorTitle: 'Motor Impaired Profile',
    profileMotorDesc: 'Big cursor & keyboard-friendly super focus',
    profileBlindTitle: 'Blind Profile',
    profileBlindDesc: 'Screen reader optimization & voice guidance',

    // Content & Typography Adjustments
    contentSection: '🔤 Content & Typography',
    fontSize: 'Font Size',
    fontSmall: 'Small',
    fontNormal: 'Normal',
    fontLarge: 'Large',
    fontXLarge: 'Extra Large',
    fontBolder: 'Bolder Text',
    lineHeight: 'Line Height',
    lineHeightNormal: 'Normal',
    lineHeightWide: 'Wide',
    lineHeightWider: 'Extra Wide',
    letterSpacing: 'Letter Spacing',
    letterSpacingNormal: 'Normal',
    letterSpacingWide: 'Wide',
    letterSpacingWider: 'Extra Wide',
    fontDyslexia: 'Dyslexia Font',
    highlightLinks: 'Highlight Links',
    highlightTitles: 'Highlight Titles',
    textAlign: 'Text Alignment',
    alignLeft: 'Left',
    alignCenter: 'Center',
    alignRight: 'Right',
    alignJustify: 'Justify',

    // Color & Contrast
    colorSection: '🎨 Color & Contrast',
    contrastHigh: 'High Contrast',
    contrastDark: 'Dark Contrast',
    contrastLight: 'Light Contrast',
    contrastMono: 'Monochrome',
    contrastLowSat: 'Low Saturation',
    contrastHighSat: 'High Saturation',
    contrastInvert: 'Invert Colors',

    // Visual & Navigation Aids
    visualSection: '🔍 Visual & Navigation Aids',
    readingGuide: 'Reading Guide',
    readingMask: 'Reading Mask',
    superFocus: 'Super Focus',
    bigCursor: 'Big Cursor',

    // Usability & Motion Utilities
    usabilitySection: '🛠️ Usability & Motion Control',
    stopAnimations: 'Stop Animations',
    hideImages: 'Hide Images',
    imageTooltips: 'Image Tooltips',

    // Audio & Screen Reader for Blind Users
    audioSection: '🔊 Screen Reader & Audio (TTS)',
    screenReaderMode: 'Screen Reader Mode (Hover/Tab)',
    screenReaderDesc: 'Read elements aloud when hovering or pressing Tab (Alt + R)',
    pageReader: 'Read Entire Page',
    pageReaderPlaying: 'Reading Page...',
    stopPageReader: 'Stop Reading (Alt + S)',
    speechRate: 'Speech Speed Rate',
    rateSlow: '0.75x Slow',
    rateNormal: '1.0x Normal',
    rateFast: '1.25x Fast',
    rateVeryFast: '1.5x Very Fast',

    // AAC Modal
    aacTitle: 'AksesKita: AAC Communicator',
    aacSubtitle: 'Interactive Visual Communication Board (AAC)',
    exportBtn: 'Export',
    importBtn: 'Import',
    sentencePlaceholder: 'Click symbol cards below to build a sentence...',
    speakBtn: 'Speak',
    backspaceBtn: 'Delete',
    clearBtn: 'Clear',
    allCategory: 'All',
    addCardBtn: 'Add Card',
    newCardTitle: 'Create New AAC Card',
    cardLabel: 'Card Label *',
    cardLabelPlaceholder: 'e.g. Want Ice Cream',
    cardSpeech: 'Spoken Text *',
    cardSpeechPlaceholder: 'e.g. I would like chocolate ice cream',
    cardCategory: 'Select Category *',
    cardImage: 'Card Icon / Photo',
    cardVoice: 'Record Real Voice (Optional)',
    voiceStatusDefault: 'Use recorded voice or native TTS',
    voiceRecording: '🔴 Recording voice...',
    voiceRecorded: '✅ Voice saved!',
    recordBtn: 'Record',
    recordAgainBtn: 'Re-record',
    saveBtn: 'Save Card',
    cancelBtn: 'Cancel',
    customBadge: 'Custom',
    emptyCategory: 'No cards in this category yet.',
    emptyCategoryHint: 'Click the "+ Add Card" button in the bottom right corner to create one.',
    deleteConfirm: 'Are you sure you want to delete this card?',
    importSuccess: 'AAC data successfully imported!',
    importFail: 'Failed to import file: ',
    fillRequired: 'Please fill in the card label.',
    micError: 'Failed to access microphone: ',

    // Quick TTS
    ttsListen: 'Listen',
  }
};

let currentLang = 'id';

function getLanguage() {
  if (typeof localStorage !== 'undefined') {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_LANG);
      if (stored === 'en' || stored === 'id') {
        currentLang = stored;
      }
    } catch (e) {}
  }
  return currentLang;
}

function setLanguage(lang) {
  currentLang = (lang === 'en') ? 'en' : 'id';
  if (typeof localStorage !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY_LANG, currentLang);
    } catch (e) {}
  }
  return currentLang;
}

function t(key) {
  const dict = translations[getLanguage()] || translations.id;
  return dict[key] || translations.id[key] || key;
}

/**
 * AksesKita - Advanced Typography & Content Adjustments Controller
 * Font Resizing (75% - 200%), Font Weight, Line Height, Letter Spacing,
 * Dyslexia Mode, Link Highlighting, Title Highlighting, and Text Alignment.
 */

const STORAGE_KEY_SCALE = 'akseskita_font_scale';
const STORAGE_KEY_WEIGHT = 'akseskita_font_weight';
const STORAGE_KEY_LINE_HEIGHT = 'akseskita_line_height';
const STORAGE_KEY_LETTER_SPACING = 'akseskita_letter_spacing';
const STORAGE_KEY_DYSLEXIA = 'akseskita_dyslexia_mode';
const STORAGE_KEY_LINKS = 'akseskita_highlight_links';
const STORAGE_KEY_TITLES = 'akseskita_highlight_titles';
const STORAGE_KEY_ALIGN = 'akseskita_text_align';

// 1. Font Scale (-1: 75%, 0: 100%, 1: 125%, 2: 150%, 3: 175%, 4: 200%)
function getFontScale() {
  try {
    return parseInt(localStorage.getItem(STORAGE_KEY_SCALE) || '0', 10);
  } catch (e) {
    return 0;
  }
}

function getFontScalePercentage(level = null) {
  const current = level !== null ? level : getFontScale();
  switch (current) {
    case -1: return '75%';
    case 1: return '125%';
    case 2: return '150%';
    case 3: return '175%';
    case 4: return '200%';
    case 0:
    default: return '100%';
  }
}

function setFontScale(level) {
  const clamped = Math.max(-1, Math.min(4, level));
  const root = document.documentElement;
  
  root.classList.remove(
    'akseskita-scale-sub1',
    'akseskita-scale-0',
    'akseskita-scale-1',
    'akseskita-scale-2',
    'akseskita-scale-3',
    'akseskita-scale-4'
  );

  if (clamped === -1) {
    root.classList.add('akseskita-scale-sub1');
  } else if (clamped > 0) {
    root.classList.add(`akseskita-scale-${clamped}`);
  }

  try {
    localStorage.setItem(STORAGE_KEY_SCALE, clamped.toString());
  } catch (e) {}

  return clamped;
}

// 2. Font Weight (normal, bold)
function isFontBold() {
  try {
    return localStorage.getItem(STORAGE_KEY_WEIGHT) === 'bold';
  } catch (e) {
    return false;
  }
}

function toggleFontBold(forcedState = null) {
  const root = document.documentElement;
  const current = root.classList.contains('akseskita-font-bold');
  const next = forcedState !== null ? forcedState : !current;

  if (next) {
    root.classList.add('akseskita-font-bold');
  } else {
    root.classList.remove('akseskita-font-bold');
  }

  try {
    localStorage.setItem(STORAGE_KEY_WEIGHT, next ? 'bold' : 'normal');
  } catch (e) {}

  return next;
}

// 3. Line Height (0: normal, 1: 1.8x, 2: 2.2x)
function getLineHeight() {
  try {
    return parseInt(localStorage.getItem(STORAGE_KEY_LINE_HEIGHT) || '0', 10);
  } catch (e) {
    return 0;
  }
}

function setLineHeight(level) {
  const clamped = Math.max(0, Math.min(2, level));
  const root = document.documentElement;

  root.classList.remove('akseskita-lh-1', 'akseskita-lh-2');
  if (clamped > 0) {
    root.classList.add(`akseskita-lh-${clamped}`);
  }

  try {
    localStorage.setItem(STORAGE_KEY_LINE_HEIGHT, clamped.toString());
  } catch (e) {}

  return clamped;
}

// 4. Letter Spacing (0: normal, 1: +1px, 2: +2px)
function getLetterSpacing() {
  try {
    return parseInt(localStorage.getItem(STORAGE_KEY_LETTER_SPACING) || '0', 10);
  } catch (e) {
    return 0;
  }
}

function setLetterSpacing(level) {
  const clamped = Math.max(0, Math.min(2, level));
  const root = document.documentElement;

  root.classList.remove('akseskita-ls-1', 'akseskita-ls-2');
  if (clamped > 0) {
    root.classList.add(`akseskita-ls-${clamped}`);
  }

  try {
    localStorage.setItem(STORAGE_KEY_LETTER_SPACING, clamped.toString());
  } catch (e) {}

  return clamped;
}

// 5. Dyslexia Mode
function isDyslexiaEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY_DYSLEXIA) === 'true';
  } catch (e) {
    return false;
  }
}

function toggleDyslexia(forcedState = null) {
  const root = document.documentElement;
  const current = root.classList.contains('akseskita-dyslexia');
  const next = forcedState !== null ? forcedState : !current;

  if (next) {
    root.classList.add('akseskita-dyslexia');
  } else {
    root.classList.remove('akseskita-dyslexia');
  }

  try {
    localStorage.setItem(STORAGE_KEY_DYSLEXIA, next.toString());
  } catch (e) {}

  return next;
}

// 6. Highlight Links
function isHighlightLinksEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY_LINKS) === 'true';
  } catch (e) {
    return false;
  }
}

function toggleHighlightLinks(forcedState = null) {
  const root = document.documentElement;
  const current = root.classList.contains('akseskita-highlight-links');
  const next = forcedState !== null ? forcedState : !current;

  if (next) {
    root.classList.add('akseskita-highlight-links');
  } else {
    root.classList.remove('akseskita-highlight-links');
  }

  try {
    localStorage.setItem(STORAGE_KEY_LINKS, next.toString());
  } catch (e) {}

  return next;
}

// 7. Highlight Headings / Titles
function isHighlightTitlesEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY_TITLES) === 'true';
  } catch (e) {
    return false;
  }
}

function toggleHighlightTitles(forcedState = null) {
  const root = document.documentElement;
  const current = root.classList.contains('akseskita-highlight-titles');
  const next = forcedState !== null ? forcedState : !current;

  if (next) {
    root.classList.add('akseskita-highlight-titles');
  } else {
    root.classList.remove('akseskita-highlight-titles');
  }

  try {
    localStorage.setItem(STORAGE_KEY_TITLES, next.toString());
  } catch (e) {}

  return next;
}

// 8. Text Alignment ('left', 'center', 'right', 'justify', 'default')
function getTextAlign() {
  try {
    return localStorage.getItem(STORAGE_KEY_ALIGN) || 'default';
  } catch (e) {
    return 'default';
  }
}

function setTextAlign(align) {
  const root = document.documentElement;
  root.classList.remove(
    'akseskita-align-left',
    'akseskita-align-center',
    'akseskita-align-right',
    'akseskita-align-justify'
  );

  if (align && align !== 'default') {
    root.classList.add(`akseskita-align-${align}`);
  }

  try {
    localStorage.setItem(STORAGE_KEY_ALIGN, align);
  } catch (e) {}

  return align;
}

// Reset all typography
function resetFont() {
  setFontScale(0);
  toggleFontBold(false);
  setLineHeight(0);
  setLetterSpacing(0);
  toggleDyslexia(false);
  toggleHighlightLinks(false);
  toggleHighlightTitles(false);
  setTextAlign('default');
}

// Restore saved preferences
function restoreFontPreferences() {
  const scale = getFontScale();
  if (scale !== 0) setFontScale(scale);

  if (isFontBold()) toggleFontBold(true);

  const lh = getLineHeight();
  if (lh > 0) setLineHeight(lh);

  const ls = getLetterSpacing();
  if (ls > 0) setLetterSpacing(ls);

  if (isDyslexiaEnabled()) toggleDyslexia(true);
  if (isHighlightLinksEnabled()) toggleHighlightLinks(true);
  if (isHighlightTitlesEnabled()) toggleHighlightTitles(true);

  const align = getTextAlign();
  if (align && align !== 'default') setTextAlign(align);
}

/**
 * AksesKita - Color & Contrast Adjustments Controller
 * High Contrast, Dark Contrast, Light Contrast, Monochrome,
 * Low Saturation, High Saturation, and Invert Colors.
 */

const STORAGE_KEY_CONTRAST = 'akseskita_contrast_mode';

function getContrast() {
  try {
    return localStorage.getItem(STORAGE_KEY_CONTRAST) || 'normal';
  } catch (e) {
    return 'normal';
  }
}

function ensureContrastOverlays() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById('akseskita-monochrome-overlay')) {
    const monoOverlay = document.createElement('div');
    monoOverlay.id = 'akseskita-monochrome-overlay';
    document.body.appendChild(monoOverlay);
  }
  if (!document.getElementById('akseskita-invert-overlay')) {
    const invertOverlay = document.createElement('div');
    invertOverlay.id = 'akseskita-invert-overlay';
    document.body.appendChild(invertOverlay);
  }
}

function setContrast(mode) {
  if (typeof document === 'undefined') return mode;
  ensureContrastOverlays();

  const root = document.documentElement;
  root.classList.remove(
    'akseskita-contrast-high',
    'akseskita-contrast-dark',
    'akseskita-contrast-light',
    'akseskita-monochrome',
    'akseskita-low-sat',
    'akseskita-high-sat',
    'akseskita-invert'
  );

  if (mode === 'high') {
    root.classList.add('akseskita-contrast-high');
  } else if (mode === 'dark') {
    root.classList.add('akseskita-contrast-dark');
  } else if (mode === 'light') {
    root.classList.add('akseskita-contrast-light');
  } else if (mode === 'mono') {
    root.classList.add('akseskita-monochrome');
  } else if (mode === 'low-sat') {
    root.classList.add('akseskita-low-sat');
  } else if (mode === 'high-sat') {
    root.classList.add('akseskita-high-sat');
  } else if (mode === 'invert') {
    root.classList.add('akseskita-invert');
  }

  try {
    localStorage.setItem(STORAGE_KEY_CONTRAST, mode);
  } catch (e) {}

  return mode;
}

function resetContrast() {
  setContrast('normal');
}

function restoreContrastPreferences() {
  const contrast = getContrast();
  if (contrast && contrast !== 'normal') {
    setContrast(contrast);
  }
}

/**
 * AksesKita - Visual Navigation Aids & Usability Controller (60 FPS Performance Optimized)
 * Reading Guide, Reading Mask, Super Focus (Hardware-Accelerated Spotlight Box),
 * Big Cursor, Stop Animations, Hide Images, and Image Tooltips.
 */

const STORAGE_KEY_GUIDE = 'akseskita_reading_guide';
const STORAGE_KEY_MASK = 'akseskita_reading_mask';
const STORAGE_KEY_SUPER_FOCUS = 'akseskita_super_focus';
const STORAGE_KEY_BIG_CURSOR = 'akseskita_big_cursor';
const STORAGE_KEY_STOP_ANIM = 'akseskita_stop_anim';
const STORAGE_KEY_HIDE_IMAGES = 'akseskita_hide_images';
const STORAGE_KEY_IMAGE_TOOLTIPS = 'akseskita_image_tooltips';

// 1. Reading Guide (horizontal line)
let guideMouseMoveHandler = null;
let guideRafId = null;

function isReadingGuideEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY_GUIDE) === 'true';
  } catch (e) {
    return false;
  }
}

function toggleReadingGuide(forcedState = null) {
  let guideEl = document.getElementById('akseskita-reading-guide');
  if (!guideEl) {
    guideEl = document.createElement('div');
    guideEl.id = 'akseskita-reading-guide';
    document.body.appendChild(guideEl);
  }

  const current = guideEl.style.display === 'block';
  const next = forcedState !== null ? forcedState : !current;

  if (next) {
    if (isReadingMaskEnabled()) toggleReadingMask(false);

    guideEl.style.display = 'block';
    if (!guideMouseMoveHandler) {
      guideMouseMoveHandler = (e) => {
        const clientY = e.clientY;
        if (!guideRafId) {
          guideRafId = requestAnimationFrame(() => {
            guideEl.style.top = `${clientY}px`;
            guideRafId = null;
          });
        }
      };
      window.addEventListener('mousemove', guideMouseMoveHandler, { passive: true });
    }
  } else {
    guideEl.style.display = 'none';
    if (guideRafId) {
      cancelAnimationFrame(guideRafId);
      guideRafId = null;
    }
    if (guideMouseMoveHandler) {
      window.removeEventListener('mousemove', guideMouseMoveHandler);
      guideMouseMoveHandler = null;
    }
  }

  try {
    localStorage.setItem(STORAGE_KEY_GUIDE, next.toString());
  } catch (e) {}

  return next;
}

// 2. Reading Mask (dimmed curtain with focus slit)
let maskMouseMoveHandler = null;
let maskRafId = null;

function isReadingMaskEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY_MASK) === 'true';
  } catch (e) {
    return false;
  }
}

function toggleReadingMask(forcedState = null) {
  let maskTop = document.getElementById('akseskita-reading-mask-top');
  let maskBottom = document.getElementById('akseskita-reading-mask-bottom');

  if (!maskTop || !maskBottom) {
    maskTop = document.createElement('div');
    maskTop.id = 'akseskita-reading-mask-top';
    maskTop.className = 'akseskita-mask-curtain';

    maskBottom = document.createElement('div');
    maskBottom.id = 'akseskita-reading-mask-bottom';
    maskBottom.className = 'akseskita-mask-curtain';

    document.body.appendChild(maskTop);
    document.body.appendChild(maskBottom);
  }

  const current = maskTop.style.display === 'block';
  const next = forcedState !== null ? forcedState : !current;

  if (next) {
    if (isReadingGuideEnabled()) toggleReadingGuide(false);

    maskTop.style.display = 'block';
    maskBottom.style.display = 'block';

    const slitHeight = 110;

    if (!maskMouseMoveHandler) {
      maskMouseMoveHandler = (e) => {
        const clientY = e.clientY;
        if (!maskRafId) {
          maskRafId = requestAnimationFrame(() => {
            const topHeight = Math.max(0, clientY - slitHeight / 2);
            const bottomTop = Math.min(window.innerHeight, clientY + slitHeight / 2);
            maskTop.style.height = `${topHeight}px`;
            maskBottom.style.top = `${bottomTop}px`;
            maskRafId = null;
          });
        }
      };
      window.addEventListener('mousemove', maskMouseMoveHandler, { passive: true });
    }
  } else {
    maskTop.style.display = 'none';
    maskBottom.style.display = 'none';
    if (maskRafId) {
      cancelAnimationFrame(maskRafId);
      maskRafId = null;
    }
    if (maskMouseMoveHandler) {
      window.removeEventListener('mousemove', maskMouseMoveHandler);
      maskMouseMoveHandler = null;
    }
  }

  try {
    localStorage.setItem(STORAGE_KEY_MASK, next.toString());
  } catch (e) {}

  return next;
}

// 3. Super Focus Mode (Smooth Hardware-Accelerated Spotlight Box)
let focusMouseOverHandler = null;
let focusRafId = null;

function isSuperFocusEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY_SUPER_FOCUS) === 'true';
  } catch (e) {
    return false;
  }
}

function toggleSuperFocus(forcedState = null) {
  let focusBox = document.getElementById('akseskita-super-focus-box');
  if (!focusBox) {
    focusBox = document.createElement('div');
    focusBox.id = 'akseskita-super-focus-box';
    document.body.appendChild(focusBox);
  }

  const current = focusBox.style.display === 'block';
  const next = forcedState !== null ? forcedState : !current;

  if (next) {
    focusBox.style.display = 'block';
    if (!focusMouseOverHandler) {
      focusMouseOverHandler = (e) => {
        const target = e.target;
        if (!target || target.closest('akses-kita') || target.closest('#akseskita-tts-popover') || target === document.body || target === document.documentElement) {
          return;
        }

        if (!focusRafId) {
          focusRafId = requestAnimationFrame(() => {
            const rect = target.getBoundingClientRect();
            focusBox.style.top = `${window.scrollY + rect.top}px`;
            focusBox.style.left = `${window.scrollX + rect.left}px`;
            focusBox.style.width = `${rect.width}px`;
            focusBox.style.height = `${rect.height}px`;
            focusRafId = null;
          });
        }
      };
      document.addEventListener('mouseover', focusMouseOverHandler, { passive: true });
    }
  } else {
    focusBox.style.display = 'none';
    if (focusRafId) {
      cancelAnimationFrame(focusRafId);
      focusRafId = null;
    }
    if (focusMouseOverHandler) {
      document.removeEventListener('mouseover', focusMouseOverHandler);
      focusMouseOverHandler = null;
    }
  }

  try {
    localStorage.setItem(STORAGE_KEY_SUPER_FOCUS, next.toString());
  } catch (e) {}

  return next;
}

// 4. Big Cursor
function isBigCursorEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY_BIG_CURSOR) === 'true';
  } catch (e) {
    return false;
  }
}

function toggleBigCursor(forcedState = null) {
  const root = document.documentElement;
  const current = root.classList.contains('akseskita-big-cursor');
  const next = forcedState !== null ? forcedState : !current;

  if (next) {
    root.classList.add('akseskita-big-cursor');
  } else {
    root.classList.remove('akseskita-big-cursor');
  }

  try {
    localStorage.setItem(STORAGE_KEY_BIG_CURSOR, next.toString());
  } catch (e) {}

  return next;
}

// 5. Stop Animations
function isStopAnimationsEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY_STOP_ANIM) === 'true';
  } catch (e) {
    return false;
  }
}

function toggleStopAnimations(forcedState = null) {
  const root = document.documentElement;
  const current = root.classList.contains('akseskita-stop-anim');
  const next = forcedState !== null ? forcedState : !current;

  if (next) {
    root.classList.add('akseskita-stop-anim');
    document.querySelectorAll('video').forEach(v => {
      try { v.pause(); } catch (e) {}
    });
  } else {
    root.classList.remove('akseskita-stop-anim');
  }

  try {
    localStorage.setItem(STORAGE_KEY_STOP_ANIM, next.toString());
  } catch (e) {}

  return next;
}

// 6. Hide Images
function isHideImagesEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY_HIDE_IMAGES) === 'true';
  } catch (e) {
    return false;
  }
}

function toggleHideImages(forcedState = null) {
  const root = document.documentElement;
  const current = root.classList.contains('akseskita-hide-images');
  const next = forcedState !== null ? forcedState : !current;

  if (next) {
    root.classList.add('akseskita-hide-images');
  } else {
    root.classList.remove('akseskita-hide-images');
  }

  try {
    localStorage.setItem(STORAGE_KEY_HIDE_IMAGES, next.toString());
  } catch (e) {}

  return next;
}

// 7. Image Tooltips
let tooltipMouseOverHandler = null;
let tooltipMouseOutHandler = null;
let activeTooltipBadge = null;

function isImageTooltipsEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY_IMAGE_TOOLTIPS) === 'true';
  } catch (e) {
    return false;
  }
}

function toggleImageTooltips(forcedState = null) {
  const current = isImageTooltipsEnabled();
  const next = forcedState !== null ? forcedState : !current;

  if (next) {
    if (!activeTooltipBadge) {
      activeTooltipBadge = document.createElement('div');
      activeTooltipBadge.id = 'akseskita-image-tooltip-badge';
      document.body.appendChild(activeTooltipBadge);
    }

    if (!tooltipMouseOverHandler) {
      tooltipMouseOverHandler = (e) => {
        const img = e.target.closest('img');
        if (img && !img.closest('akses-kita')) {
          const text = img.alt || img.title || 'Image (No description)';
          activeTooltipBadge.textContent = `🖼️ ${text}`;
          const rect = img.getBoundingClientRect();
          activeTooltipBadge.style.top = `${window.scrollY + rect.top - 36}px`;
          activeTooltipBadge.style.left = `${window.scrollX + rect.left + 8}px`;
          activeTooltipBadge.style.display = 'block';
        }
      };

      tooltipMouseOutHandler = (e) => {
        if (e.target.closest('img') && activeTooltipBadge) {
          activeTooltipBadge.style.display = 'none';
        }
      };

      document.addEventListener('mouseover', tooltipMouseOverHandler, { passive: true });
      document.addEventListener('mouseout', tooltipMouseOutHandler, { passive: true });
    }
  } else {
    if (activeTooltipBadge) {
      activeTooltipBadge.style.display = 'none';
    }
    if (tooltipMouseOverHandler) {
      document.removeEventListener('mouseover', tooltipMouseOverHandler);
      document.removeEventListener('mouseout', tooltipMouseOutHandler);
      tooltipMouseOverHandler = null;
      tooltipMouseOutHandler = null;
    }
  }

  try {
    localStorage.setItem(STORAGE_KEY_IMAGE_TOOLTIPS, next.toString());
  } catch (e) {}

  return next;
}

// Reset all visual aids
function resetVisualAids() {
  toggleReadingGuide(false);
  toggleReadingMask(false);
  toggleSuperFocus(false);
  toggleBigCursor(false);
  toggleStopAnimations(false);
  toggleHideImages(false);
  toggleImageTooltips(false);
}

// Restore saved visual aids
function restoreVisualPreferences() {
  if (isReadingGuideEnabled()) toggleReadingGuide(true);
  if (isReadingMaskEnabled()) toggleReadingMask(true);
  if (isSuperFocusEnabled()) toggleSuperFocus(true);
  if (isBigCursorEnabled()) toggleBigCursor(true);
  if (isStopAnimationsEnabled()) toggleStopAnimations(true);
  if (isHideImagesEnabled()) toggleHideImages(true);
  if (isImageTooltipsEnabled()) toggleImageTooltips(true);
}

/**
 * AksesKita - Advanced Blind-Accessible Text-to-Speech & Screen Reader Engine
 * Features:
 * 1. Screen Reader Mode (Read-on-Focus & Read-on-Hover for keyboard/mouse navigation).
 * 2. Continuous Full Page / Article Reader with visual sentence tracking.
 * 3. Text Selection Quick TTS Floating Popover with ARIA Live announcements.
 * 4. Configurable Speech Rate (0.75x to 2.0x).
 * 5. Bilingual Voice Synthesis (Indonesian id-ID & English en-US/en-GB).
 * 6. Global Blind Shortcuts (Alt+R: Screen Reader, Alt+P: Read Page, Alt+S: Stop Speech).
 */


const STORAGE_KEY_RATE = 'akseskita_speech_rate';
const STORAGE_KEY_SCREEN_READER = 'akseskita_screen_reader_mode';

let cachedVoices = [];

function loadVoices() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return [];
  cachedVoices = window.speechSynthesis.getVoices();
  return cachedVoices;
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    loadVoices();
  };
}

/**
 * Get preferred voice based on active language (id or en)
 */
function getVoiceForLanguage(lang = null) {
  const targetLang = lang || getLanguage();
  const voices = cachedVoices.length ? cachedVoices : loadVoices();

  if (targetLang === 'en') {
    let voice = voices.find(v => v.lang === 'en-US' || v.lang === 'en_US');
    if (voice) return voice;
    voice = voices.find(v => v.lang === 'en-GB' || v.lang === 'en_GB');
    if (voice) return voice;
    voice = voices.find(v => v.lang.toLowerCase().startsWith('en'));
    if (voice) return voice;
    return null;
  } else {
    let voice = voices.find(v => v.lang === 'id-ID' || v.lang === 'id_ID');
    if (voice) return voice;
    voice = voices.find(v => v.lang.toLowerCase().startsWith('id'));
    if (voice) return voice;
    voice = voices.find(v => v.name.toLowerCase().includes('indonesia'));
    if (voice) return voice;
    return null;
  }
}

/**
 * Speech Rate Management (0.75x to 2.0x)
 */
function getSpeechRate() {
  try {
    return parseFloat(localStorage.getItem(STORAGE_KEY_RATE) || '1.0');
  } catch (e) {
    return 1.0;
  }
}

function setSpeechRate(rate) {
  const clamped = Math.max(0.75, Math.min(2.0, rate));
  try {
    localStorage.setItem(STORAGE_KEY_RATE, clamped.toString());
  } catch (e) {}
  return clamped;
}

/**
 * Core Speak Text Function with Chrome keepalive workaround
 */
function speakText(text, options = {}) {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window) || !text) {
      return resolve();
    }

    try {
      window.speechSynthesis.cancel();
    } catch (e) {}

    const utterance = new SpeechSynthesisUtterance(text);
    const lang = options.lang || getLanguage();
    const voice = getVoiceForLanguage(lang);

    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      utterance.lang = lang === 'en' ? 'en-US' : 'id-ID';
    }

    utterance.rate = options.rate || getSpeechRate();
    utterance.pitch = options.pitch || 1.0;
    utterance.volume = options.volume || 1.0;

    let resumeInterval = null;

    const cleanup = () => {
      if (resumeInterval) {
        clearInterval(resumeInterval);
        resumeInterval = null;
      }
      resolve();
    };

    utterance.onstart = () => {
      // Chrome keepalive bug workaround
      resumeInterval = setInterval(() => {
        if (!window.speechSynthesis.speaking) {
          clearInterval(resumeInterval);
        } else {
          window.speechSynthesis.pause();
          window.speechSynthesis.resume();
        }
      }, 10000);
    };

    utterance.onend = cleanup;
    utterance.onerror = (e) => {
      console.warn('[AksesKita] Speech error:', e);
      cleanup();
    };

    window.speechSynthesis.speak(utterance);
  });
}

/**
 * Stop any active speech synthesis
 */
function stopSpeech() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
  }
}

/* ==========================================================================
   Screen Reader Mode (Read-on-Hover / Read-on-Focus for Blind Users)
   ========================================================================== */
let isScreenReaderActive = false;
let screenReaderHoverDebounce = null;
let currentHighlightedElement = null;

function isScreenReaderEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY_SCREEN_READER) === 'true';
  } catch (e) {
    return false;
  }
}

function getAccessibleElementDescription(el) {
  if (!el || el.closest('akses-kita') || el.closest('#akseskita-tts-popover')) return null;

  const isEn = getLanguage() === 'en';
  const tag = el.tagName.toLowerCase();

  // 1. Images
  if (tag === 'img') {
    const desc = el.alt || el.title || (isEn ? 'Image without description' : 'Gambar tanpa deskripsi');
    return isEn ? `Image: ${desc}` : `Gambar: ${desc}`;
  }

  // 2. Buttons
  if (tag === 'button' || el.getAttribute('role') === 'button') {
    const text = el.innerText || el.getAttribute('aria-label') || el.title || '';
    if (!text.trim()) return null;
    return isEn ? `Button: ${text.trim()}` : `Tombol: ${text.trim()}`;
  }

  // 3. Links
  if (tag === 'a' || el.getAttribute('role') === 'link') {
    const text = el.innerText || el.getAttribute('aria-label') || el.title || '';
    if (!text.trim()) return null;
    return isEn ? `Link: ${text.trim()}` : `Tautan: ${text.trim()}`;
  }

  // 4. Headings (H1 - H6)
  if (/^h[1-6]$/.test(tag) || el.getAttribute('role') === 'heading') {
    const text = el.innerText || '';
    if (!text.trim()) return null;
    const level = tag.replace('h', '');
    return isEn ? `Heading level ${level}: ${text.trim()}` : `Judul tingkat ${level}: ${text.trim()}`;
  }

  // 5. Paragraphs & List Items
  if (['p', 'li', 'blockquote', 'summary', 'span', 'figcaption'].includes(tag)) {
    // Only read if it has direct text content or is the primary container
    const text = el.innerText ? el.innerText.trim() : '';
    if (text.length > 1 && text.length < 500) {
      return text;
    }
  }

  return null;
}

function highlightElement(el) {
  if (currentHighlightedElement && currentHighlightedElement !== el) {
    currentHighlightedElement.classList.remove('akseskita-reader-highlight');
  }
  if (el) {
    currentHighlightedElement = el;
    el.classList.add('akseskita-reader-highlight');
  }
}

function removeHighlight() {
  if (currentHighlightedElement) {
    currentHighlightedElement.classList.remove('akseskita-reader-highlight');
    currentHighlightedElement = null;
  }
}

function handleScreenReaderTarget(target) {
  if (!isScreenReaderActive || !target) return;
  const description = getAccessibleElementDescription(target);

  if (description) {
    highlightElement(target);
    speakText(description);
  }
}

const onScreenReaderMouseOver = (e) => {
  if (screenReaderHoverDebounce) clearTimeout(screenReaderHoverDebounce);
  screenReaderHoverDebounce = setTimeout(() => {
    handleScreenReaderTarget(e.target);
  }, 120);
};

const onScreenReaderFocusIn = (e) => {
  handleScreenReaderTarget(e.target);
};

function toggleScreenReaderMode(forcedState = null) {
  const next = forcedState !== null ? forcedState : !isScreenReaderActive;
  isScreenReaderActive = next;

  if (isScreenReaderActive) {
    document.addEventListener('mouseover', onScreenReaderMouseOver, { passive: true });
    document.addEventListener('focusin', onScreenReaderFocusIn, { passive: true });
    
    const isEn = getLanguage() === 'en';
    const announcement = isEn 
      ? 'Screen reader navigation mode activated. Hover or press Tab to read elements aloud. Press Alt plus S to stop.'
      : 'Mode pembaca layar aktif. Arahkan kursor atau tekan Tab untuk mendengar elemen. Tekan Alt tambah S untuk berhenti.';
    speakText(announcement);
  } else {
    document.removeEventListener('mouseover', onScreenReaderMouseOver);
    document.removeEventListener('focusin', onScreenReaderFocusIn);
    removeHighlight();
    stopSpeech();
  }

  try {
    localStorage.setItem(STORAGE_KEY_SCREEN_READER, isScreenReaderActive.toString());
  } catch (e) {}

  return isScreenReaderActive;
}

/* ==========================================================================
   Continuous Page / Article Full Reader
   ========================================================================== */
let isReadingPage = false;
let pageElementsToRead = [];
let currentPageIndex = 0;

function isPageReaderPlaying() {
  return isReadingPage;
}

async function startPageReader() {
  if (typeof document === 'undefined') return;

  // Gather meaningful readable text elements on page
  const selectors = 'h1, h2, h3, h4, h5, h6, p, li, blockquote';
  const nodes = Array.from(document.querySelectorAll(selectors))
    .filter(el => {
      if (el.closest('akses-kita') || el.closest('#akseskita-tts-popover') || el.offsetParent === null) {
        return false;
      }
      const text = el.innerText ? el.innerText.trim() : '';
      return text.length > 2;
    });

  if (nodes.length === 0) {
    speakText(getLanguage() === 'en' ? 'No readable content found on this page.' : 'Tidak ditemukan konten teks untuk dibaca.');
    return;
  }

  pageElementsToRead = nodes;
  currentPageIndex = 0;
  isReadingPage = true;

  const isEn = getLanguage() === 'en';
  await speakText(isEn ? 'Starting continuous page reading...' : 'Memulai pembacaan seluruh halaman...');

  readNextPageBlock();
}

async function readNextPageBlock() {
  if (!isReadingPage || currentPageIndex >= pageElementsToRead.length) {
    stopPageReader();
    const isEn = getLanguage() === 'en';
    speakText(isEn ? 'Finished reading page.' : 'Selesai membaca seluruh halaman.');
    return;
  }

  const el = pageElementsToRead[currentPageIndex];
  if (el) {
    highlightElement(el);
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });

    const text = el.innerText.trim();
    await speakText(text);

    if (isReadingPage) {
      currentPageIndex++;
      setTimeout(() => {
        readNextPageBlock();
      }, 250);
    }
  }
}

function stopPageReader() {
  isReadingPage = false;
  pageElementsToRead = [];
  currentPageIndex = 0;
  removeHighlight();
  stopSpeech();
}

function togglePageReader() {
  if (isReadingPage) {
    stopPageReader();
    return false;
  } else {
    startPageReader();
    return true;
  }
}

/* ==========================================================================
   Quick TTS Floating Popover on Selection
   ========================================================================== */
function initQuickTTS() {
  if (typeof document === 'undefined') return;

  let popover = document.getElementById('akseskita-tts-popover');
  if (!popover) {
    popover = document.createElement('div');
    popover.id = 'akseskita-tts-popover';
    popover.setAttribute('role', 'button');
    popover.setAttribute('tabindex', '0');
    popover.setAttribute('aria-label', t('ttsListen'));
    popover.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
      </svg>
      <span id="akseskita-tts-popover-text">${t('ttsListen')}</span>
    `;
    document.body.appendChild(popover);
  }

  let selectedText = '';
  let selectionDebounce = null;

  const handleSelection = () => {
    if (selectionDebounce) clearTimeout(selectionDebounce);
    selectionDebounce = setTimeout(() => {
      const selection = window.getSelection();
      const text = selection ? selection.toString().trim() : '';

      if (text.length > 1) {
        selectedText = text;
        try {
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();

          const top = window.scrollY + rect.top - 46;
          const left = window.scrollX + rect.left + rect.width / 2;

          popover.style.top = `${Math.max(10, top)}px`;
          popover.style.left = `${Math.max(10, left)}px`;
          popover.style.transform = 'translateX(-50%)';
          popover.style.display = 'flex';
        } catch (e) {}
      } else {
        popover.style.display = 'none';
      }
    }, 60);
  };

  document.addEventListener('mouseup', handleSelection, { passive: true });
  document.addEventListener('keyup', handleSelection, { passive: true });

  const triggerTTS = () => {
    if (selectedText) {
      speakText(selectedText);
      popover.style.display = 'none';
    }
  };

  popover.addEventListener('mousedown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    triggerTTS();
  });

  popover.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      triggerTTS();
    }
  });

  // Restore saved screen reader mode
  if (isScreenReaderEnabled()) {
    toggleScreenReaderMode(true);
  }
}

/**
 * AksesKita - 1-Click Accessibility Preset Profiles Controller
 * Matches modern accessibility standards (Seizure Safe, Vision Impaired,
 * ADHD Friendly, Cognitive & Learning, Motor Impaired, Blind Profile).
 */


const STORAGE_KEY_ACTIVE_PROFILE = 'akseskita_active_profile';

function getActiveProfile() {
  try {
    return localStorage.getItem(STORAGE_KEY_ACTIVE_PROFILE) || null;
  } catch (e) {
    return null;
  }
}

function resetAllSettings() {
  resetFont();
  resetContrast();
  resetVisualAids();
  toggleScreenReaderMode(false);
  try {
    localStorage.removeItem(STORAGE_KEY_ACTIVE_PROFILE);
  } catch (e) {}
}

function applyProfile(profileId) {
  const current = getActiveProfile();

  // If clicking same profile, toggle off
  if (current === profileId) {
    resetAllSettings();
    return null;
  }

  // Reset before applying new profile
  resetAllSettings();

  switch (profileId) {
    case 'seizure':
      // Seizure Safe Profile: Stop animations, low saturation, mute flashes
      toggleStopAnimations(true);
      setContrast('low-sat');
      break;

    case 'vision':
      // Vision Impaired Profile: High contrast, larger font, highlight links & titles
      setContrast('high');
      setFontScale(2);
      toggleHighlightLinks(true);
      toggleHighlightTitles(true);
      break;

    case 'adhd':
      // ADHD Friendly Profile: Reading mask, stop animations, super focus
      toggleStopAnimations(true);
      toggleReadingMask(true);
      toggleSuperFocus(true);
      break;

    case 'cognitive':
      // Cognitive & Learning Profile: Dyslexia font, line height, letter spacing, reading guide
      toggleDyslexia(true);
      setLineHeight(1);
      setLetterSpacing(1);
      toggleReadingGuide(true);
      break;

    case 'motor':
      // Motor Impaired Profile: Big cursor, super focus, highlight links
      toggleBigCursor(true);
      toggleSuperFocus(true);
      toggleHighlightLinks(true);
      break;

    case 'blind':
      // Blind Profile: Audio Screen Reader + vocal orientation
      toggleHighlightLinks(true);
      toggleScreenReaderMode(true);
      break;
  }

  try {
    localStorage.setItem(STORAGE_KEY_ACTIVE_PROFILE, profileId);
  } catch (e) {}

  return profileId;
}

let sentenceList = [];
let isPlaying = false;
let currentAudioElement = null;

function getSentenceList() {
  return [...sentenceList];
}

function addCardToSentence(card) {
  sentenceList.push({
    ...card,
    instanceId: 'inst_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5)
  });
  return [...sentenceList];
}

function removeCardFromSentence(index) {
  if (index >= 0 && index < sentenceList.length) {
    sentenceList.splice(index, 1);
  }
  return [...sentenceList];
}

function removeLastCard() {
  if (sentenceList.length > 0) {
    sentenceList.pop();
  }
  return [...sentenceList];
}

function clearSentence() {
  sentenceList = [];
  return [];
}

function getCardSpokenText(card) {
  const isEn = getLanguage() === 'en';
  if (isEn && (card.speechTextEn || card.labelEn)) {
    return card.speechTextEn || card.labelEn;
  }
  return card.speechText || card.label;
}

/**
 * Play single card (either recorded voice or Indonesian/English TTS)
 */
async function playSingleCard(card) {
  stopSpeech();
  if (currentAudioElement) {
    currentAudioElement.pause();
    currentAudioElement = null;
  }

  const textToSpeak = getCardSpokenText(card);

  if (card.audioBlob) {
    return new Promise((resolve) => {
      try {
        let isCreatedUrl = false;
        let url;
        if (typeof card.audioBlob === 'string' && card.audioBlob.startsWith('data:')) {
          url = card.audioBlob;
        } else if (card.audioBlob instanceof Blob) {
          url = URL.createObjectURL(card.audioBlob);
          isCreatedUrl = true;
        }

        if (url) {
          const audio = new Audio(url);
          currentAudioElement = audio;

          const finishAudio = () => {
            currentAudioElement = null;
            if (isCreatedUrl) URL.revokeObjectURL(url);
            resolve();
          };

          audio.onended = finishAudio;
          audio.onerror = () => {
            if (isCreatedUrl) URL.revokeObjectURL(url);
            currentAudioElement = null;
            // Fallback to TTS
            speakText(textToSpeak).then(resolve);
          };
          audio.play().catch(() => {
            if (isCreatedUrl) URL.revokeObjectURL(url);
            currentAudioElement = null;
            speakText(textToSpeak).then(resolve);
          });
          return;
        }
      } catch (err) {
        console.warn('[AksesKita] Audio play error:', err);
      }
      resolve();
    });
  }

  return speakText(textToSpeak);
}

/**
 * Speak the whole sentence strip card by card with sequential visual highlight
 */
async function speakSentence(onCardHighlight = () => {}) {
  if (isPlaying || sentenceList.length === 0) return;
  isPlaying = true;

  try {
    for (let i = 0; i < sentenceList.length; i++) {
      const item = sentenceList[i];
      onCardHighlight(i, item);
      await playSingleCard(item);
      // Small pause between words for natural speech
      await new Promise(r => setTimeout(r, 250));
    }
  } finally {
    isPlaying = false;
    onCardHighlight(-1, null); // Clear highlight
  }
}

function stopSentencePlayback() {
  isPlaying = false;
  stopSpeech();
  if (currentAudioElement) {
    currentAudioElement.pause();
    currentAudioElement = null;
  }
}

/**
 * AksesKita - Native Audio Recorder
 * Uses MediaRecorder API to capture user voice recordings locally for custom AAC cards.
 */

let mediaRecorder = null;
let audioChunks = [];

function isAudioRecordingSupported() {
  return typeof navigator !== 'undefined' && 
         navigator.mediaDevices && 
         typeof navigator.mediaDevices.getUserMedia === 'function' &&
         typeof window.MediaRecorder === 'function';
}

async function startAudioRecording() {
  if (!isAudioRecordingSupported()) {
    throw new Error('Perekaman audio tidak didukung oleh browser ini.');
  }

  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  audioChunks = [];
  
  // Choose mimeType if supported
  let options = {};
  if (MediaRecorder.isTypeSupported('audio/webm')) {
    options = { mimeType: 'audio/webm' };
  } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
    options = { mimeType: 'audio/mp4' };
  }

  mediaRecorder = new MediaRecorder(stream, options);

  mediaRecorder.ondataavailable = (e) => {
    if (e.data && e.data.size > 0) {
      audioChunks.push(e.data);
    }
  };

  mediaRecorder.start();
  return true;
}

function stopAudioRecording() {
  return new Promise((resolve, reject) => {
    if (!mediaRecorder || mediaRecorder.state === 'inactive') {
      return resolve(null);
    }

    mediaRecorder.onstop = () => {
      const mime = mediaRecorder.mimeType || 'audio/webm';
      const audioBlob = new Blob(audioChunks, { type: mime });
      
      // Stop all tracks to release mic
      if (mediaRecorder.stream) {
        mediaRecorder.stream.getTracks().forEach(track => track.stop());
      }

      resolve(audioBlob);
    };

    mediaRecorder.onerror = (e) => reject(e.error);
    mediaRecorder.stop();
  });
}

/**
 * AksesKita - All-in-One Assistive Web Suite
 * Comprehensive Web Accessibility Widget (Profiles, Typography, Contrast, Visual Aids, Usability)
 * & Interactive Visual AAC Communicator Board (Bilingual ID / EN)
 * Zero Dependency Web Component (<akses-kita>)
 */


class AksesKitaElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.activeTab = 'profiles'; // 'profiles', 'content', 'color', 'visual'
    this.activeCategoryId = 'all';
    this.categories = [];
    this.cards = [];
    this.isRecording = false;
    this.currentRecordedAudioBlob = null;
    this.customImageBase64 = null;
  }

  async connectedCallback() {
    this.injectHostStyles();
    this.render();
    this.bindEvents();
    this.initShortcuts();
    
    // Restore user preferences
    restoreFontPreferences();
    restoreContrastPreferences();
    restoreVisualPreferences();
    initQuickTTS();
    this.syncA11yUIState();

    // Init IndexedDB & default AAC symbols
    try {
      await openAksesKitaDB();
      await initDefaultData(defaultCategories, defaultCards);
      await this.loadAACData();
    } catch (err) {
      console.warn('[AksesKita] DB Init warning:', err);
    }
  }

  injectHostStyles() {
    if (typeof document === 'undefined') return;
    const styleId = 'akseskita-host-injected-styles';
    if (!document.getElementById(styleId)) {
      const styleEl = document.createElement('style');
      styleEl.id = styleId;
      styleEl.textContent = hostStyles;
      document.head.appendChild(styleEl);
    }
  }

  render() {
    const lang = getLanguage();

    this.shadowRoot.innerHTML = `
      <style>
        ${a11yStyles}
        ${aacModalStyles}
      </style>

      <!-- FAB Trigger Button -->
      <button id="fab-trigger" class="fab-trigger" aria-label="Buka Menu Aksesibilitas AksesKita" title="Aksesibilitas (Alt + A)">
        <span class="fab-icon">♿</span>
        <span>AksesKita</span>
      </button>

      <!-- Toolbar A11y Panel -->
      <div id="a11y-panel" class="panel-container hidden" role="dialog" aria-modal="false" aria-label="Menu Aksesibilitas Web">
        <!-- Panel Header -->
        <div class="panel-header">
          <div class="panel-title-wrapper">
            <span style="font-size: 20px;">♿</span>
            <h3>AksesKita</h3>
            <span class="panel-title-badge">${t('a11yBadge')}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <div class="lang-toggle-bar" aria-label="Pilih Bahasa / Choose Language">
              <button class="lang-btn ${lang === 'id' ? 'active' : ''}" data-lang="id" title="Bahasa Indonesia">ID</button>
              <button class="lang-btn ${lang === 'en' ? 'active' : ''}" data-lang="en" title="English">EN</button>
            </div>
            <button id="close-panel-btn" class="btn-icon-close" aria-label="${t('close')}">&times;</button>
          </div>
        </div>

        <!-- Category Tabs -->
        <div class="panel-nav-tabs">
          <button class="panel-tab-btn ${this.activeTab === 'profiles' ? 'active' : ''}" data-tab="profiles">
            <span>🌟</span>
            <span>${t('tabProfiles')}</span>
          </button>
          <button class="panel-tab-btn ${this.activeTab === 'content' ? 'active' : ''}" data-tab="content">
            <span>🔤</span>
            <span>${t('tabContent')}</span>
          </button>
          <button class="panel-tab-btn ${this.activeTab === 'color' ? 'active' : ''}" data-tab="color">
            <span>🎨</span>
            <span>${t('tabColor')}</span>
          </button>
          <button class="panel-tab-btn ${this.activeTab === 'visual' ? 'active' : ''}" data-tab="visual">
            <span>🔍</span>
            <span>${t('tabVisual')}</span>
          </button>
          <button class="panel-tab-btn ${this.activeTab === 'audio' ? 'active' : ''}" data-tab="audio">
            <span>🔊</span>
            <span>${t('tabAudio')}</span>
          </button>
        </div>

        <div class="panel-body">
          <!-- CTA AAC Communicator (Always Accessible) -->
          <button id="open-aac-btn" class="btn-aac-launch" title="Shortcut: Alt + C">
            <span style="font-size: 20px;">🗣️</span>
            <span>${t('openAacBtn')}</span>
          </button>

          <!-- TAB 1: PRESET PROFILES -->
          <div id="tab-section-profiles" class="tab-content-pane ${this.activeTab === 'profiles' ? '' : 'hidden'}" style="${this.activeTab === 'profiles' ? '' : 'display:none;'}">
            <div class="section-label">
              <span>${t('profilesSection')}</span>
            </div>
            <div class="profiles-grid">
              <div class="profile-card" data-profile="seizure">
                <div class="profile-card-header">
                  <span class="profile-card-icon">⚡</span>
                  <span class="profile-card-title">${t('profileSeizureTitle')}</span>
                </div>
                <p class="profile-card-desc">${t('profileSeizureDesc')}</p>
              </div>

              <div class="profile-card" data-profile="vision">
                <div class="profile-card-header">
                  <span class="profile-card-icon">👁️</span>
                  <span class="profile-card-title">${t('profileVisionTitle')}</span>
                </div>
                <p class="profile-card-desc">${t('profileVisionDesc')}</p>
              </div>

              <div class="profile-card" data-profile="adhd">
                <div class="profile-card-header">
                  <span class="profile-card-icon">🎯</span>
                  <span class="profile-card-title">${t('profileAdhdTitle')}</span>
                </div>
                <p class="profile-card-desc">${t('profileAdhdDesc')}</p>
              </div>

              <div class="profile-card" data-profile="cognitive">
                <div class="profile-card-header">
                  <span class="profile-card-icon">🧠</span>
                  <span class="profile-card-title">${t('profileCognitiveTitle')}</span>
                </div>
                <p class="profile-card-desc">${t('profileCognitiveDesc')}</p>
              </div>

              <div class="profile-card" data-profile="motor">
                <div class="profile-card-header">
                  <span class="profile-card-icon">🖐️</span>
                  <span class="profile-card-title">${t('profileMotorTitle')}</span>
                </div>
                <p class="profile-card-desc">${t('profileMotorDesc')}</p>
              </div>

              <div class="profile-card" data-profile="blind">
                <div class="profile-card-header">
                  <span class="profile-card-icon">🦯</span>
                  <span class="profile-card-title">${t('profileBlindTitle')}</span>
                </div>
                <p class="profile-card-desc">${t('profileBlindDesc')}</p>
              </div>
            </div>
          </div>

          <!-- TAB 2: CONTENT & TYPOGRAPHY -->
          <div id="tab-section-content" class="tab-content-pane ${this.activeTab === 'content' ? '' : 'hidden'}" style="${this.activeTab === 'content' ? '' : 'display:none;'}">
            <!-- Font Sizing (75% - 200%) -->
            <div style="margin-bottom: 14px;">
              <span class="section-label">🔤 ${t('fontSize')} (75% - 200%)</span>
              <div class="font-scaler-box">
                <button id="btn-font-dec" class="font-step-btn" title="${t('fontSmall')} (-25%)">－</button>
                <div id="font-scale-indicator" class="font-scale-value-badge">${getFontScalePercentage()}</div>
                <button id="btn-font-inc" class="font-step-btn" title="${t('fontLarge')} (+25%)">＋</button>
                <button id="btn-font-reset" class="btn-secondary-action" style="padding: 6px 12px; font-size: 11px;">Reset</button>
              </div>
              <div class="font-presets-row">
                <button class="font-preset-chip" data-scale="-1">75%</button>
                <button class="font-preset-chip" data-scale="0">100%</button>
                <button class="font-preset-chip" data-scale="1">125%</button>
                <button class="font-preset-chip" data-scale="2">150%</button>
                <button class="font-preset-chip" data-scale="3">175%</button>
                <button class="font-preset-chip" data-scale="4">200%</button>
              </div>
            </div>

            <!-- Typography Adjustments -->
            <div style="margin-bottom: 14px;">
              <span class="section-label">📐 ${t('contentSection')}</span>
              <div class="button-grid cols-3">
                <button id="btn-font-bold" class="tool-btn">
                  <span class="btn-icon">𝗕</span>
                  <span>${t('fontBolder')}</span>
                </button>
                <button id="btn-dyslexia" class="tool-btn">
                  <span class="btn-icon">📖</span>
                  <span>${t('fontDyslexia')}</span>
                </button>
                <button id="btn-line-height" class="tool-btn">
                  <span class="btn-icon">↕️</span>
                  <span id="label-line-height">${t('lineHeight')}</span>
                </button>
              </div>
            </div>

            <div style="margin-bottom: 14px;">
              <div class="button-grid cols-3">
                <button id="btn-letter-spacing" class="tool-btn">
                  <span class="btn-icon">↔️</span>
                  <span id="label-letter-spacing">${t('letterSpacing')}</span>
                </button>
                <button id="btn-highlight-links" class="tool-btn">
                  <span class="btn-icon">🔗</span>
                  <span>${t('highlightLinks')}</span>
                </button>
                <button id="btn-highlight-titles" class="tool-btn">
                  <span class="btn-icon">🏷️</span>
                  <span>${t('highlightTitles')}</span>
                </button>
              </div>
            </div>

            <!-- Text Alignment -->
            <div>
              <span class="section-label">📜 ${t('textAlign')}</span>
              <div class="align-segmented-bar">
                <button class="align-btn" data-align="left" title="${t('alignLeft')}">⬅️</button>
                <button class="align-btn" data-align="center" title="${t('alignCenter')}">↔️</button>
                <button class="align-btn" data-align="right" title="${t('alignRight')}">➡️</button>
                <button class="align-btn" data-align="justify" title="${t('alignJustify')}">☰</button>
              </div>
            </div>
          </div>

          <!-- TAB 3: COLOR & CONTRAST -->
          <div id="tab-section-color" class="tab-content-pane ${this.activeTab === 'color' ? '' : 'hidden'}" style="${this.activeTab === 'color' ? '' : 'display:none;'}">
            <span class="section-label">🎨 ${t('colorSection')}</span>
            <div class="button-grid cols-3">
              <button id="btn-contrast-high" class="tool-btn" data-contrast="high">
                <span class="btn-icon">🌓</span>
                <span>${t('contrastHigh')}</span>
              </button>
              <button id="btn-contrast-dark" class="tool-btn" data-contrast="dark">
                <span class="btn-icon">🌑</span>
                <span>${t('contrastDark')}</span>
              </button>
              <button id="btn-contrast-light" class="tool-btn" data-contrast="light">
                <span class="btn-icon">🌕</span>
                <span>${t('contrastLight')}</span>
              </button>
              <button id="btn-contrast-mono" class="tool-btn" data-contrast="mono">
                <span class="btn-icon">⬛</span>
                <span>${t('contrastMono')}</span>
              </button>
              <button id="btn-contrast-low-sat" class="tool-btn" data-contrast="low-sat">
                <span class="btn-icon">🌫️</span>
                <span>${t('contrastLowSat')}</span>
              </button>
              <button id="btn-contrast-high-sat" class="tool-btn" data-contrast="high-sat">
                <span class="btn-icon">🌈</span>
                <span>${t('contrastHighSat')}</span>
              </button>
              <button id="btn-contrast-invert" class="tool-btn" data-contrast="invert" style="grid-column: 1 / -1;">
                <span class="btn-icon">🔄</span>
                <span>${t('contrastInvert')}</span>
              </button>
            </div>
          </div>

          <!-- TAB 4: VISUAL & USABILITY -->
          <div id="tab-section-visual" class="tab-content-pane ${this.activeTab === 'visual' ? '' : 'hidden'}" style="${this.activeTab === 'visual' ? '' : 'display:none;'}">
            <div style="margin-bottom: 14px;">
              <span class="section-label">🔍 ${t('visualSection')}</span>
              <div class="button-grid cols-2">
                <button id="btn-reading-guide" class="tool-btn">
                  <span class="btn-icon">📏</span>
                  <span>${t('readingGuide')}</span>
                </button>
                <button id="btn-reading-mask" class="tool-btn">
                  <span class="btn-icon">🕶️</span>
                  <span>${t('readingMask')}</span>
                </button>
                <button id="btn-super-focus" class="tool-btn">
                  <span class="btn-icon">🔦</span>
                  <span>${t('superFocus')}</span>
                </button>
                <button id="btn-big-cursor" class="tool-btn">
                  <span class="btn-icon">👆</span>
                  <span>${t('bigCursor')}</span>
                </button>
              </div>
            </div>

            <div>
              <span class="section-label">🛠️ ${t('usabilitySection')}</span>
              <div class="button-grid cols-3">
                <button id="btn-stop-anim" class="tool-btn">
                  <span class="btn-icon">⏸️</span>
                  <span>${t('stopAnimations')}</span>
                </button>
                <button id="btn-hide-images" class="tool-btn">
                  <span class="btn-icon">🖼️🚫</span>
                  <span>${t('hideImages')}</span>
                </button>
                <button id="btn-image-tooltips" class="tool-btn">
                  <span class="btn-icon">💬</span>
                  <span>${t('imageTooltips')}</span>
                </button>
              </div>
            </div>
          </div>

          <!-- TAB 5: AUDIO & SCREEN READER (BLIND ACCESSIBLE) -->
          <div id="tab-section-audio" class="tab-content-pane ${this.activeTab === 'audio' ? '' : 'hidden'}" style="${this.activeTab === 'audio' ? '' : 'display:none;'}">
            <div class="section-label">
              <span>🔊 ${t('audioSection')}</span>
            </div>

            <!-- Screen Reader Mode Switch Card -->
            <div id="card-screen-reader-box" class="audio-card-box">
              <div class="audio-card-top">
                <div class="audio-card-title-wrap">
                  <span>🦯</span>
                  <span>${t('screenReaderMode')}</span>
                </div>
                <span class="shortcut-kbd">Alt + R</span>
              </div>
              <p class="audio-card-desc">${t('screenReaderDesc')}</p>
              <button id="btn-screen-reader" class="btn-audio-action">
                <span>🔈</span>
                <span id="label-screen-reader-toggle">Aktifkan Pembaca Layar</span>
              </button>
            </div>

            <!-- Continuous Page Reader -->
            <div class="audio-card-box">
              <div class="audio-card-top">
                <div class="audio-card-title-wrap">
                  <span>📖</span>
                  <span>${t('pageReader')}</span>
                </div>
                <span class="shortcut-kbd">Alt + P</span>
              </div>
              <div style="display: flex; gap: 8px; margin-top: 4px;">
                <button id="btn-page-reader" class="btn-audio-action" style="flex: 1;">
                  <span>▶️</span>
                  <span id="label-page-reader">${t('pageReader')}</span>
                </button>
                <button id="btn-stop-speech" class="btn-audio-action danger" title="${t('stopPageReader')} (Alt + S)">
                  <span>⏹️</span>
                  <span>${t('stopPageReader')}</span>
                </button>
              </div>
            </div>

            <!-- Speech Rate Adjuster -->
            <div class="audio-card-box">
              <div class="audio-card-top">
                <div class="audio-card-title-wrap">
                  <span>⚡</span>
                  <span>${t('speechRate')}</span>
                </div>
              </div>
              <div class="speech-rate-grid">
                <button class="speech-rate-chip" data-rate="0.75">0.75x</button>
                <button class="speech-rate-chip" data-rate="1.0">1.0x</button>
                <button class="speech-rate-chip" data-rate="1.25">1.25x</button>
                <button class="speech-rate-chip" data-rate="1.5">1.5x</button>
                <button class="speech-rate-chip" data-rate="2.0">2.0x</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Panel Footer -->
        <div class="panel-footer">
          <button id="btn-reset-all" class="reset-link">${t('resetAll')}</button>
          <span>${t('shortcutHint')}: <b>Alt + A</b></span>
        </div>
      </div>

      <!-- Fullscreen AAC Communicator Modal -->
      <div id="aac-modal" class="aac-backdrop hidden" role="dialog" aria-modal="true" aria-label="${t('aacTitle')}">
        <div class="aac-window">
          <!-- Header -->
          <div class="aac-header">
            <div class="aac-header-left">
              <div class="aac-header-icon">🗣️</div>
              <div>
                <h2 class="aac-header-title">${t('aacTitle')}</h2>
                <p class="aac-header-subtitle">${t('aacSubtitle')}</p>
              </div>
            </div>
            <div class="aac-header-actions">
              <div class="lang-toggle-bar" aria-label="Pilih Bahasa / Choose Language">
                <button class="lang-btn ${lang === 'id' ? 'active' : ''}" data-lang="id" title="Bahasa Indonesia">ID</button>
                <button class="lang-btn ${lang === 'en' ? 'active' : ''}" data-lang="en" title="English">EN</button>
              </div>
              <button id="btn-export-aac" class="btn-secondary-action" title="${t('exportBtn')} JSON">
                💾 ${t('exportBtn')}
              </button>
              <button id="btn-import-aac" class="btn-secondary-action" title="${t('importBtn')} JSON">
                📥 ${t('importBtn')}
              </button>
              <input type="file" id="import-file-input" accept=".json" style="display: none;" />
              <button id="close-aac-btn" class="btn-icon-close" aria-label="${t('close')}" style="font-size: 24px;">&times;</button>
            </div>
          </div>

          <!-- Sentence Strip (Pita Kalimat) -->
          <div class="sentence-strip-wrapper">
            <div id="sentence-container" class="sentence-items-container">
              <div class="sentence-empty-placeholder">
                <span>${t('sentencePlaceholder')}</span>
              </div>
            </div>
            <div class="sentence-actions">
              <button id="btn-aac-speak" class="btn-speak-main">
                <span style="font-size: 20px;">🔊</span>
                <span>${t('speakBtn')}</span>
              </button>
              <button id="btn-aac-backspace" class="btn-strip-action" title="${t('backspaceBtn')}">
                <span style="font-size: 16px;">⌫</span>
                <span>${t('backspaceBtn')}</span>
              </button>
              <button id="btn-aac-clear" class="btn-strip-action" title="${t('clearBtn')}">
                <span style="font-size: 16px;">🗑️</span>
                <span>${t('clearBtn')}</span>
              </button>
            </div>
          </div>

          <!-- Category Filter Bar -->
          <div id="category-tabs" class="category-tabs-bar">
            <!-- Rendered dynamically -->
          </div>

          <!-- Main Cards Grid View -->
          <div id="aac-cards-grid" class="aac-body">
            <!-- Rendered dynamically -->
          </div>

          <!-- Floating Add Card Action -->
          <button id="btn-open-creator" class="btn-fab-add" title="${t('addCardBtn')}">
            <span style="font-size: 18px;">➕</span>
            <span>${t('addCardBtn')}</span>
          </button>

          <!-- Custom Card Creator Dialog -->
          <div id="card-creator-modal" class="custom-card-modal hidden">
            <div class="custom-card-dialog">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <h3 style="font-size: 17px; font-weight: 800;">${t('newCardTitle')}</h3>
                <button id="close-creator-btn" class="btn-icon-close">&times;</button>
              </div>

              <div class="form-group">
                <label for="input-card-label">${t('cardLabel')}</label>
                <input type="text" id="input-card-label" class="form-input" placeholder="${t('cardLabelPlaceholder')}" />
              </div>

              <div class="form-group">
                <label for="input-card-speech">${t('cardSpeech')}</label>
                <input type="text" id="input-card-speech" class="form-input" placeholder="${t('cardSpeechPlaceholder')}" />
              </div>

              <div class="form-group">
                <label for="select-card-cat">${t('cardCategory')}</label>
                <select id="select-card-cat" class="form-select"></select>
              </div>

              <div class="form-group">
                <label>${t('cardImage')}</label>
                <div style="display: flex; gap: 10px; align-items: center;">
                  <input type="file" id="input-card-image" accept="image/*" class="form-input" style="flex: 1;" />
                  <div id="preview-image-box" style="width: 44px; height: 44px; border-radius: 8px; border: 1px solid #cbd5e1; display: flex; align-items: center; justify-content: center; font-size: 20px; background: #f8fafc; overflow: hidden;">
                    🖼️
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label>${t('cardVoice')}</label>
                <div class="recorder-box">
                  <span id="recorder-status" style="font-size: 13px; color: #475569;">${t('voiceStatusDefault')}</span>
                  <button type="button" id="btn-record-voice" class="btn-record">
                    <span>🎙️</span>
                    <span id="btn-record-text">${t('recordBtn')}</span>
                  </button>
                </div>
              </div>

              <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 10px;">
                <button type="button" id="btn-cancel-creator" class="btn-secondary-action">${t('cancelBtn')}</button>
                <button type="button" id="btn-save-card" class="btn-speak-main" style="padding: 10px 18px; font-size: 14px;">${t('saveBtn')}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  bindEvents() {
    const root = this.shadowRoot;

    // Panel & FAB Triggers
    const fabTrigger = root.getElementById('fab-trigger');
    const panel = root.getElementById('a11y-panel');
    const closePanelBtn = root.getElementById('close-panel-btn');
    const openAacBtn = root.getElementById('open-aac-btn');
    const aacModal = root.getElementById('aac-modal');
    const closeAacBtn = root.getElementById('close-aac-btn');

    fabTrigger.addEventListener('click', () => {
      panel.classList.toggle('hidden');
    });

    closePanelBtn.addEventListener('click', () => {
      panel.classList.add('hidden');
    });

    openAacBtn.addEventListener('click', () => {
      panel.classList.add('hidden');
      aacModal.classList.remove('hidden');
      this.loadAACData();
    });

    closeAacBtn.addEventListener('click', () => {
      aacModal.classList.add('hidden');
      stopSentencePlayback();
    });

    // Language Toggle Buttons
    root.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        this.changeLanguage(lang);
      });
    });

    // Navigation Tabs inside Panel
    root.querySelectorAll('.panel-tab-btn').forEach(tabBtn => {
      tabBtn.addEventListener('click', () => {
        const tabId = tabBtn.getAttribute('data-tab');
        this.activeTab = tabId;
        
        root.querySelectorAll('.panel-tab-btn').forEach(b => b.classList.toggle('active', b.getAttribute('data-tab') === tabId));
        root.querySelectorAll('.tab-content-pane').forEach(p => {
          const isMatch = p.id === `tab-section-${tabId}`;
          p.classList.toggle('hidden', !isMatch);
          p.style.display = isMatch ? 'block' : 'none';
        });
      });
    });

    // Preset Profiles
    root.querySelectorAll('.profile-card').forEach(card => {
      card.addEventListener('click', () => {
        const profileId = card.getAttribute('data-profile');
        applyProfile(profileId);
        this.syncA11yUIState();
      });
    });

    // Font Sizing (75% - 200%)
    root.getElementById('btn-font-dec')?.addEventListener('click', () => {
      const current = getFontScale();
      setFontScale(current - 1);
      this.syncA11yUIState();
    });

    root.getElementById('btn-font-reset')?.addEventListener('click', () => {
      setFontScale(0);
      this.syncA11yUIState();
    });

    root.getElementById('btn-font-inc')?.addEventListener('click', () => {
      const current = getFontScale();
      setFontScale(current + 1);
      this.syncA11yUIState();
    });

    root.querySelectorAll('.font-preset-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const scale = parseInt(chip.getAttribute('data-scale'), 10);
        setFontScale(scale);
        this.syncA11yUIState();
      });
    });

    // Typography Controls
    root.getElementById('btn-font-bold')?.addEventListener('click', () => {
      toggleFontBold();
      this.syncA11yUIState();
    });

    root.getElementById('btn-dyslexia')?.addEventListener('click', () => {
      toggleDyslexia();
      this.syncA11yUIState();
    });

    root.getElementById('btn-line-height')?.addEventListener('click', () => {
      const current = getLineHeight();
      const next = (current + 1) % 3;
      setLineHeight(next);
      this.syncA11yUIState();
    });

    root.getElementById('btn-letter-spacing')?.addEventListener('click', () => {
      const current = getLetterSpacing();
      const next = (current + 1) % 3;
      setLetterSpacing(next);
      this.syncA11yUIState();
    });

    root.getElementById('btn-highlight-links')?.addEventListener('click', () => {
      toggleHighlightLinks();
      this.syncA11yUIState();
    });

    root.getElementById('btn-highlight-titles')?.addEventListener('click', () => {
      toggleHighlightTitles();
      this.syncA11yUIState();
    });

    // Text Alignment
    root.querySelectorAll('.align-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const align = btn.getAttribute('data-align');
        const current = getTextAlign();
        setTextAlign(current === align ? 'default' : align);
        this.syncA11yUIState();
      });
    });

    // Contrast Controls
    const contrastModes = ['high', 'dark', 'light', 'mono', 'low-sat', 'high-sat', 'invert'];
    contrastModes.forEach(mode => {
      const btn = root.querySelector(`button[data-contrast="${mode}"]`);
      btn?.addEventListener('click', () => {
        const current = getContrast();
        setContrast(current === mode ? 'normal' : mode);
        this.syncA11yUIState();
      });
    });

    // Visual & Navigation Aids
    root.getElementById('btn-reading-guide')?.addEventListener('click', () => {
      toggleReadingGuide();
      this.syncA11yUIState();
    });

    root.getElementById('btn-reading-mask')?.addEventListener('click', () => {
      toggleReadingMask();
      this.syncA11yUIState();
    });

    root.getElementById('btn-super-focus')?.addEventListener('click', () => {
      toggleSuperFocus();
      this.syncA11yUIState();
    });

    root.getElementById('btn-big-cursor')?.addEventListener('click', () => {
      toggleBigCursor();
      this.syncA11yUIState();
    });

    // Usability & Motion Utilities
    root.getElementById('btn-stop-anim')?.addEventListener('click', () => {
      toggleStopAnimations();
      this.syncA11yUIState();
    });

    root.getElementById('btn-hide-images')?.addEventListener('click', () => {
      toggleHideImages();
      this.syncA11yUIState();
    });

    root.getElementById('btn-image-tooltips')?.addEventListener('click', () => {
      toggleImageTooltips();
      this.syncA11yUIState();
    });

    // Audio & Screen Reader Controls (Blind Accessible)
    root.getElementById('btn-screen-reader')?.addEventListener('click', () => {
      toggleScreenReaderMode();
      this.syncA11yUIState();
    });

    root.getElementById('btn-page-reader')?.addEventListener('click', () => {
      togglePageReader();
      this.syncA11yUIState();
    });

    root.getElementById('btn-stop-speech')?.addEventListener('click', () => {
      stopPageReader();
      stopSpeech();
      this.syncA11yUIState();
    });

    root.querySelectorAll('.speech-rate-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const rate = parseFloat(chip.getAttribute('data-rate'));
        setSpeechRate(rate);
        this.syncA11yUIState();
        speakText(getLanguage() === 'en' ? `Speed set to ${rate}x` : `Kecepatan suara diatur ke ${rate}x`);
      });
    });

    // Reset All Settings
    root.getElementById('btn-reset-all')?.addEventListener('click', () => {
      resetAllSettings();
      this.syncA11yUIState();
    });

    // Sentence Actions
    root.getElementById('btn-aac-speak')?.addEventListener('click', () => {
      this.playCurrentSentence();
    });

    root.getElementById('btn-aac-backspace')?.addEventListener('click', () => {
      removeLastCard();
      this.renderSentenceStrip();
    });

    root.getElementById('btn-aac-clear')?.addEventListener('click', () => {
      clearSentence();
      this.renderSentenceStrip();
    });

    // Card Creator
    const creatorModal = root.getElementById('card-creator-modal');
    root.getElementById('btn-open-creator')?.addEventListener('click', () => {
      this.openCardCreator();
    });
    root.getElementById('close-creator-btn')?.addEventListener('click', () => {
      creatorModal.classList.add('hidden');
    });
    root.getElementById('btn-cancel-creator')?.addEventListener('click', () => {
      creatorModal.classList.add('hidden');
    });
    root.getElementById('btn-save-card')?.addEventListener('click', () => {
      this.saveCustomCard();
    });

    // Image Compression
    const imageInput = root.getElementById('input-card-image');
    imageInput?.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (file) {
        try {
          const compressed = await this.resizeImage(file, 300, 300);
          this.customImageBase64 = compressed;
          root.getElementById('preview-image-box').innerHTML = `<img src="${compressed}" alt="Preview" style="width:100%;height:100%;object-fit:cover;" />`;
        } catch (err) {
          console.warn('[AksesKita] Image resize fallback:', err);
        }
      }
    });

    // Audio Recording
    const recordBtn = root.getElementById('btn-record-voice');
    const recordText = root.getElementById('btn-record-text');
    const recordStatus = root.getElementById('recorder-status');

    recordBtn?.addEventListener('click', async () => {
      if (!this.isRecording) {
        try {
          await startAudioRecording();
          this.isRecording = true;
          recordBtn.classList.add('recording');
          recordText.textContent = getLanguage() === 'en' ? 'Stop' : 'Berhenti';
          recordStatus.textContent = t('voiceRecording');
        } catch (err) {
          alert((t('micError')) + (err.message || 'Error'));
        }
      } else {
        try {
          const blob = await stopAudioRecording();
          this.isRecording = false;
          this.currentRecordedAudioBlob = blob;
          recordBtn.classList.remove('recording');
          recordText.textContent = t('recordAgainBtn');
          recordStatus.textContent = t('voiceRecorded');
        } catch (err) {
          console.error(err);
        }
      }
    });

    // Backup & Restore
    root.getElementById('btn-export-aac')?.addEventListener('click', async () => {
      try {
        const backupJson = await exportBackup();
        const blob = new Blob([backupJson], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `akseskita_aac_backup_${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
      } catch (err) {
        alert(t('importFail') + err.message);
      }
    });

    const importInput = root.getElementById('import-file-input');
    root.getElementById('btn-import-aac')?.addEventListener('click', () => {
      importInput.click();
    });

    importInput?.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (file) {
        const text = await file.text();
        try {
          await importBackup(text);
          await this.loadAACData();
          alert(t('importSuccess'));
        } catch (err) {
          alert(t('importFail') + err.message);
        }
      }
    });
  }

  changeLanguage(newLang) {
    setLanguage(newLang);
    const root = this.shadowRoot;
    const isPanelOpen = !root.getElementById('a11y-panel').classList.contains('hidden');
    const isAacOpen = !root.getElementById('aac-modal').classList.contains('hidden');

    this.render();
    this.bindEvents();
    this.syncA11yUIState();
    this.renderCategoryTabs();
    this.renderCardGrid();
    this.renderSentenceStrip();

    if (isPanelOpen) {
      this.shadowRoot.getElementById('a11y-panel').classList.remove('hidden');
    }
    if (isAacOpen) {
      this.shadowRoot.getElementById('aac-modal').classList.remove('hidden');
    }
  }

  initShortcuts() {
    window.addEventListener('keydown', (e) => {
      // Alt + A: Open/Close A11y Panel
      if (e.altKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        const panel = this.shadowRoot.getElementById('a11y-panel');
        panel.classList.toggle('hidden');
      }
      // Alt + C: Open/Close AAC Communicator
      if (e.altKey && e.key.toLowerCase() === 'c') {
        e.preventDefault();
        const aacModal = this.shadowRoot.getElementById('aac-modal');
        aacModal.classList.toggle('hidden');
        if (!aacModal.classList.contains('hidden')) {
          this.loadAACData();
        } else {
          stopSentencePlayback();
        }
      }
      // Alt + R: Toggle Screen Reader Mode
      if (e.altKey && e.key.toLowerCase() === 'r') {
        e.preventDefault();
        toggleScreenReaderMode();
        this.syncA11yUIState();
      }
      // Alt + P: Toggle Continuous Page Reader
      if (e.altKey && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        togglePageReader();
        this.syncA11yUIState();
      }
      // Alt + S: Stop Speech immediately
      if (e.altKey && e.key.toLowerCase() === 's') {
        e.preventDefault();
        stopPageReader();
        stopSpeech();
        this.syncA11yUIState();
      }
      // Escape: Close opened modal/panel
      if (e.key === 'Escape') {
        const panel = this.shadowRoot.getElementById('a11y-panel');
        const aacModal = this.shadowRoot.getElementById('aac-modal');
        const creatorModal = this.shadowRoot.getElementById('card-creator-modal');
        if (creatorModal && !creatorModal.classList.contains('hidden')) {
          creatorModal.classList.add('hidden');
        } else if (aacModal && !aacModal.classList.contains('hidden')) {
          aacModal.classList.add('hidden');
          stopSentencePlayback();
        } else if (panel && !panel.classList.contains('hidden')) {
          panel.classList.add('hidden');
        }
      }
    });
  }

  syncA11yUIState() {
    const root = this.shadowRoot;
    const isEn = getLanguage() === 'en';
    const activeProfile = getActiveProfile();
    const scale = getFontScale();
    const bold = isFontBold();
    const lh = getLineHeight();
    const ls = getLetterSpacing();
    const dyslexia = isDyslexiaEnabled();
    const links = isHighlightLinksEnabled();
    const titles = isHighlightTitlesEnabled();
    const align = getTextAlign();
    const contrast = getContrast();
    const guide = isReadingGuideEnabled();
    const mask = isReadingMaskEnabled();
    const focus = isSuperFocusEnabled();
    const bigCursor = isBigCursorEnabled();
    const stopAnim = isStopAnimationsEnabled();
    const hideImgs = isHideImagesEnabled();
    const tooltips = isImageTooltipsEnabled();
    const screenReader = isScreenReaderEnabled();
    const pageReaderPlaying = isPageReaderPlaying();
    const currentRate = getSpeechRate();

    // Profiles
    root.querySelectorAll('.profile-card').forEach(c => {
      c.classList.toggle('active', c.getAttribute('data-profile') === activeProfile);
    });

    // Font Sizing (75% - 200%)
    const indicator = root.getElementById('font-scale-indicator');
    if (indicator) {
      indicator.textContent = getFontScalePercentage(scale);
    }
    root.querySelectorAll('.font-preset-chip').forEach(chip => {
      const chipScale = parseInt(chip.getAttribute('data-scale'), 10);
      chip.classList.toggle('active', chipScale === scale);
    });

    // Typography
    root.getElementById('btn-font-bold')?.classList.toggle('active', bold);
    root.getElementById('btn-dyslexia')?.classList.toggle('active', dyslexia);
    root.getElementById('btn-line-height')?.classList.toggle('active', lh > 0);
    root.getElementById('btn-letter-spacing')?.classList.toggle('active', ls > 0);
    root.getElementById('btn-highlight-links')?.classList.toggle('active', links);
    root.getElementById('btn-highlight-titles')?.classList.toggle('active', titles);

    // Alignment
    root.querySelectorAll('.align-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-align') === align);
    });

    // Contrast
    root.querySelectorAll('button[data-contrast]').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-contrast') === contrast);
    });

    // Visual & Usability
    root.getElementById('btn-reading-guide')?.classList.toggle('active', guide);
    root.getElementById('btn-reading-mask')?.classList.toggle('active', mask);
    root.getElementById('btn-super-focus')?.classList.toggle('active', focus);
    root.getElementById('btn-big-cursor')?.classList.toggle('active', bigCursor);
    root.getElementById('btn-stop-anim')?.classList.toggle('active', stopAnim);
    root.getElementById('btn-hide-images')?.classList.toggle('active', hideImgs);
    root.getElementById('btn-image-tooltips')?.classList.toggle('active', tooltips);

    // Audio & Screen Reader UI
    const screenReaderCard = root.getElementById('card-screen-reader-box');
    const screenReaderBtn = root.getElementById('btn-screen-reader');
    const screenReaderLabel = root.getElementById('label-screen-reader-toggle');
    if (screenReaderCard) {
      screenReaderCard.classList.toggle('active', screenReader);
    }
    if (screenReaderBtn) {
      screenReaderBtn.classList.toggle('active', screenReader);
    }
    if (screenReaderLabel) {
      screenReaderLabel.textContent = screenReader 
        ? (isEn ? 'Screen Reader Active (ON)' : 'Pembaca Layar Aktif (ON)')
        : (isEn ? 'Enable Screen Reader (OFF)' : 'Aktifkan Pembaca Layar (OFF)');
    }

    const pageReaderBtn = root.getElementById('btn-page-reader');
    const pageReaderLabel = root.getElementById('label-page-reader');
    if (pageReaderBtn) {
      pageReaderBtn.classList.toggle('active', pageReaderPlaying);
    }
    if (pageReaderLabel) {
      pageReaderLabel.textContent = pageReaderPlaying ? t('pageReaderPlaying') : t('pageReader');
    }

    root.querySelectorAll('.speech-rate-chip').forEach(chip => {
      const rate = parseFloat(chip.getAttribute('data-rate'));
      chip.classList.toggle('active', Math.abs(rate - currentRate) < 0.05);
    });
  }

  async loadAACData() {
    this.categories = await getAllCategories();
    this.cards = await getAllCards();
    this.renderCategoryTabs();
    this.renderCardGrid();
    this.renderSentenceStrip();
  }

  renderCategoryTabs() {
    const tabsContainer = this.shadowRoot.getElementById('category-tabs');
    if (!tabsContainer) return;
    const isEn = getLanguage() === 'en';

    let html = `
      <button class="cat-tab-btn ${this.activeCategoryId === 'all' ? 'active' : ''}" data-cat-id="all">
        <span>🌟</span>
        <span>${t('allCategory')}</span>
      </button>
    `;

    this.categories.forEach(cat => {
      const isActive = String(this.activeCategoryId) === String(cat.id);
      const catLabel = (isEn && cat.nameEn) ? cat.nameEn : cat.name;
      html += `
        <button class="cat-tab-btn ${isActive ? 'active' : ''}" data-cat-id="${cat.id}">
          <span>${cat.icon || '📁'}</span>
          <span>${catLabel}</span>
        </button>
      `;
    });

    tabsContainer.innerHTML = html;

    tabsContainer.querySelectorAll('.cat-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeCategoryId = btn.getAttribute('data-cat-id');
        this.renderCategoryTabs();
        this.renderCardGrid();
      });
    });
  }

  resizeImage(file, maxWidth = 300, maxHeight = 300) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxWidth) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg', 0.82));
        };
        img.onerror = () => resolve(e.target.result);
        img.src = e.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  renderCardGrid() {
    const gridContainer = this.shadowRoot.getElementById('aac-cards-grid');
    if (!gridContainer) return;
    const isEn = getLanguage() === 'en';

    const filteredCards = this.activeCategoryId === 'all' 
      ? this.cards 
      : this.cards.filter(c => String(c.categoryId) === String(this.activeCategoryId));

    if (filteredCards.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #64748b;">
          <p style="font-size: 16px; font-weight: 600;">${t('emptyCategory')}</p>
          <p style="font-size: 13px; margin-top: 6px;">${t('emptyCategoryHint')}</p>
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = filteredCards.map(card => {
      const isCustom = !card.isDefault;
      const displayLabel = (isEn && card.labelEn) ? card.labelEn : card.label;
      let iconHtml = '';
      if (card.image) {
        iconHtml = `<img src="${card.image}" alt="${displayLabel}" loading="lazy" />`;
      } else if (card.iconEmoji) {
        iconHtml = `<span>${card.iconEmoji}</span>`;
      } else {
        iconHtml = `<span>💬</span>`;
      }

      return `
        <div class="aac-card" tabindex="0" role="button" data-card-id="${card.id}" aria-label="${displayLabel}">
          ${isCustom ? `<span class="aac-card-badge-custom">${t('customBadge')}</span>` : ''}
          ${isCustom ? `<button class="aac-card-delete-btn" data-delete-id="${card.id}" aria-label="Delete ${displayLabel}" title="${t('backspaceBtn')}">&times;</button>` : ''}
          <div class="aac-card-icon-wrap" style="background: ${card.bgColor || '#f8fafc'}; border-color: ${card.borderColor || '#e2e8f0'};">
            ${iconHtml}
          </div>
          <span class="aac-card-label">${displayLabel}</span>
        </div>
      `;
    }).join('');

    const triggerCard = (cardEl) => {
      const cardId = cardEl.getAttribute('data-card-id');
      const card = this.cards.find(c => String(c.id) === String(cardId));
      if (card) {
        addCardToSentence(card);
        playSingleCard(card);
        this.renderSentenceStrip();
      }
    };

    gridContainer.querySelectorAll('.aac-card').forEach(cardEl => {
      cardEl.addEventListener('click', (e) => {
        if (e.target.closest('.aac-card-delete-btn')) return;
        triggerCard(cardEl);
      });

      cardEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          triggerCard(cardEl);
        }
      });
    });

    gridContainer.querySelectorAll('.aac-card-delete-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const deleteId = btn.getAttribute('data-delete-id');
        if (confirm(t('deleteConfirm'))) {
          await deleteCard(deleteId);
          await this.loadAACData();
        }
      });
    });
  }

  renderSentenceStrip() {
    const container = this.shadowRoot.getElementById('sentence-container');
    if (!container) return;
    const isEn = getLanguage() === 'en';

    const sentence = getSentenceList();
    if (sentence.length === 0) {
      container.innerHTML = `
        <div class="sentence-empty-placeholder">
          <span>${t('sentencePlaceholder')}</span>
        </div>
      `;
      return;
    }

    container.innerHTML = sentence.map((item, index) => {
      let icon = item.iconEmoji || '💬';
      if (item.image) {
        icon = `<img src="${item.image}" style="width:20px;height:20px;border-radius:4px;object-fit:cover;" />`;
      }
      const displayLabel = (isEn && item.labelEn) ? item.labelEn : item.label;

      return `
        <div class="sentence-card" id="sentence-item-${index}" data-index="${index}">
          <span class="sentence-card-icon">${icon}</span>
          <span class="sentence-card-label">${displayLabel}</span>
          <button class="sentence-card-remove" data-remove-index="${index}" title="${t('backspaceBtn')}">&times;</button>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.sentence-card-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.getAttribute('data-remove-index'), 10);
        removeCardFromSentence(idx);
        this.renderSentenceStrip();
      });
    });
  }

  async playCurrentSentence() {
    const root = this.shadowRoot;
    const container = root.getElementById('sentence-container');
    container.classList.add('active-listening');

    await speakSentence((activeIndex) => {
      const cards = root.querySelectorAll('.sentence-card');
      cards.forEach((el, idx) => {
        if (idx === activeIndex) {
          el.classList.add('highlight-reading');
          el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          el.classList.remove('highlight-reading');
        }
      });
    });

    container.classList.remove('active-listening');
  }

  openCardCreator() {
    const root = this.shadowRoot;
    const modal = root.getElementById('card-creator-modal');
    const catSelect = root.getElementById('select-card-cat');
    const isEn = getLanguage() === 'en';

    catSelect.innerHTML = this.categories.map(c => `
      <option value="${c.id}">${(isEn && c.nameEn) ? c.nameEn : c.name}</option>
    `).join('');

    root.getElementById('input-card-label').value = '';
    root.getElementById('input-card-speech').value = '';
    root.getElementById('preview-image-box').innerHTML = '🖼️';
    root.getElementById('recorder-status').textContent = t('voiceStatusDefault');
    root.getElementById('btn-record-text').textContent = t('recordBtn');
    
    this.customImageBase64 = null;
    this.currentRecordedAudioBlob = null;
    this.isRecording = false;

    modal.classList.remove('hidden');
  }

  async saveCustomCard() {
    const root = this.shadowRoot;
    const label = root.getElementById('input-card-label').value.trim();
    const speechText = root.getElementById('input-card-speech').value.trim() || label;
    const categoryId = parseInt(root.getElementById('select-card-cat').value, 10);

    if (!label) {
      alert(t('fillRequired'));
      return;
    }

    const newCard = {
      categoryId,
      label,
      speechText,
      labelEn: label,
      speechTextEn: speechText,
      image: this.customImageBase64 || null,
      audioBlob: this.currentRecordedAudioBlob || null,
      iconEmoji: this.customImageBase64 ? null : '✨',
      bgColor: '#FEF3C7',
      borderColor: '#F59E0B',
      isDefault: false
    };

    await addCard(newCard);
    root.getElementById('card-creator-modal').classList.add('hidden');
    await this.loadAACData();
  }
}

// Define Custom Element
if (typeof customElements !== 'undefined' && !customElements.get('akses-kita')) {
  customElements.define('akses-kita', AksesKitaElement);
}

// Auto mount to DOM
if (typeof window !== 'undefined') {
  const mountAksesKita = () => {
    if (!document.querySelector('akses-kita')) {
      const widget = document.createElement('akses-kita');
      document.body.appendChild(widget);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountAksesKita);
  } else {
    mountAksesKita();
  }
}

export { AksesKitaElement as default };
//# sourceMappingURL=akseskita.esm.js.map
