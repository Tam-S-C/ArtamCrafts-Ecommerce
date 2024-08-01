import React from 'react';
import './NavBar.css'
import BtnComp from '../BtnComp/BtnComp.jsx';

export default function NavBar() {
  return (
    <>
      <nav className="barraNavegacion">
        <BtnComp src="/Logo.png" nombre="Inicio" color="#4ed9b9"/>
        <BtnComp nombre="Sobre Mí" color="#978FC5" />
        <BtnComp nombre="Productos" color="#E885B0" />
        <BtnComp nombre="Contacto" color="#70b2c9" />
      </nav>
    </>
  );
}
