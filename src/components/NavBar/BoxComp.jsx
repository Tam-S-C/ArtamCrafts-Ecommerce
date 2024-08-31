import React, { useEffect, useState } from 'react';
import { getCategoria } from '../../asyncMock.js';
import ItemsCard from '../ItemListContainer/ItemsCard.jsx';

export default function BoxComp() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCategoria('boxes').then((data) => setProducts(data));
  }, []);

  return (
    <>
      <hr/>
      <h2>Stationary Boxes</h2>
      <section className="contenedorProds">
        {products.map((item) => (
          <ItemsCard
            key={item.id}
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
