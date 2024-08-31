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
          {products.map((prod) => (
            <ItemsCard
              titulo={prod.titulo}
              precio={prod.precio}
              imagen={prod.imagen}
              id={prod.id}
            />
          ))}
        </section>
    </>
  );
}
