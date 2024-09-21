import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import UserInfo from './UserInfo';
import CardsEnCarrito from './CardsEnCarrito';

export default function CartView() {
  const {cart = [], setCart, addItem, removeItem, clearAll, isInCart, createNewOrder} = useContext(CartContext);

  return (
    <>
      <hr/>
      <br />
      <h2 style={{ fontFamily: 'monospace' }}>CARRITO 🛒</h2>
      <br />
      {cart.length === 0 ? (
        <p>Tu carrito se encuentra vacío.</p>
      ) : (

      <CardsEnCarrito />
      
      )}
      <br />
      <h3 style={{ fontFamily: 'monospace' }}>PRECIO FINAL: $ </h3>
      <br />
      <UserInfo carrito={cart} createNewOrder={createNewOrder}/>
    </>
  );
}
