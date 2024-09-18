import React from 'react';
import './BtnComp.css';

export default function BtnComp({ nombre, color, src, className}) {
  const estiloBotonNav = {
    backgroundColor: color,
  };


  return (
    <>
      <button className={`btn-componente ${className}`} style={estiloBotonNav}>
        {src ? <img src={src} alt={nombre} /> : nombre}
      </button>
    </>
  );
}
