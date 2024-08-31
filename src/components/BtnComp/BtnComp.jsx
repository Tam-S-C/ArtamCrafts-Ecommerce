import React from 'react';
import './BtnComp.css';

export default function BtnComp({ nombre, color, src, }) {
  const estiloBotonNav = {
    backgroundColor: color,
  };


  return (
    <>
      <button className="btn-componente" style={estiloBotonNav}>
        {src ? <img src={src} alt={nombre} /> : nombre}
      </button>
    </>
  );
}
