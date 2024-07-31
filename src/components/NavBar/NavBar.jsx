import React from 'react';
import './NavBar.css';
import BtnComp from '../BtnComp/BtnComp.jsx';

export default function NavBar() {
  return (
    <nav className="barra">
      <BtnComp src="/Logo.png" nombre="Inicio" color="#147470" />
      <BtnComp nombre="Sobre Mí" color="#147485" />
      <BtnComp nombre="Productos" color="#147495" />
      <BtnComp nombre="Contacto" color="#148099" />
    </nav>
  );
}
