import React, { useContext } from 'react';
import cart3 from '/cart3.svg';
import './CartWidget.css';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartWidget() {
  const { cart } = useContext(CartContext);

  const cartLength = cart ? cart.length : 0;

  return (
    <Link to={'/cart'}>
      <img src={cart3} className='cartEstilo' alt="Cart" />
      {cartLength > 0 && <span className='cartNumerito'>{cartLength}</span>}
    </Link>
  );
}
