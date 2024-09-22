import React from 'react';
import { useEffect, useState } from 'react';
import ItemsCard from './ItemsCard';
import './ItemsCard.css';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore';


export default function ItemsComp() {

  const [loading, setLoading] = useState(true);

  const [allProducts, setAllProducts] = useState([]);

  const { categoryId } = useParams();


  useEffect(() => {
    const db = getFirestore();
  
    if (categoryId) {
      const productsCollection = query(collection(db, 'productos'), where('category', '==', categoryId));
  
      getDocs(productsCollection).then((snapshot) => {
        if (snapshot.size === 0) {
          return <h3>No hay productos</h3>;
        }
        setAllProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setLoading(false); 
      }).catch(() => {
        setLoading(false); 
      });
  
    } else {
      const productsCollection = collection(db, 'productos');
  
      getDocs(productsCollection).then((snapshot) => {
        if (snapshot.size === 0) {
          return <h3>No hay productos</h3>;
        }
        setAllProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setLoading(false);
      }).catch(() => {
        setLoading(false);
      });
    }
  }, [categoryId]);
  
  


  return (
    <>
      <hr />

      {loading ? 
      ( <ReactLoading 
        type="spinningBubbles" 
        color="black" 
        width={80} 
        className='load'/> 
      ) : (
      <div>
      <br />

        <h2 style={{ fontFamily: 'monospace', textTransform: 'uppercase' }}>
          {categoryId ? categoryId 
          : 'TODOS LOS PRODUCTOS'}
        </h2>

      <section className='centrarCards'>
        {allProducts.map((product) => (
          <ItemsCard 
            key={product.id} 
            titulo={product.titulo} 
            precio={product.precio} 
            imagen={product.imagen} 
            id={product.id} 
            category={product.category}
          />
        ))}
      </section> 

      </div>
    )}
    </>
  );
}
