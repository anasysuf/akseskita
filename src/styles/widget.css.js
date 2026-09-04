/**
 * AksesKita - Shadow DOM Encapsulated Stylesheet
 * Fully self-contained styles for the FAB trigger, A11y Toolbar panel, and Fullscreen AAC Communicator.
 */

export const a11yStyles = `
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
  scrollbar-width: thin;
  -webkit-overflow-scrolling: touch;
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

export const aacModalStyles = `
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
