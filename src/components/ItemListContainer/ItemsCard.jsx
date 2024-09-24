import './ItemsCard.css';
import { Link } from 'react-router-dom';
import likeOFF from '../../assets/imgLike/likeOFF.png';
import likeON from '../../assets/imgLike/likeON.png';
import { useState } from 'react';

export default function ItemsCard({ titulo, precio, imagen, id, category }) {


  const localStorageKey = `like-${id}`;

  const [isLiked, setIsLiked] = useState(() => {
    const savedLike = localStorage.getItem(localStorageKey);
    return savedLike === 'true';
  });

  const likeBtn = () => {
    const newLikeState = !isLiked;
    setIsLiked(newLikeState);

    localStorage.setItem(localStorageKey, newLikeState);
  };


  return (
    <>
      <div className='contCards'>
        <article className='card'>
          <h6>{titulo}</h6>
          <img src={imagen} alt={titulo} width={200} />
          <br />

          <section className="likeYprecio">
            <h6>Precio: ${precio}</h6>

            <button onClick={likeBtn}>
              <img
                src={isLiked ? likeON : likeOFF}
                alt="like"
                width={24}
                className='like'
              />
            </button>

          </section>

          <button className='btnDetalles'>
            <Link to={`/${category}/${id}`}>Ver detalles</Link>
          </button>
        </article>
      </div>
    </>
  );
}