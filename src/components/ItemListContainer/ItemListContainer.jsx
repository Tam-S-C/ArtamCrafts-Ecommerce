import React from 'react';
import { getProducts } from '../../asyncMock.js';
import { useEffect, useState } from 'react';
import ItemsCard from './ItemsCard';
import './ItemsCard.css';

export default function ItemsComp() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then((data) => setProducts(data));
  }, []);

  return (
    <>
      <hr/>
      <h2>Todos los Productos</h2>
        <section>
          {products.map((item) => (
            <ItemsCard
              titulo={item.titulo}
              precio={item.precio}
              imagen={item.imagen}
              id={item.id}
            />
          ))}
        </section>
    </>
  );
}