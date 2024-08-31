import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock.js';
import './ItemDetailContainer.css';

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    setProduct(getProduct(itemId));
  }, []);

  return (
    <>
    <div className='contenedorCards'>
      <article className="card">
        <h5>
          {product.id} - {product.titulo}
        </h5>
        <img src={product.imagen} alt={product.titulo} width={220} className='zoom' />
        <br/>
        <h6>Precio: ${product.precio}</h6>
        <p>{product.descripcion}</p>
        <p>Categoría: {product.categoria}</p>
      </article>
    </div>
    </>
  );
}
