import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock.js';
import './ItemDetailContainer.css';
import ItemCount from "../ContadorComp/ItemCount.jsx";


export default function ItemDetailContainer() {

  const [product, setProduct] = useState(null); 
  const { itemId } = useParams();

  useEffect(() => {
    getProduct(itemId).then((data) => {
      setProduct(data);
    });
  }, [itemId]); 

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
          <ItemCount product={product} />
        </article>
      </div>
    </>
  );
}
