import React from 'react';

export default function BtnComp({ nombre, color, src }) {
  const misEstilos = {
    backgroundColor: color,
  };

  const handleClick = () => {
    alert(`Estás en la sección de ${nombre}`);
  };

  return (
    <button className="btn-comp" style={misEstilos} onClick={handleClick}>
      {src ? <img src={src} alt={nombre} width={36} className="btn-image" /> : nombre}
    </button>
  );
}
