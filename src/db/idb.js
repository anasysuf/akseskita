/**
 * AksesKita - Native IndexedDB Wrapper
 * Zero external dependency storage for AAC categories, cards, and voice blobs.
 */

const DB_NAME = 'AksesKitaDB';
const DB_VERSION = 1;

let dbInstance = null;

export function openAksesKitaDB() {
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
export async function getAllCategories() {
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
export async function addCategory(category) {
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
export async function getAllCards(categoryId = null) {
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
export async function addCard(card) {
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
 * Update card
 */
export async function updateCard(card) {
  const db = await openAksesKitaDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('cards', 'readwrite');
    const store = tx.objectStore('cards');
    const request = store.put(card);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Delete card by ID
 */
export async function deleteCard(cardId) {
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
export async function exportBackup() {
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
export async function importBackup(jsonString) {
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
export async function initDefaultData(defaultCategories, defaultCards) {
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
