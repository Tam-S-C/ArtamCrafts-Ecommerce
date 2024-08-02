import React from 'react';
import BtnComp from '../BtnComp/BtnComp.jsx';
import logo from '/Logo.png';
import './HeaderComp.css';

export default function HeaderComp() {
  return (
    <>
      <header>
        <BtnComp src={logo} nombre="Inicio" color="#4ed9b9"/>
        <input placeholder=' Escribe tu búsqueda... 🔍'></input>
        <p>🛒1</p>
      </header>
    </>
  );
}
