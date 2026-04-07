import { ReactNode, useState } from "react";
import { CartContext, CartItem, CartContextType, Product } from "./CartContext";

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [
        ...prev,
        { id: item.id, name: item.name, price: item.price, quantity: 1, image: item.img },
      ];
    });
  };

  const increaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const removeMultiple = (ids: number[]) => {
    setCart((prev) => prev.filter((item) => !ids.includes(item.id)));
  };

  const clearCart = () => setCart([]);

  const value: CartContextType = {
    cart,
    addToCart,
    increaseQty,
    decreaseQty,
    removeItem,
    removeMultiple,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};