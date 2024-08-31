import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock.js';

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setProduct(getProduct(id));
  }, [id]);

  return (
    <>
      <article style={{ border: '1px solid pink', padding: 15 }}>
        <h4>
          {product.id} - {product.titulo}
        </h4>
        <img src={product.imagen} alt={product.titulo} />
        <p>${product.precio}</p>
        <p>{product.descripcion}</p>
        <p>{product.categoria}</p>
      </article>
    </>
  );
}
