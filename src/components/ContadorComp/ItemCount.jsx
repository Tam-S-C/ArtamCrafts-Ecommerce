import React, { useContext, useState } from 'react';
import './ItemCount.css';
import { CartContext } from '../../context/CartContext';

export default function ItemCount({ product }) {

  const { addItem } = useContext(CartContext);
  const [stock, setStock] = useState(1);

  const handleSumar = () => {
    stock < 10 && setStock(stock + 1);
  };

  const handleRestar = () => {
    stock > 1 && setStock(stock - 1);
  };

  const handleAgregarAlCarrito = () => {
    addItem(product, stock); 
  };

  return (
    <div>
      <div className="contenedorContador">
        <button className="contador" onClick={handleRestar}>-</button>
        <p className='stock'>{stock}</p>
        <button className="contador" onClick={handleSumar}>+</button>
      </div>
      <button className="contador" onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
      <br/>
    </div>
  );
}
