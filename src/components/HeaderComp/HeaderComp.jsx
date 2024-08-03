import React from 'react';
import BtnComp from '../BtnComp/BtnComp.jsx';
import logo from '/Logo.png';
import './HeaderComp.css';
import person from '/person-circle.svg';

export default function HeaderComp() {
  return (
    <>
      <header>
        <BtnComp src={logo} nombre="Inicio" color="#4ed9b9"/>
        <input className='inputEstilo' type="text" placeholder=' Escribe tu búsqueda...🔍'></input>
        <BtnComp nombre="Ayuda" color="#4ed9b9" />
        <BtnComp nombre="Iniciar Sesión" color="#4ed9b9" src={person} />
      </header>
    </>
  );
}
