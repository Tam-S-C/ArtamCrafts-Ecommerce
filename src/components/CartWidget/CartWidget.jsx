import React from 'react';
import cart from '/cart3.svg';
import './CartWidget.css';

export default function CartWidget() {
  return (
    <>
      <img src={cart} className='cartEstilo'/>
      <p style={{fontWeight:"bold", fontFamily:"monospace", fontSize:20}}>0</p>
    </>
  );
}