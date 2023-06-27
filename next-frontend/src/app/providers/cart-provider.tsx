"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

import { ICart } from "../types";

import { cart as localCart } from "../utils";

interface ICartContext {
  cart: ICart[] | null;
  loading: boolean;
  updateCart: (productData: ICart) => void;
  getCart: () => void;
  incrementItem: (_id: string, sized: string) => void;
  decrementItem: (_id: string, sized: string) => void;
  removeItem: (_id: string, sized: string) => void;
}

const initialValue = {
  cart: null,
  loading: true,
  updateCart: (productData: ICart) => {},
  getCart: () => {},
  incrementItem: (_id: string, sized: string) => {},
  decrementItem: (_id: string, sized: string) => {},
  removeItem: (_id: string, sized: string) => {},
};

export const CartContext = createContext<ICartContext>(initialValue);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ICart[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setCart(localCart.getCart().reverse());
    setLoading(false);
  }, []);

  const updateCart = (productData: ICart) => {
    localCart.updateCart(productData);
    setCart(localCart.getCart().reverse());
  };

  const incrementItem = (_id: string, sized: string) => {
    localCart.incrementQuantity(_id, sized);
    setCart(localCart.getCart().reverse());
  };

  const decrementItem = (_id: string, sized: string) => {
    localCart.decrementQuantity(_id, sized);
    setCart(localCart.getCart().reverse());
  };

  const removeItem = (_id: string, sized: string) => {
    localCart.removeFromCart(_id, sized);
    setCart(localCart.getCart().reverse());
  };

  const getCart = () => {
    localCart.getCart();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        updateCart,
        getCart,
        incrementItem,
        decrementItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
