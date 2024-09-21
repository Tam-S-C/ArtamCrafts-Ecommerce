import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore';
import { createContext, useState } from 'react';


export const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);


  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const updatedCart = cart.map(prod =>
        prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };
  


  const isInCart = (id) => {
    return cart.some(prod => prod.id === id);
  };


  const removeItem = (id) => {
    const updatedCart = cart.filter(prod => prod.id !== id);
    setCart(updatedCart);
  };


  const clearAll = () => {
    setCart([]);
  };

  const [orderId, setOrderId] = useState('');


  const createNewOrder = (order) => {
    const db = getFirestore();
    const orders = collection(db, 'order');

    addDoc(orders, order).then((snapshot) => {
      setOrderId(snapshot.id);

      const getDocRef = doc(db, 'order', snapshot.id);
      updateDoc(getDocRef, { orderId: snapshot.id });

      alert(snapshot.id);
    });
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addItem, removeItem, clearAll, isInCart, createNewOrder }}>
      {children}
    </CartContext.Provider>
  );
}
