import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CardsEnCarrito.css';
import ItemCount from '../ContadorComp/ItemCount';
import tachoIcon from '../../assets/imgIcons/Icono_Tacho.png';

export default function CardsEnCarrito() {
  const {cart = [], setCart, addItem, removeItem, clearAll, isInCart, createNewOrder} = useContext(CartContext);

  return (
    <>
        <ul className='productosContenedor'>

        {cart.map((item, index) => (

          <div className='cardEnCarrito' key={index}>

            <div>
            <img className='imgProducto' src={item.imagen} alt={item.titulo} />
            </div>

            <div>
              <h4>{item.titulo}</h4>
              <p>Descripción: {item.descripcion}</p>
            </div>
            
            <div className='datosCarrito'>
              <p>Precio Unitario: ${item.precio}</p>
            </div>
           
            <div>
                <ItemCount className='contadorCarrito'/>
            </div>

            <div className='cantCart'>
            <p>Cantidad: {item.quantity}</p>
            </div>

            <div>
            <img src={tachoIcon} width={32} alt="Borrar Item" className='tacho'/>
            </div>

          </div>

        ))}
      </ul>
  
    </>
  );
}
