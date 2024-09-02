import React from 'react';
import './NavBar.css';
import BtnComp from '../BtnComp/BtnComp.jsx';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { Link } from 'react-router-dom';

export const CATEGORIES = {
  agendas: { id: 'agendas', url: '/agendas', nombre: 'Agendas' },
  stickers: { id: 'stickers', url: '/stickers', nombre: 'Stickers' },
  boxes: { id: 'boxes', url: '/boxes', nombre: 'Stationary Box' },
};

export default function NavBar() {
  return (
    <>
      <nav className='barraNavegacion'>
        <Link to={CATEGORIES['agendas'].url}>
          <BtnComp nombre='Agendas' color='#978FC5' />
        </Link>

        <Link to={CATEGORIES['stickers'].url}>
          <BtnComp nombre='Stickers' color='#70b2c9' />
        </Link>

        <Link to={CATEGORIES['boxes'].url}>
          <BtnComp nombre='Stationary Box' color='#E885B0' />
        </Link>

        <CartWidget />
      </nav>
    </>
  );
}
