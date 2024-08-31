import React from 'react';
import './BtnComp.css';

export default function BtnComp({ nombre, color, src, }) {
  const estiloBotonNav = {
    backgroundColor: color,
  };

  const handleClick = () => {
    alert(`Estás en la sección de ${nombre}`);
  };

  return (
    <>
      <button className="btn-componente" style={estiloBotonNav} onClick={handleClick}>
        {src ? <img src={src} alt={nombre} /> : nombre}
      </button>
    </>
  );
}
