import React from 'react';
import { getProducts } from '../../asyncMock.js';
import { useEffect, useState } from 'react';
import ItemsCard from './ItemsCard';
import './ItemsCard.css';
import { useParams } from 'react-router-dom';
import { getCategoria } from '../../asyncMock.js';
import { CATEGORIES } from '../NavBar/NavBar.jsx';

export default function ItemsComp() {
  const [products, setProducts] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    if (category) {
      getCategoria(category).then((data) => setProducts(data));
    }
    getProducts.then((data) => setProducts(data));
  }, [category]);

  return (
    <>
      <hr />
      <h2>{CATEGORIES[category]?.nombre}</h2>
      <section className='centrarCards'>
        {products.map((item) => (
          <ItemsCard 
            key={item.id} 
            titulo={item.titulo} 
            precio={item.precio} 
            imagen={item.imagen} 
            id={item.id} 
            category={item.category}
          />
        ))}
      </section>
    </>
  );
}
