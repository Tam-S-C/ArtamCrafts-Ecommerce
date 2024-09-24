import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import UserInfo from './UserInfo';
import CardsEnCarrito from './CardsEnCarrito';
import { Link } from 'react-router-dom';
import './CartView.css';

export default function CartView() {
  const { cart = [], createNewOrder, clearAll } = useContext(CartContext);

  return (
    <>
      <hr />
      <br />
      <h2 style={{ fontFamily: 'monospace' }}>CARRITO 🛒</h2>
      <br />
      {cart.length === 0 ? (
        <>
          <p>Tu carrito se encuentra vacío.</p>
          <br />
          <Link to={'/'} className='volver'>Seguir Comprando</Link>
          <br />
        </>
      ) : (
        <>
          <CardsEnCarrito />
          <br />
          <h3 style={{ fontFamily: 'monospace' }}>
            PRECIO FINAL: ${cart.reduce((total, item) => total + item.precio * item.quantity, 0)}
          </h3>
          <br />
          <button onClick={clearAll} className='vaciarCarrito'>
            Vaciar carrito
          </button>
          <br />
          <UserInfo carrito={cart} createNewOrder={createNewOrder} />
          <br />

        </>
      )}
    </>
  );
}
