import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore';
import { createContext, useState } from 'react';

export const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState('');

  const createNewOrder = (order) => {
    const db = getFirestore();
    const orders = collection(db, 'order');

    addDoc(orders, order).then((snapshot) => {
        setOrder({ id: snapshot.id, ...order });
        const getDoc = doc(db, 'order', snapshot.id);
        updateDoc(getDoc, { orderId: snapshot.id });
    });
};


  const addItem = (item, quantity) => {

    if (isInCart(item.id)) {
      const updatedCart = cart.map(prod => {
        if (prod.id === item.id) {
          const newQuantity = prod.quantity + quantity;

          if (newQuantity > 10 || newQuantity > prod.stock) {
            return prod; 
          } else {
            return { ...prod, quantity: newQuantity };
          }
        }
        return prod;
      });
      setCart(updatedCart);
    } else {

      if (quantity > item.stock || quantity > 10) {
      } else {
        setCart([...cart, { ...item, quantity }]);
      }
    }
  };

  const isInCart = (id) => {
    return cart.some(prod => prod.id === id);
  };


   //Para eliminar solo un producto con el tacho
  const removeItem = (id) => {
    const updatedCart = cart.filter(prod => prod.id !== id);
    setCart(updatedCart);
  };

 
  //Para eliminar TODOS los productos del carrito luego de realizada la compra
  const clearAll = () => {
    setCart([]);
    setOrder(null);
  };

  return (
    <CartContext.Provider value={{ cart, order, setCart, addItem, removeItem, clearAll, isInCart, createNewOrder }}>
      {children}
    </CartContext.Provider>
  );
}
