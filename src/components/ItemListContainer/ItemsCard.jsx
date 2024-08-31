import './ItemsCard.css';
import { Link } from 'react-router-dom';

export default function ItemsCard({ titulo, precio, imagen, id }) {
  return (
    <>
        <div className='contCards'>
          <article className='card'>
            <h5>{titulo}</h5>
            <img src={imagen} alt={titulo} width={200}/>
            <br/>
            <h6>Precio: ${precio}</h6>
            <button className='btnDetalles'>
              <Link to={`/item/${id}`}>Ver detalles</Link>
            </button>
          </article>
        </div>
    </>
  );
}