import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import UserInfo from './UserInfo';

export default function CartView() {
  const {cart = [], setCart, addItem, removeItem, clearAll, isInCart, createNewOrder} = useContext(CartContext);

  return (
    <>
      <hr/>
      <br />
      <h2 style={{ fontFamily: 'monospace' }}>CARRITO 🛒</h2>
      {cart.length === 0 ? (
        <p>Tu carrito se encuentra vacío.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <div key={index}>
              <img src={item.imagen} alt={item.titulo} style={{ width: '5%'}} />
              <h4>{item.titulo}</h4>
              <p>Descripción: {item.descripcion}</p>
              <p>Precio: ${item.precio}</p>
              <p>Cantidad: {item.cantidad}</p>
            </div>
          ))}
        </ul>
      )}
      <UserInfo carrito={cart} createNewOrder={createNewOrder}/>
    </>
  );
}
