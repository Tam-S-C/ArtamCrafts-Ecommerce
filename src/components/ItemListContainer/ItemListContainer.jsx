import React from 'react';
import './ItemListContainer.css';
import { getProducts } from '../../asyncMock.js';
import { useEffect, useState } from 'react';
import ItemsCard from './ItemsCard';

export default function ItemsComp() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then((data) => setProducts(data));
  }, []);

  return (
    <>
      <hr/>
      <br/>
      <h2>Todos los Productos</h2>
      <br/>
        <section className="contenedorProds">
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