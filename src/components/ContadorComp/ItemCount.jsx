import React, { useContext, useState } from 'react';
import './ItemCount.css';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';

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
    itemAgregado(); 
  };


  const itemAgregado = () => {
    Swal.fire({
      icon: 'success',
      title: '¡Ítem agregado con éxito al carrito!',
      width: 500,
      padding: '1em',
      color: '#716add',
      background: '#fff',
      backdrop: 'rgba(0,0,123,0.3)',
      confirmButtonText: 'Salir'
    });
  };


  return (
    <div>
      <div className="contenedorContador">
        <button className="contador" onClick={handleRestar}>-</button>
        <p className='stock'>{cant}</p>
        <button className="contador" onClick={handleSumar}>+</button>
      </div>
      {showAddButton && (
        <button className="contador" onSubmit={itemAgregado} onClick={agregarAlCarrito}>Agregar ítem al carrito</button>
      )}
    </div>
  );
}
