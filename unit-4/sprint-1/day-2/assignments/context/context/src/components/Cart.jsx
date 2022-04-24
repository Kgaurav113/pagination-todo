import React from 'react'
import { useContext } from 'react/cjs/react.production.min'
 const Cart = () => {
     const {addItemToCart}=useContext(CartContext);
 
  return (
    <div className='boarder'>
        Cart<button onClick={addItemToCart}>Add to Cart</button>
    </div>
  );
};
export default Cart;
