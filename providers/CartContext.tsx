"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export type CartItem = {
  id: number;
  name: string;
  desc: string;
  quantity: number;
  price: number;
  image: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  increaseItemQuantity: (itemId: number) => void;
  decreaseItemQuantity: (itemId: number) => void;
  itemExistInCart: (itemId: number) => boolean;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const itemExistInCart = (itemId: number): boolean => {
    return cart.some((item) => item.id === itemId);
  };

  const addToCart = (item: CartItem) => {
    if (itemExistInCart(item.id)) {
      return;
    }
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseItemQuantity = (itemId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseItemQuantity = (itemId: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === itemId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return updatedCart.filter((item) => item.quantity > 0);
    });
  };
  const cartContextValue: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    itemExistInCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
