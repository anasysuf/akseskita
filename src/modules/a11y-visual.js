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

export function isReadingGuideEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY_GUIDE) === 'true';
  } catch (e) {
    return false;
  }
}

export function toggleReadingGuide(forcedState = null) {
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

export function isReadingMaskEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY_MASK) === 'true';
  } catch (e) {
    return false;
  }
}

export function toggleReadingMask(forcedState = null) {
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

export function isSuperFocusEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY_SUPER_FOCUS) === 'true';
  } catch (e) {
    return false;
  }
}

export function toggleSuperFocus(forcedState = null) {
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
export function isBigCursorEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY_BIG_CURSOR) === 'true';
  } catch (e) {
    return false;
  }
}

export function toggleBigCursor(forcedState = null) {
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
export function isStopAnimationsEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY_STOP_ANIM) === 'true';
  } catch (e) {
    return false;
  }
}

export function toggleStopAnimations(forcedState = null) {
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
export function isHideImagesEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY_HIDE_IMAGES) === 'true';
  } catch (e) {
    return false;
  }
}

export function toggleHideImages(forcedState = null) {
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

export function isImageTooltipsEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY_IMAGE_TOOLTIPS) === 'true';
  } catch (e) {
    return false;
  }
}

export function toggleImageTooltips(forcedState = null) {
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
export function resetVisualAids() {
  toggleReadingGuide(false);
  toggleReadingMask(false);
  toggleSuperFocus(false);
  toggleBigCursor(false);
  toggleStopAnimations(false);
  toggleHideImages(false);
  toggleImageTooltips(false);
}

// Restore saved visual aids
export function restoreVisualPreferences() {
  if (isReadingGuideEnabled()) toggleReadingGuide(true);
  if (isReadingMaskEnabled()) toggleReadingMask(true);
  if (isSuperFocusEnabled()) toggleSuperFocus(true);
  if (isBigCursorEnabled()) toggleBigCursor(true);
  if (isStopAnimationsEnabled()) toggleStopAnimations(true);
  if (isHideImagesEnabled()) toggleHideImages(true);
  if (isImageTooltipsEnabled()) toggleImageTooltips(true);
}
