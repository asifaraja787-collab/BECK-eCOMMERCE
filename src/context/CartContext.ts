import { createContext } from "react";

// ✅ Product type for UI
export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

// ✅ Cart item type
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

// ✅ Context type
export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Product) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  removeItem: (id: number) => void;
  removeMultiple: (ids: number[]) => void;
  clearCart: () => void;
}

// ✅ Create context
export const CartContext = createContext<CartContextType | undefined>(undefined);