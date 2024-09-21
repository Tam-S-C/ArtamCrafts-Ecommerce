import React from 'react';
import { getProducts } from '../../asyncMock.js';
import { useEffect, useState } from 'react';
import ItemsCard from './ItemsCard';
import './ItemsCard.css';
import { useParams } from 'react-router-dom';
import { getCategoria } from '../../asyncMock.js';
import { CATEGORIES } from '../NavBar/NavBar.jsx';


export default function ItemsComp() {
  const [productos, setProductos] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    if (category) {
      getCategoria(category).then((data) => {
        setProductos(data);
      });
    } else {
      getProducts().then((data) => {
        setProductos(data);
      });
    }
  }, [category]);
  
  

  return (
    <>
      <hr />
      <br />
        <h2 style={{ fontFamily: 'monospace' }}>
          {category ? CATEGORIES[category]?.nombre.toUpperCase() : 'TODOS LOS PRODUCTOS'}
        </h2>
      <section className='centrarCards'>
        {productos.map((item) => (
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
