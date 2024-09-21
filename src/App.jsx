import './App.css';
import FooterBar from './components/FooterBar/FooterBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import HeaderComp from './components/HeaderComp/HeaderComp';
import ContactComp from './components/HeaderComp/ContactComp';
import SesionComp from './components/HeaderComp/SesionComp';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartView from './components/CarritoComp/CartView';




function App() {
  return (
    <>
      <BrowserRouter basename="/ArtamCrafts-Ecommerce">
        
        <div className='contenedorTotal'>
          <HeaderComp />
          
          <CartProvider>
            <NavBar />

          <Routes>
            <Route exact path="/contact" element={<ContactComp />}/>
            <Route exact path="/sesion" element={<SesionComp />}/>
            <Route exact path="" element={<ItemListContainer />}/>
            <Route exact path="/:category" element={<ItemListContainer />}/>
            <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route exact path="/:category/:itemId" element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<CartView />} />
           </Routes>

          </CartProvider>

         <FooterBar />
        </div>

      </BrowserRouter>
    
    </>
  );
}

export default App;