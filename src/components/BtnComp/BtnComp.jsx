import React from 'react';
import './BtnComp.css';

export default function BtnComp({ nombre, color, src }) {
  const estiloBotonNav = {
    backgroundColor: color,
  };

  const handleClick = () => {
    alert(`Estás en la sección de ${nombre}`);
  };

  return (
    <>
    <button className="btn-comp" style={estiloBotonNav} onClick={handleClick}>
      {src ? <img src={src} alt={nombre} width={36} className="btn-image" /> : nombre}
    </button>
    </>
  );
}
