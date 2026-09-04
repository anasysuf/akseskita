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

export const aacModalStyles = `
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
