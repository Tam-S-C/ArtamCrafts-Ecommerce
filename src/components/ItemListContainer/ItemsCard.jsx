import './ItemsCard.css';
import { Link } from 'react-router-dom';

export default function ItemsCard({ titulo, precio, imagen, id }) {
  return (
    <>
      <article className="carta">
        <h5>{titulo}</h5>
        <img src={imagen} alt={titulo} width={200}/>
        <h6>${precio}</h6>
        <button className='btnDetalles'>
          <Link to={`/ItemDetailContainer/${id}`}>Ver detalles</Link>
        </button>
      </article>
    </>
  );
}
