import React from 'react';
import './NavBar.css'
import BtnComp from '../BtnComp/BtnComp.jsx';
import CartWidget from '../CartWidget/CartWidget.jsx';

export default function NavBar() {
  return (
    <>
      <nav className="barraNavegacion">
        <BtnComp nombre="Agendas" color="#978FC5" />
        <BtnComp nombre="Anotadores" color="#E885B0" />
        <BtnComp nombre="Stickers" color="#70b2c9" />
        <BtnComp nombre="Stationary Box" color="#f0aa00" />
        <CartWidget />
      </nav>
    </>
  );
}
