/**
 * AksesKita - Default AAC Symbols (Bahasa Indonesia)
 * Crisp, lightweight inline SVG symbols tailored for Indonesian assistive communication.
 */

export const defaultCategories = [
  { id: 1, name: 'Kebutuhan', icon: '🍽️', color: '#EA580C' },
  { id: 2, name: 'Respon', icon: '💬', color: '#16A34A' },
  { id: 3, name: 'Perasaan', icon: '😊', color: '#2563EB' },
  { id: 4, name: 'Aktivitas & Orang', icon: '👥', color: '#9333EA' }
];

export const defaultCards = [
  // 1. KEBUTUHAN (Category 1)
  {
    id: 101,
    categoryId: 1,
    label: 'Mau Makan',
    speechText: 'Saya mau makan',
    iconEmoji: '🍚',
    bgColor: '#FFF7ED',
    borderColor: '#EA580C',
    isDefault: true
  },
  {
    id: 102,
    categoryId: 1,
    label: 'Mau Minum',
    speechText: 'Saya mau minum air',
    iconEmoji: '🥛',
    bgColor: '#FFF7ED',
    borderColor: '#EA580C',
    isDefault: true
  },
  {
    id: 103,
    categoryId: 1,
    label: 'Ke Toilet',
    speechText: 'Saya ingin pergi ke toilet',
    iconEmoji: '🚻',
    bgColor: '#FFF7ED',
    borderColor: '#EA580C',
    isDefault: true
  },
  {
    id: 104,
    categoryId: 1,
    label: 'Tolong',
    speechText: 'Tolong bantu saya',
    iconEmoji: '🆘',
    bgColor: '#FFF7ED',
    borderColor: '#EA580C',
    isDefault: true
  },
  {
    id: 105,
    categoryId: 1,
    label: 'Istirahat',
    speechText: 'Saya mau istirahat',
    iconEmoji: '🛋️',
    bgColor: '#FFF7ED',
    borderColor: '#EA580C',
    isDefault: true
  },
  {
    id: 106,
    categoryId: 1,
    label: 'Sakit',
    speechText: 'Badan saya terasa sakit',
    iconEmoji: '🩹',
    bgColor: '#FFF7ED',
    borderColor: '#EA580C',
    isDefault: true
  },
  {
    id: 107,
    categoryId: 1,
    label: 'Tidur',
    speechText: 'Saya mau tidur',
    iconEmoji: '🛏️',
    bgColor: '#FFF7ED',
    borderColor: '#EA580C',
    isDefault: true
  },
  {
    id: 108,
    categoryId: 1,
    label: 'Minum Obat',
    speechText: 'Saya butuh minum obat',
    iconEmoji: '💊',
    bgColor: '#FFF7ED',
    borderColor: '#EA580C',
    isDefault: true
  },
  {
    id: 109,
    categoryId: 1,
    label: 'Cuci Tangan',
    speechText: 'Saya mau cuci tangan',
    iconEmoji: '🧼',
    bgColor: '#FFF7ED',
    borderColor: '#EA580C',
    isDefault: true
  },
  {
    id: 110,
    categoryId: 1,
    label: 'Ganti Baju',
    speechText: 'Saya ingin ganti baju',
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
    speechText: 'Ya',
    iconEmoji: '👍',
    bgColor: '#F0FDF4',
    borderColor: '#16A34A',
    isDefault: true
  },
  {
    id: 202,
    categoryId: 2,
    label: 'Tidak',
    speechText: 'Tidak',
    iconEmoji: '👎',
    bgColor: '#F0FDF4',
    borderColor: '#16A34A',
    isDefault: true
  },
  {
    id: 203,
    categoryId: 2,
    label: 'Mau',
    speechText: 'Saya mau',
    iconEmoji: '👌',
    bgColor: '#F0FDF4',
    borderColor: '#16A34A',
    isDefault: true
  },
  {
    id: 204,
    categoryId: 2,
    label: 'Tidak Mau',
    speechText: 'Saya tidak mau',
    iconEmoji: '🙅',
    bgColor: '#F0FDF4',
    borderColor: '#16A34A',
    isDefault: true
  },
  {
    id: 205,
    categoryId: 2,
    label: 'Terima Kasih',
    speechText: 'Terima kasih banyak',
    iconEmoji: '🙏',
    bgColor: '#F0FDF4',
    borderColor: '#16A34A',
    isDefault: true
  },
  {
    id: 206,
    categoryId: 2,
    label: 'Permisi',
    speechText: 'Permisi',
    iconEmoji: '👋',
    bgColor: '#F0FDF4',
    borderColor: '#16A34A',
    isDefault: true
  },
  {
    id: 207,
    categoryId: 2,
    label: 'Maaf',
    speechText: 'Saya minta maaf',
    iconEmoji: '🙇',
    bgColor: '#F0FDF4',
    borderColor: '#16A34A',
    isDefault: true
  },
  {
    id: 208,
    categoryId: 2,
    label: 'Tolong Ulangi',
    speechText: 'Tolong ulangi lagi',
    iconEmoji: '🔄',
    bgColor: '#F0FDF4',
    borderColor: '#16A34A',
    isDefault: true
  },
  {
    id: 209,
    categoryId: 2,
    label: 'Mengerti',
    speechText: 'Saya sudah mengerti',
    iconEmoji: '💡',
    bgColor: '#F0FDF4',
    borderColor: '#16A34A',
    isDefault: true
  },
  {
    id: 210,
    categoryId: 2,
    label: 'Tidak Tahu',
    speechText: 'Saya tidak tahu',
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
    speechText: 'Saya merasa senang',
    iconEmoji: '😄',
    bgColor: '#EFF6FF',
    borderColor: '#2563EB',
    isDefault: true
  },
  {
    id: 302,
    categoryId: 3,
    label: 'Sedih',
    speechText: 'Saya merasa sedih',
    iconEmoji: '😢',
    bgColor: '#EFF6FF',
    borderColor: '#2563EB',
    isDefault: true
  },
  {
    id: 303,
    categoryId: 3,
    label: 'Marah',
    speechText: 'Saya sedang marah',
    iconEmoji: '😠',
    bgColor: '#EFF6FF',
    borderColor: '#2563EB',
    isDefault: true
  },
  {
    id: 304,
    categoryId: 3,
    label: 'Takut',
    speechText: 'Saya merasa takut',
    iconEmoji: '😨',
    bgColor: '#EFF6FF',
    borderColor: '#2563EB',
    isDefault: true
  },
  {
    id: 305,
    categoryId: 3,
    label: 'Bingung',
    speechText: 'Saya merasa bingung',
    iconEmoji: '😕',
    bgColor: '#EFF6FF',
    borderColor: '#2563EB',
    isDefault: true
  },
  {
    id: 306,
    categoryId: 3,
    label: 'Lelah',
    speechText: 'Saya merasa lelah sekali',
    iconEmoji: '😫',
    bgColor: '#EFF6FF',
    borderColor: '#2563EB',
    isDefault: true
  },
  {
    id: 307,
    categoryId: 3,
    label: 'Kaget',
    speechText: 'Saya kaget',
    iconEmoji: '😲',
    bgColor: '#EFF6FF',
    borderColor: '#2563EB',
    isDefault: true
  },
  {
    id: 308,
    categoryId: 3,
    label: 'Cemas',
    speechText: 'Saya merasa cemas dan gelisah',
    iconEmoji: '😰',
    bgColor: '#EFF6FF',
    borderColor: '#2563EB',
    isDefault: true
  },
  {
    id: 309,
    categoryId: 3,
    label: 'Bangga',
    speechText: 'Saya bangga',
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
    speechText: 'Saya',
    iconEmoji: '🙋',
    bgColor: '#FAF5FF',
    borderColor: '#9333EA',
    isDefault: true
  },
  {
    id: 402,
    categoryId: 4,
    label: 'Kamu',
    speechText: 'Kamu',
    iconEmoji: '👉',
    bgColor: '#FAF5FF',
    borderColor: '#9333EA',
    isDefault: true
  },
  {
    id: 403,
    categoryId: 4,
    label: 'Belajar',
    speechText: 'Saya mau belajar',
    iconEmoji: '📚',
    bgColor: '#FAF5FF',
    borderColor: '#9333EA',
    isDefault: true
  },
  {
    id: 404,
    categoryId: 4,
    label: 'Bermain',
    speechText: 'Saya mau bermain',
    iconEmoji: '⚽',
    bgColor: '#FAF5FF',
    borderColor: '#9333EA',
    isDefault: true
  },
  {
    id: 405,
    categoryId: 4,
    label: 'Jalan-jalan',
    speechText: 'Mau jalan-jalan keluar',
    iconEmoji: '🚶',
    bgColor: '#FAF5FF',
    borderColor: '#9333EA',
    isDefault: true
  },
  {
    id: 406,
    categoryId: 4,
    label: 'Pulang',
    speechText: 'Saya mau pulang ke rumah',
    iconEmoji: '🏠',
    bgColor: '#FAF5FF',
    borderColor: '#9333EA',
    isDefault: true
  },
  {
    id: 407,
    categoryId: 4,
    label: 'Ibu',
    speechText: 'Ibu',
    iconEmoji: '👩',
    bgColor: '#FAF5FF',
    borderColor: '#9333EA',
    isDefault: true
  },
  {
    id: 408,
    categoryId: 4,
    label: 'Ayah',
    speechText: 'Ayah',
    iconEmoji: '👨',
    bgColor: '#FAF5FF',
    borderColor: '#9333EA',
    isDefault: true
  },
  {
    id: 409,
    categoryId: 4,
    label: 'Guru',
    speechText: 'Bapak atau Ibu Guru',
    iconEmoji: '🧑‍🏫',
    bgColor: '#FAF5FF',
    borderColor: '#9333EA',
    isDefault: true
  },
  {
    id: 410,
    categoryId: 4,
    label: 'Teman',
    speechText: 'Teman',
    iconEmoji: '🧑‍🤝‍🧑',
    bgColor: '#FAF5FF',
    borderColor: '#9333EA',
    isDefault: true
  },
  {
    id: 411,
    categoryId: 4,
    label: 'Dokter',
    speechText: 'Dokter atau Petugas Medis',
    iconEmoji: '🧑‍⚕️',
    bgColor: '#FAF5FF',
    borderColor: '#9333EA',
    isDefault: true
  }
];
