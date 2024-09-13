import React from 'react';
import cart3 from '/cart3.svg';
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom"

export default function CartWidget() {

  const {cart} = useContext(CartContext);

  const cartLength = cart ? cart.length : 0

  return (
    <>
      <Link to={'/cart'}> 
      <img src={cart3} className='cartEstilo'/>
      <span className='cartNumerito'>{cartLength}</span>
      </Link>
    </>
  );
}
