import React from 'react';
import './NavBar.css'
import BtnComp from '../BtnComp/BtnComp.jsx';

export default function NavBar() {
  return (
    <>
      <header>
        <BtnComp src="/Logo.png" nombre="Inicio" color="#4ed9b9"/>
        <input></input>
        <p>🔍</p>
        <p>🛒1</p>

      </header>

      <nav className="barraNavegacion">
        <BtnComp nombre="Agendas" color="#978FC5" />
        <BtnComp nombre="Anotadores" color="#E885B0" />
        <BtnComp nombre="Stickers" color="#70b2c9" />
      </nav>
    </>
  );
}
