import React from 'react'
import { useState } from 'react/cjs/react.production.min';
import { createContext } from 'react/cjs/react.production.min'
const cartcontext=createContext();
export const cartconsumer =cartcontext.consumer;
export const CartProvider = ({children}) => {
    const[value,setvalue]=useState(0);
  return (
    <cartcontext.Provider value={{value,setvalue}}>{children}</cartcontext.Provider>
  )
}
