import React,{useState} from 'react'
/*import {CartContext} from '../Context/CartContext'*/
import { useContext } from 'react';
import { CartContext } from '../Context.js/CartContext';

  

function Cart() {
  const[cart, setCart]=useState(false)
  const { cartItems, removeFromCart } = useContext(CartContext);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  
  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };
  /*const context = useContext(CartContext)*/
  return (
    
    <div className='cart'>
      
        {cartItems.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
        </div>
      ))}
      
      Cart
      
      </div>
      

  )
}

export default Cart;