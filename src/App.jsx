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
import CartView from './components/CheckOut/CartView';
import CheckOut from './components/CheckOut/CheckOut';



function App() {
  return (
    <>
      <BrowserRouter basename="/ArtamCrafts-Ecommerce">

        <div className='contenedorTotal'>
          <HeaderComp />

          <CartProvider>
            <NavBar />

            <Routes>
              <Route exact path="/contact" element={<ContactComp />} />
              <Route exact path="/sesion" element={<SesionComp />} />
              <Route exact path="" element={<ItemListContainer />} />
              <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
              <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route exact path="/:categoryId/:itemId" element={<ItemDetailContainer />} />
              <Route exact path='/cart' element={<CartView />} />
              <Route exact path='/checkOut' element={<CheckOut />} />
            </Routes>

          </CartProvider>

          <FooterBar />
        </div>

      </BrowserRouter>

    </>
  );
}

export default App;