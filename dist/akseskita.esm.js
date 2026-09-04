/**
 * AksesKita - Host Injected Stylesheet
 * Injected into host page document.head to style the target web page non-destructively.
 */

const hostStyles = `
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
  width: 360px;
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 100px);
  background: #ffffff;
  border: 1px solid var(--ak-border);
  border-radius: 18px;
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
  padding: 16px 20px;
  background: #f8fafc;
  border-bottom: 1px solid var(--ak-border);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

.panel-title-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.panel-title-wrapper h3 {
  font-size: 16px;
  font-weight: 700;
  color: var(--ak-text-main);
}

.panel-title-badge {
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  background: #e0f2fe;
  color: #0369a1;
  padding: 2px 8px;
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
  color: var(--ak-text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
}

.lang-btn.active {
  background: #0284c7;
  color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
}

.btn-icon-close {
  background: transparent;
  border: none;
  font-size: 20px;
  color: var(--ak-text-muted);
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.15s ease;
}

.btn-icon-close:hover {
  background: #e2e8f0;
  color: var(--ak-text-main);
}

/* Panel Body & Sections */
.panel-body {
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.panel-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.section-label {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--ak-text-muted);
  display: flex;
  align-items: center;
  gap: 6px;
}

/* Button Group (Grid / Flex) */
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

.tool-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 8px;
  background: var(--ak-card-bg);
  border: 1px solid var(--ak-border);
  border-radius: 10px;
  color: var(--ak-text-main);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
  text-align: center;
}

.tool-btn:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
  transform: translateY(-1px);
}

.tool-btn.active {
  background: #e0f2fe;
  border-color: #0284c7;
  color: #0369a1;
  font-weight: 700;
}

.tool-btn .btn-icon {
  font-size: 18px;
}

/* Big Action CTA (AAC & Reader) */
.btn-aac-launch {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px;
  background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(22, 163, 74, 0.3);
  transition: all 0.2s ease;
}

.btn-aac-launch:hover {
  background: linear-gradient(135deg, #15803d 0%, #166534 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(22, 163, 74, 0.4);
}

.panel-footer {
  padding: 12px 20px;
  background: #f8fafc;
  border-top: 1px solid var(--ak-border);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  color: var(--ak-text-muted);
}

.reset-link {
  background: none;
  border: none;
  color: #ef4444;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
}

.reset-link:hover {
  color: #b91c1c;
}
`;

const aacModalStyles = `
/* Fullscreen AAC Modal */
.aac-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(8px);
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

.aac-window {
  width: 1000px;
  max-width: 100%;
  height: 92vh;
  max-height: 840px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

/* Modal Header */
.aac-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: #f8fafc;
  border-bottom: 1px solid var(--ak-border);
}

.aac-header-left {
  display: flex;
  align-items: center;
  gap: 14px;
}

.aac-header-icon {
  width: 40px;
  height: 40px;
  background: #e0f2fe;
  color: #0284c7;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}

.aac-header-title {
  font-size: 18px;
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
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: #ffffff;
  border: 1px solid var(--ak-border);
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  color: var(--ak-text-main);
  cursor: pointer;
  transition: all 0.15s ease;
}

.btn-secondary-action:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
}

/* Sentence Strip Bar (Pita Kalimat) */
.sentence-strip-wrapper {
  background: #f1f5f9;
  padding: 14px 20px;
  border-bottom: 2px solid var(--ak-border);
  display: flex;
  align-items: center;
  gap: 16px;
}

.sentence-items-container {
  flex: 1;
  min-height: 72px;
  background: #ffffff;
  border: 2px dashed #cbd5e1;
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  overflow-x: auto;
  scroll-behavior: smooth;
}

.sentence-items-container.active-listening {
  border-color: #16a34a;
  background: #f0fdf4;
}

.sentence-empty-placeholder {
  color: #94a3b8;
  font-size: 13px;
  font-style: italic;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Individual Card in Sentence Strip */
.sentence-card {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: #ffffff;
  border: 2px solid #0284c7;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  flex-shrink: 0;
  cursor: pointer;
  animation: popIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  transition: all 0.2s ease;
}

.sentence-card.highlight-reading {
  border-color: #16a34a;
  background: #dcfce7;
  transform: scale(1.1);
  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.4);
}

.sentence-card-icon {
  font-size: 20px;
}

.sentence-card-label {
  font-size: 13px;
  font-weight: 700;
  color: #0f172a;
}

.sentence-card-remove {
  font-size: 14px;
  color: #94a3b8;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0 2px;
}

.sentence-card-remove:hover {
  color: #ef4444;
}

/* Sentence Control Buttons */
.sentence-actions {
  display: flex;
  align-items: center;
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
  border-radius: 12px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(22, 163, 74, 0.35);
  transition: all 0.15s ease;
}

.btn-speak-main:hover {
  background: linear-gradient(135deg, #15803d 0%, #166534 100%);
  transform: translateY(-1px);
}

.btn-strip-action {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  background: #ffffff;
  border: 1px solid var(--ak-border);
  border-radius: 10px;
  color: var(--ak-text-main);
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  min-width: 54px;
  transition: all 0.15s ease;
}

.btn-strip-action:hover {
  background: #fee2e2;
  border-color: #fca5a5;
  color: #b91c1c;
}

/* Category Tabs Bar */
.category-tabs-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: #ffffff;
  border-bottom: 1px solid var(--ak-border);
  overflow-x: auto;
}

.cat-tab-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #f8fafc;
  border: 1px solid var(--ak-border);
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 600;
  color: var(--ak-text-muted);
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s ease;
}

.cat-tab-btn:hover {
  background: #e2e8f0;
  color: var(--ak-text-main);
}

.cat-tab-btn.active {
  background: #0284c7;
  color: #ffffff;
  border-color: #0284c7;
  box-shadow: 0 2px 8px rgba(2, 132, 199, 0.35);
}

/* Card Grid Main View */
.aac-body {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
  gap: 14px;
  align-content: start;
}

/* AAC Single Card in Grid */
.aac-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 14px 10px;
  background: #ffffff;
  border: 2px solid var(--ak-border);
  border-radius: 16px;
  cursor: pointer;
  user-select: none;
  position: relative;
  transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.04);
}

.aac-card:hover {
  transform: translateY(-4px);
  border-color: #0284c7;
  box-shadow: 0 10px 20px -5px rgba(2, 132, 199, 0.2);
}

.aac-card:active {
  transform: scale(0.96);
}

.aac-card-icon-wrap {
  width: 54px;
  height: 54px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin-bottom: 8px;
  background: #f8fafc;
  overflow: hidden;
}

.aac-card-icon-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.aac-card-label {
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  color: #0f172a;
  line-height: 1.2;
}

.aac-card-badge-custom {
  position: absolute;
  top: 6px;
  right: 6px;
  font-size: 9px;
  background: #fef08a;
  color: #854d0e;
  padding: 2px 5px;
  border-radius: 4px;
  font-weight: 800;
}

.aac-card-delete-btn {
  position: absolute;
  top: 6px;
  left: 6px;
  width: 20px;
  height: 20px;
  background: #fee2e2;
  color: #ef4444;
  border: none;
  border-radius: 50%;
  font-size: 11px;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.aac-card:hover .aac-card-delete-btn {
  display: flex;
}

/* Floating Add Card Button */
.btn-fab-add {
  position: absolute;
  bottom: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  background: #0284c7;
  color: #ffffff;
  border: none;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 25px -5px rgba(2, 132, 199, 0.5);
  transition: all 0.2s ease;
}

.btn-fab-add:hover {
  background: #0369a1;
  transform: translateY(-2px);
}

/* Custom Card Creator Modal */
.custom-card-modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 10;
}

.custom-card-modal.hidden {
  display: none !important;
}

.custom-card-dialog {
  width: 480px;
  max-width: 100%;
  background: #ffffff;
  border-radius: 18px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: var(--ak-shadow-xl);
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
  padding: 10px 12px;
  border: 1px solid var(--ak-border);
  border-radius: 8px;
  font-size: 14px;
  color: #0f172a;
}

.form-input:focus, .form-select:focus {
  outline: 2px solid #0284c7;
  border-color: #0284c7;
}

/* Audio Record Section in Creator */
.recorder-box {
  border: 1px dashed #cbd5e1;
  border-radius: 10px;
  padding: 12px;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btn-record {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: #ef4444;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
}

.btn-record.recording {
  animation: pulseRecord 1s infinite alternate;
}

@keyframes pulseRecord {
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0.7; transform: scale(0.96); }
}

@media (max-width: 640px) {
  .sentence-strip-wrapper {
    flex-direction: column;
    align-items: stretch;
  }
  .aac-body {
    grid-template-columns: repeat(auto-fill, minmax(105px, 1fr));
    gap: 10px;
    padding: 12px;
  }
  .aac-card-icon-wrap {
    width: 44px;
    height: 44px;
    font-size: 26px;
  }
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
    // Toolbar A11y
    toolbarTitle: 'AksesKita',
    a11yBadge: 'A11y',
    openAacBtn: 'Buka Papan Bicara (AAC)',
    textSettings: 'Ukuran & Bentuk Teks',
    fontSmall: 'Kecil',
    fontNormal: 'Normal',
    fontLarge: 'Besar',
    fontDyslexia: 'Disleksia',
    contrastSettings: 'Kontras & Warna',
    contrastHigh: 'Kontras Tinggi',
    contrastMono: 'Monokrom',
    contrastInvert: 'Balik Warna',
    visualAids: 'Alat Bantu Visual',
    highlightLinks: 'Sorot Tautan',
    readingGuide: 'Garis Pandu',
    resetAll: 'Atur Ulang Semua',
    shortcutHint: 'Pintasan',
    close: 'Tutup',

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
    // Toolbar A11y
    toolbarTitle: 'AksesKita',
    a11yBadge: 'A11y',
    openAacBtn: 'Open AAC Communicator',
    textSettings: 'Text Appearance',
    fontSmall: 'Small',
    fontNormal: 'Normal',
    fontLarge: 'Large',
    fontDyslexia: 'Dyslexia',
    contrastSettings: 'Contrast & Filters',
    contrastHigh: 'High Contrast',
    contrastMono: 'Monochrome',
    contrastInvert: 'Invert Colors',
    visualAids: 'Visual Aids',
    highlightLinks: 'Highlight Links',
    readingGuide: 'Reading Guide',
    resetAll: 'Reset All',
    shortcutHint: 'Shortcuts',
    close: 'Close',

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
 * AksesKita - A11y Font Resizing & Dyslexia Mode Controller
 */

const STORAGE_KEY_SCALE = 'akseskita_font_scale';
const STORAGE_KEY_DYSLEXIA = 'akseskita_dyslexia_mode';

function getFontScale() {
  try {
    return parseInt(localStorage.getItem(STORAGE_KEY_SCALE) || '0', 10);
  } catch (e) {
    return 0;
  }
}

function setFontScale(level) {
  const clamped = Math.max(0, Math.min(3, level));
  const root = document.documentElement;
  
  // Remove existing scale classes
  root.classList.remove(
    'akseskita-scale-0',
    'akseskita-scale-1',
    'akseskita-scale-2',
    'akseskita-scale-3'
  );

  if (clamped > 0) {
    root.classList.add(`akseskita-scale-${clamped}`);
  }

  try {
    localStorage.setItem(STORAGE_KEY_SCALE, clamped.toString());
  } catch (e) {}

  return clamped;
}

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

function resetFont() {
  setFontScale(0);
  toggleDyslexia(false);
}

function restoreFontPreferences() {
  const scale = getFontScale();
  if (scale > 0) setFontScale(scale);

  const dyslexia = isDyslexiaEnabled();
  if (dyslexia) toggleDyslexia(true);
}

/**
 * AksesKita - A11y Contrast & Visual Filters Controller
 */

const STORAGE_KEY_CONTRAST = 'akseskita_contrast_mode';
const STORAGE_KEY_LINKS = 'akseskita_highlight_links';
const STORAGE_KEY_GUIDE = 'akseskita_reading_guide';

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
  root.classList.remove('akseskita-contrast-high', 'akseskita-monochrome', 'akseskita-invert');

  if (mode === 'high') {
    root.classList.add('akseskita-contrast-high');
  } else if (mode === 'mono') {
    root.classList.add('akseskita-monochrome');
  } else if (mode === 'invert') {
    root.classList.add('akseskita-invert');
  }

  try {
    localStorage.setItem(STORAGE_KEY_CONTRAST, mode);
  } catch (e) {}

  return mode;
}

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

function isReadingGuideEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY_GUIDE) === 'true';
  } catch (e) {
    return false;
  }
}

let guideMouseMoveHandler = null;
let rafId = null;

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
    guideEl.style.display = 'block';
    if (!guideMouseMoveHandler) {
      let latestY = 0;
      guideMouseMoveHandler = (e) => {
        latestY = e.clientY;
        if (!rafId) {
          rafId = requestAnimationFrame(() => {
            guideEl.style.top = `${latestY}px`;
            rafId = null;
          });
        }
      };
      window.addEventListener('mousemove', guideMouseMoveHandler, { passive: true });
    }
  } else {
    guideEl.style.display = 'none';
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
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

function resetContrast() {
  setContrast('normal');
  toggleHighlightLinks(false);
  toggleReadingGuide(false);
}

function restoreContrastPreferences() {
  const contrast = getContrast();
  if (contrast && contrast !== 'normal') setContrast(contrast);

  if (isHighlightLinksEnabled()) toggleHighlightLinks(true);
  if (isReadingGuideEnabled()) toggleReadingGuide(true);
}

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
    // English priority
    let voice = voices.find(v => v.lang === 'en-US' || v.lang === 'en_US');
    if (voice) return voice;
    voice = voices.find(v => v.lang === 'en-GB' || v.lang === 'en_GB');
    if (voice) return voice;
    voice = voices.find(v => v.lang.toLowerCase().startsWith('en'));
    if (voice) return voice;
    return null;
  } else {
    // Indonesian priority
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
 * Speak text out loud with resume keepalive and bilingual voice selection
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

    utterance.rate = options.rate || 0.95;
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

/**
 * Initialize Quick TTS Floating popover on host text selection
 */
function initQuickTTS() {
  if (typeof document === 'undefined') return;

  let popover = document.getElementById('akseskita-tts-popover');
  if (!popover) {
    popover = document.createElement('div');
    popover.id = 'akseskita-tts-popover';
    popover.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
      </svg>
      <span>Dengarkan</span>
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

      if (text.length > 2) {
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

  popover.addEventListener('mousedown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (selectedText) {
      speakText(selectedText);
      popover.style.display = 'none';
    }
  });
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
 * AksesKita - All-in-One Assistive Web Suite Indonesia
 * Unified Web Accessibility Toolbar & Visual AAC Communicator
 * Zero Dependency Web Component (<akses-kita>)
 * Bilingual: Bahasa Indonesia & English
 */


class AksesKitaElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
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
    
    // Restore user settings
    restoreFontPreferences();
    restoreContrastPreferences();
    initQuickTTS();
    this.syncA11yUIState();

    // Init DB & default cards
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
      <button id="fab-trigger" class="fab-trigger" aria-label="Buka Menu Aksesibilitas dan Papan Komunikasi AksesKita" title="Aksesibilitas (Alt + A)">
        <span class="fab-icon">♿</span>
        <span>AksesKita</span>
      </button>

      <!-- Toolbar A11y Panel -->
      <div id="a11y-panel" class="panel-container hidden" role="dialog" aria-modal="false" aria-label="Menu Aksesibilitas Web">
        <div class="panel-header">
          <div class="panel-title-wrapper">
            <span style="font-size: 20px;">♿</span>
            <div>
              <h3>AksesKita</h3>
            </div>
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

        <div class="panel-body">
          <!-- CTA AAC Communicator -->
          <div class="panel-section">
            <span class="section-label">🗣️ ${lang === 'en' ? 'Assistive Communication' : 'Komunikasi Asistif'}</span>
            <button id="open-aac-btn" class="btn-aac-launch" title="Shortcut: Alt + C">
              <span style="font-size: 22px;">🗣️</span>
              <span>${t('openAacBtn')}</span>
            </button>
          </div>

          <!-- Text Resizing & Font -->
          <div class="panel-section">
            <span class="section-label">🔤 ${t('textSettings')}</span>
            <div class="button-grid cols-4">
              <button id="btn-font-dec" class="tool-btn" aria-label="${t('fontSmall')}">
                <span class="btn-icon">A-</span>
                <span>${t('fontSmall')}</span>
              </button>
              <button id="btn-font-reset" class="tool-btn" aria-label="${t('fontNormal')}">
                <span class="btn-icon">A</span>
                <span>${t('fontNormal')}</span>
              </button>
              <button id="btn-font-inc" class="tool-btn" aria-label="${t('fontLarge')}">
                <span class="btn-icon">A+</span>
                <span>${t('fontLarge')}</span>
              </button>
              <button id="btn-dyslexia" class="tool-btn" aria-label="${t('fontDyslexia')}">
                <span class="btn-icon">📖</span>
                <span>${t('fontDyslexia')}</span>
              </button>
            </div>
          </div>

          <!-- Color Schemes & Filters -->
          <div class="panel-section">
            <span class="section-label">🎨 ${t('contrastSettings')}</span>
            <div class="button-grid cols-3">
              <button id="btn-contrast-high" class="tool-btn" data-contrast="high">
                <span class="btn-icon">🌓</span>
                <span>${t('contrastHigh')}</span>
              </button>
              <button id="btn-contrast-mono" class="tool-btn" data-contrast="mono">
                <span class="btn-icon">⬛</span>
                <span>${t('contrastMono')}</span>
              </button>
              <button id="btn-contrast-invert" class="tool-btn" data-contrast="invert">
                <span class="btn-icon">🔄</span>
                <span>${t('contrastInvert')}</span>
              </button>
            </div>
          </div>

          <!-- Visual Aids -->
          <div class="panel-section">
            <span class="section-label">🔍 ${t('visualAids')}</span>
            <div class="button-grid">
              <button id="btn-highlight-links" class="tool-btn">
                <span class="btn-icon">🔗</span>
                <span>${t('highlightLinks')}</span>
              </button>
              <button id="btn-reading-guide" class="tool-btn">
                <span class="btn-icon">📏</span>
                <span>${t('readingGuide')}</span>
              </button>
            </div>
          </div>
        </div>

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

    // Language Toggle Buttons (Panel and AAC header)
    root.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = btn.getAttribute('data-lang');
        this.changeLanguage(lang);
      });
    });

    // Font actions
    root.getElementById('btn-font-inc').addEventListener('click', () => {
      const current = getFontScale();
      setFontScale(current + 1);
      this.syncA11yUIState();
    });

    root.getElementById('btn-font-dec').addEventListener('click', () => {
      const current = getFontScale();
      setFontScale(current - 1);
      this.syncA11yUIState();
    });

    root.getElementById('btn-font-reset').addEventListener('click', () => {
      setFontScale(0);
      this.syncA11yUIState();
    });

    root.getElementById('btn-dyslexia').addEventListener('click', () => {
      toggleDyslexia();
      this.syncA11yUIState();
    });

    // Contrast actions
    root.getElementById('btn-contrast-high').addEventListener('click', () => {
      const current = getContrast();
      setContrast(current === 'high' ? 'normal' : 'high');
      this.syncA11yUIState();
    });

    root.getElementById('btn-contrast-mono').addEventListener('click', () => {
      const current = getContrast();
      setContrast(current === 'mono' ? 'normal' : 'mono');
      this.syncA11yUIState();
    });

    root.getElementById('btn-contrast-invert').addEventListener('click', () => {
      const current = getContrast();
      setContrast(current === 'invert' ? 'normal' : 'invert');
      this.syncA11yUIState();
    });

    // Visual aids
    root.getElementById('btn-highlight-links').addEventListener('click', () => {
      toggleHighlightLinks();
      this.syncA11yUIState();
    });

    root.getElementById('btn-reading-guide').addEventListener('click', () => {
      toggleReadingGuide();
      this.syncA11yUIState();
    });

    root.getElementById('btn-reset-all').addEventListener('click', () => {
      resetFont();
      resetContrast();
      this.syncA11yUIState();
    });

    // Sentence Actions
    root.getElementById('btn-aac-speak').addEventListener('click', () => {
      this.playCurrentSentence();
    });

    root.getElementById('btn-aac-backspace').addEventListener('click', () => {
      removeLastCard();
      this.renderSentenceStrip();
    });

    root.getElementById('btn-aac-clear').addEventListener('click', () => {
      clearSentence();
      this.renderSentenceStrip();
    });

    // Card Creator
    const creatorModal = root.getElementById('card-creator-modal');
    root.getElementById('btn-open-creator').addEventListener('click', () => {
      this.openCardCreator();
    });
    root.getElementById('close-creator-btn').addEventListener('click', () => {
      creatorModal.classList.add('hidden');
    });
    root.getElementById('btn-cancel-creator').addEventListener('click', () => {
      creatorModal.classList.add('hidden');
    });
    root.getElementById('btn-save-card').addEventListener('click', () => {
      this.saveCustomCard();
    });

    // Optimized Image File Compression
    const imageInput = root.getElementById('input-card-image');
    imageInput.addEventListener('change', async (e) => {
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

    // Audio recording button
    const recordBtn = root.getElementById('btn-record-voice');
    const recordText = root.getElementById('btn-record-text');
    const recordStatus = root.getElementById('recorder-status');

    recordBtn.addEventListener('click', async () => {
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
    root.getElementById('btn-export-aac').addEventListener('click', async () => {
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
    root.getElementById('btn-import-aac').addEventListener('click', () => {
      importInput.click();
    });

    importInput.addEventListener('change', async (e) => {
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
      if (e.altKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        const panel = this.shadowRoot.getElementById('a11y-panel');
        panel.classList.toggle('hidden');
      }
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
      if (e.key === 'Escape') {
        const panel = this.shadowRoot.getElementById('a11y-panel');
        const aacModal = this.shadowRoot.getElementById('aac-modal');
        const creatorModal = this.shadowRoot.getElementById('card-creator-modal');
        if (!creatorModal.classList.contains('hidden')) {
          creatorModal.classList.add('hidden');
        } else if (!aacModal.classList.contains('hidden')) {
          aacModal.classList.add('hidden');
          stopSentencePlayback();
        } else if (!panel.classList.contains('hidden')) {
          panel.classList.add('hidden');
        }
      }
    });
  }

  syncA11yUIState() {
    const root = this.shadowRoot;
    const currentScale = getFontScale();
    const isDyslexia = isDyslexiaEnabled();
    const currentContrast = getContrast();
    const isLinks = isHighlightLinksEnabled();
    const isGuide = isReadingGuideEnabled();

    root.getElementById('btn-dyslexia')?.classList.toggle('active', isDyslexia);
    root.getElementById('btn-font-inc')?.classList.toggle('active', currentScale > 0);
    root.getElementById('btn-font-reset')?.classList.toggle('active', currentScale === 0);

    root.getElementById('btn-contrast-high')?.classList.toggle('active', currentContrast === 'high');
    root.getElementById('btn-contrast-mono')?.classList.toggle('active', currentContrast === 'mono');
    root.getElementById('btn-contrast-invert')?.classList.toggle('active', currentContrast === 'invert');

    root.getElementById('btn-highlight-links')?.classList.toggle('active', isLinks);
    root.getElementById('btn-reading-guide')?.classList.toggle('active', isGuide);
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

    // Bind card clicks & keyboard Enter/Space
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

    // Bind delete clicks
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

    // Remove single card button listener
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

    // Populate categories
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
