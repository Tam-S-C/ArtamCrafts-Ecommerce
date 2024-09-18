import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import UserInfo from './UserInfo';

export default function CartView() {
  const {cart,createNewOrder} = useContext(CartContext);

  return (
    <>
      <hr/>
      <h3>Carrito</h3>
      {cart.length === 0 ? (
        <p>Tu carrito se encuentra vacío 🛒</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <div key={index}>
              <img src={item.imagen} alt={item.titulo} style={{ width: '5%'}} />
              <h4>{item.titulo}</h4>
              <p>Descripción: {item.descripcion}</p>
              <p>Precio: ${item.pricio}</p>
              <p>Cantidad: {item.cantidad}</p>
            </div>
          ))}
        </ul>
      )}
      <UserInfo carrito={cart} createNewOrder={createNewOrder}/>
    </>
  );
}
