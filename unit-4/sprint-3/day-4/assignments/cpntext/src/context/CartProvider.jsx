import React from "react";
import { useState } from "react";
import { createContext } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [value, setvalue] = useState(0);
  const addItemToCart = () => {
    setvalue(value + 1);
  };

  return (
    <CartContext.Provider value={{ value, setvalue, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};
