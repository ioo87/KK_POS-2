import { Product, MonthlyRecord, Category } from './types';

export const INITIAL_CATEGORIES: Category[] = [
  { id: 'all', name: 'ทั้งหมด', icon: 'LayoutGrid' },
  { id: 'coffee', name: 'กาแฟ/ชา', icon: 'Coffee' },
  { id: 'bakery', name: 'เบเกอรี่', icon: 'Croissant' },
  { id: 'drinks', name: 'เครื่องดื่มอื่นๆ', icon: 'CupSoda' },
  { id: 'snacks', name: 'ขนมขบเคี้ยว', icon: 'Cookie' },
  { id: 'merchandise', name: 'สินค้าทั่วไป', icon: 'Package' },
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'เอสเพรสโซ่ร้อน (Hot Espresso)',
    price: 55,
    stock: 45,
    lowStockThreshold: 10,
    category: 'coffee',
    sku: 'SKU-001',
    colorHex: '#4E3629'
  },
  {
    id: 'p2',
    name: 'ลาเต้เย็น (Iced Latte)',
    price: 65,
    stock: 35,
    lowStockThreshold: 10,
    category: 'coffee',
    sku: 'SKU-002',
    colorHex: '#C5A080'
  },
  {
    id: 'p3',
    name: 'ชาไทยเย็น (Iced Thai Tea)',
    price: 60,
    stock: 5, // Low stock on purpose to trigger alert!
    lowStockThreshold: 8,
    category: 'coffee',
    sku: 'SKU-003',
    colorHex: '#FF7F32'
  },
  {
    id: 'p4',
    name: 'ครัวซองต์เนยสด (Butter Croissant)',
    price: 75,
    stock: 12,
    lowStockThreshold: 5,
    category: 'bakery',
    sku: 'SKU-004',
    colorHex: '#E5A65D'
  },
  {
    id: 'p5',
    name: 'ชีสเค้กหน้าไหม้ (Basque Cheesecake)',
    price: 110,
    stock: 3, // Low stock on purpose
    lowStockThreshold: 5,
    category: 'bakery',
    sku: 'SKU-005',
    colorHex: '#D2B48C'
  },
  {
    id: 'p6',
    name: 'ช็อกโกแลตฟัดจ์เค้ก (Chocolate Fudge)',
    price: 95,
    stock: 8,
    lowStockThreshold: 3,
    category: 'bakery',
    sku: 'SKU-006',
    colorHex: '#3D2314'
  },
  {
    id: 'p7',
    name: 'น้ำสตอเบอรี่ปั่น (Strawberry Smoothie)',
    price: 70,
    stock: 25,
    lowStockThreshold: 10,
    category: 'drinks',
    sku: 'SKU-007',
    colorHex: '#E0115F'
  },
  {
    id: 'p8',
    name: 'ชามะนาวเย็น (Iced Lemon Tea)',
    price: 55,
    stock: 2, // Critical stock!
    lowStockThreshold: 6,
    category: 'coffee',
    sku: 'SKU-008',
    colorHex: '#D4AF37'
  },
  {
    id: 'p9',
    name: 'คุกกี้ช็อกโกแลตชิป (Choc Chip Cookie)',
    price: 45,
    stock: 18,
    lowStockThreshold: 5,
    category: 'snacks',
    sku: 'SKU-009',
    colorHex: '#C68E17'
  },
  {
    id: 'p10',
    name: 'แก้วกาแฟพกพา KK (KK Tumbler)',
    price: 350,
    stock: 15,
    lowStockThreshold: 5,
    category: 'merchandise',
    sku: 'SKU-010',
    colorHex: '#E63946'
  },
  {
    id: 'p11',
    name: 'สมุดบันทึกมินิมอล (Minimal Notebook)',
    price: 85,
    stock: 4, // Low stock!
    lowStockThreshold: 5,
    category: 'merchandise',
    sku: 'SKU-011',
    colorHex: '#F4F4F6'
  }
];

// Seed initial monthly income & expenses for owner reporting (current date is Jul 2026 as per metadata)
export const INITIAL_MONTHLY_RECORDS: MonthlyRecord[] = [
  {
    id: 'r1',
    type: 'expense',
    category: 'ค่าเช่าสถานที่',
    amount: 12000,
    date: '2026-07-01',
    note: 'ค่าเช่าร้าน ประจำเดือนกรกฎาคม 2569'
  },
  {
    id: 'r2',
    type: 'expense',
    category: 'ค่าสาธารณูปโภค',
    amount: 4500,
    date: '2026-07-02',
    note: 'ค่าไฟ + ค่าน้ำ + อินเทอร์เน็ต'
  },
  {
    id: 'r3',
    type: 'expense',
    category: 'วัตถุดิบและอุปกรณ์',
    amount: 8500,
    date: '2026-07-03',
    note: 'สั่งนมสด เมล็ดกาแฟ และกล่องเบเกอรี่'
  },
  {
    id: 'r4',
    type: 'income',
    category: 'รายได้อื่นๆ',
    amount: 1500,
    date: '2026-07-04',
    note: 'รายได้จากการจัดเวิร์กช็อปดริปกาแฟเล็กๆ'
  },
  {
    id: 'r5',
    type: 'expense',
    category: 'ค่าจ้างพนักงาน',
    amount: 9000,
    date: '2026-07-05',
    note: 'ค่าจ้างรายปักษ์ของพนักงานพาร์ทไทม์'
  },
  {
    id: 'r6',
    type: 'income',
    category: 'เงินสนับสนุน',
    amount: 5000,
    date: '2026-07-05',
    note: 'เงินทุนหมุนเวียนสนับสนุนเพิ่ม'
  }
];
