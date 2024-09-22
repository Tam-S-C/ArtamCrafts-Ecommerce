import React from 'react';
import './NavBar.css';
import BtnComp from '../BtnComp/BtnComp.jsx';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { Link } from 'react-router-dom';


export default function NavBar() {


  return (
    <>
      <nav className='barraNavegacion'>
        <Link to={'/category/agendas'}>
          <BtnComp nombre='Agendas' color='#978FC5' />
        </Link>

        <Link to={'/category/stickers'}>
          <BtnComp nombre='Stickers' color='#70b2c9' />
        </Link>

        <Link to={'/category/boxes'}>
          <BtnComp nombre='Stationary Box' color='#E885B0' />
        </Link>

        <CartWidget />
      </nav>
    </>
  );
}
