import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import ItemCount from "../ContadorComp/ItemCount.jsx";
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext.jsx';

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null); 
  const [error, setError] = useState(null); 
  const { itemId } = useParams();
  const { cart, addItem } = useContext(CartContext);

  const onAdd = (cantidad) => {
    const productoConCantidad = { ...product, cantidad };
    addItem(productoConCantidad); 
  }

  useEffect(() => {
    const db = getFirestore();
    const getProduct = doc(db, 'productos', itemId);

    getDoc(getProduct)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        } else {
          setError("El producto no existe.");
        }
      })
      .catch((error) => {
        setError("Error obteniendo el producto: " + error.message); 
      });
  }, [itemId]); 

  if (error) {
    return <p>{error}</p>; 
  }

  if (!product) {
    return <p>Cargando producto...</p>;
  }

  return (
    <>
      <hr/>
      <div className='contenedorCards'>
        <article className="card">
          <h5>{product.titulo}</h5>
          <img src={product.imagen} alt={product.titulo} width={220} className='zoom' />
          <br/>
          <h6>Precio: ${product.precio}</h6>
          <p>{product.descripcion}</p>
          <ItemCount product={product} precio={product.precio} Stock={product.stock} agregarAlCarrito={onAdd} />
          <br/>
        </article>
      </div>
    </>
  );
}
