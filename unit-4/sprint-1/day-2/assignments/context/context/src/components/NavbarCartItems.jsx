import React,{useContext} from 'react'
import {Cartcontext} from "../context/CartProvider"
export const NavbarCartItems = () => {
    const {value}=useContext(Cartcontext);
  return (
  <div className='border'>NavbarCartItems:{value}

  </div>
  )
}
