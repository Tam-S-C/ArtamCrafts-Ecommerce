import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore';
import { createContext, useState } from 'react';


export const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState(null);


  const createNewOrder = (order) => {
    setOrder(order); 
};


/*   const createNewOrder = (order) => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'order');

    addDoc(ordersCollection, order).then((snapshot) => {
        setOrder({ ...order, orderId: snapshot.id }); 
    });
}; */

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


  const clear = () => {
    setCart([]);
  };

  const clearAll = () => {
    setCart([]);
    setOrder(null);
};


 /*  const createNewOrder = (order) => {
    const db = getFirestore();
    const orders = collection(db, 'order');

    addDoc(orders, order).then((snapshot) => {
      setOrderId(snapshot.id);

      const getDocRef = doc(db, 'order', snapshot.id);
      updateDoc(getDocRef, { orderId: snapshot.id });

      alert(snapshot.id, createNewOrder);
    });
  }; */

  return (
    <CartContext.Provider value={{ cart, order, setCart, addItem, removeItem, clear, clearAll, isInCart, createNewOrder }}>
      {children}
    </CartContext.Provider>
  );
}
