import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CardsEnCarrito.css';
import ItemCount from '../ContadorComp/ItemCount';
import tachoIcon from '../../assets/imgIcons/Icono_Tacho.png';

export default function CardsEnCarrito() {
  const { cart = [], removeItem } = useContext(CartContext);

  return (
    <>
      <ul className='productosContenedor'>
        {cart.map((item, index) => (
          <div className='cardEnCarrito' key={index}>
            <div>
              <img className='imgProducto' src={item.imagen} alt={item.titulo} />
            </div>
            <div>
              <h5>{item.titulo}</h5>
            </div>
            <div className='datosCarrito'>
              <p>Precio Unitario: ${item.precio}</p>
            </div>

            <div>
              <ItemCount
                product={item}
                initialCount={item.quantity} 
                showAddButton={false}        
              />
            </div>

            <div className='cantCart'>
              <p>Cantidad: {item.quantity}</p>
            </div>

            <div>
              <button className='tachoBoton'>
                <img
                  src={tachoIcon}
                  width={32}
                  alt="Borrar Item"
                  className='tacho'
                  onClick={() => removeItem(item.id)}
                /> 
              </button>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}
