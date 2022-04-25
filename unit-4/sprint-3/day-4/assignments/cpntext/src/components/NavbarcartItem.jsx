import React  from 'react';
import { useContext } from 'react';
import  CartContext  from '../context/CartProvider';
 const NavbarcartItem = () => {
    const {value}= useContext{CartContext};
  return (
    <div className='boarder'>NavbarcartItem:{value}</div>
  );
};
export default NavbarcartItem;