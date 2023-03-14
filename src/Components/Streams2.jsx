import React,{useState} from 'react'
import {BiCart} from 'react-icons/bi'
import { useContext } from 'react';
import { CartContext } from '../Context.js/CartContext';
import Games from '../Components/vidi.json'


function Streams2({product}) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id) => {
    const game = Games.find((game) => game.id === id);
    setCartItems([...cartItems, game]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
  <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
    <div className='streams2'>
      <h2 style={{color:'#ffff', marginTop:'8px'}}><BiCart onClick={addToCart}/></h2>
    </div>
  </CartContext.Provider>
  )
}

export default Streams2