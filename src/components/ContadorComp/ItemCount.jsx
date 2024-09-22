import React, { useContext, useState } from 'react';
import './ItemCount.css';
import { CartContext } from '../../context/CartContext';

export default function ItemCount({ product, initialCount = 1, showAddButton = true }) {
  const { addItem } = useContext(CartContext);
  const [cant, setCant] = useState(initialCount);

  const handleSumar = () => {
    if (cant < 10 && cant < product.stock) {
      setCant(cant + 1);
      addItem(product, 1); 
    }
  };

  const handleRestar = () => {
    if (cant > 1) {
      setCant(cant - 1);
      addItem(product, -1); 
    }
  };

  const agregarAlCarrito = () => {
    addItem(product, cant); 
  };

  return (
    <div>
      <div className="contenedorContador">
        <button className="contador" onClick={handleRestar}>-</button>
        <p className='stock'>{cant}</p>
        <button className="contador" onClick={handleSumar}>+</button>
      </div>
      {showAddButton && (
        <button className="contador" onClick={agregarAlCarrito}>Agregar ítem al carrito</button>
      )}
    </div>
  );
}
