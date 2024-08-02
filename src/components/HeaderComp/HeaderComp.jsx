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
    </>
  );
}