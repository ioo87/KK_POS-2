export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  lowStockThreshold: number;
  category: string;
  sku: string;
  colorHex?: string; // fallback color if no image
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Transaction {
  id: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
  cashReceived: number;
  change: number;
  timestamp: string; // ISO string
  sellerRole: 'owner' | 'employee';
}

export interface MonthlyRecord {
  id: string;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  date: string; // YYYY-MM-DD
  note: string;
}

export type Role = 'owner' | 'employee';

export interface Category {
  id: string;
  name: string;
  icon: string;
}
