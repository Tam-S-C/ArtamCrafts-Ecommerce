import React from 'react';
import BtnComp from '../BtnComp/BtnComp.jsx';
import logo from '/Logo.png';
import './HeaderComp.css';
import person from '/person-circle.svg';
import { Link } from 'react-router-dom';


export default function HeaderComp() {
  return (
    <>
      <header>

        <Link to={'/'}>
          <BtnComp src={logo} nombre="Home" color="#4ed9b9" />
        </Link>

        <input className='inputEstilo' placeholder=' Escribe tu búsqueda...🔍'></input>

        <Link to={'/contact'}>
          <BtnComp nombre="Contacto" color="#4ed9b9" />
        </Link>

        <Link to={'/sesion'}>
          <BtnComp nombre="Iniciar Sesión" color="#4ed9b9" src={person} />
        </Link>
      </header>
    </>
  );
}
