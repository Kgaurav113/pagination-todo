import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartProvider';
 const Cart = () => {
    const {addItemToCart} =useContext(CartContext);

  return (
    <div className='boarder'>
        Cart
        <button onClick={addItemToCart}>Add to cart</button>
    </div>
  )
}
export default Cart;