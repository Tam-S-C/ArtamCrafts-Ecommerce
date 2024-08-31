import React from 'react'
import './ItemCount.css';
import { useState } from "react";

export default function ItemCount() {

    const [stock, setStock] = useState(1);

    const handleSumar = () => {
        stock < 10 && setStock(stock + 1);
    }

    const handleRestar = () => {
        stock > 1 && setStock(stock - 1);
    }

    const handleAgregar = () => {
        
    }


  return (
    <div>
            <div className="contenedorContador">
                <button className="contador" onClick={handleRestar}>-</button>
                <p className='stock'>{stock}</p>
                <button className="contador" onClick={handleSumar}>+</button>
            </div>
            <button className="contador" onClick={handleAgregar}>Agregar al carrito</button>
            <br/>

    </div>
  )
}
