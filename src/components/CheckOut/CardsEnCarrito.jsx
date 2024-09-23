import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CardsEnCarrito.css';
import ItemCount from '../ContadorComp/ItemCount';
import tachoIcon from '../../assets/imgIcons/Icono_Tacho.png';

export default function CardsEnCarrito() {
  const { cart = [], removeItem, addItem } = useContext(CartContext);

  // Función para actualizar la cantidad en el carrito
  const handleQuantityChange = (item, newQuantity) => {
    addItem(item, newQuantity - item.quantity); // Agregamos la diferencia de cantidad
  };

  return (
    <>
      <ul className='productosContenedor'>
        {cart.map((item, index) => (
          <div className='cardEnCarrito' key={index}>
            <div>
              <img className='imgProducto' src={item.imagen} alt={item.titulo} />
            </div>
            <div className='tituloProd'>
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
                onQuantityChange={(newQuantity) => handleQuantityChange(item, newQuantity)} // Pasamos la función aquí
              />
            </div>

            <div className='cantCart'>
              <p>Cantidad: {item.quantity}</p>
              <p>Subtotal: ${item.precio * item.quantity}</p>
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
