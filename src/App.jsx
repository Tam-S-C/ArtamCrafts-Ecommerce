import './App.css';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainerComp';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <>
    <div className='contenedorTotal'>
      <NavBar />
      <ItemListContainer />
      <Footer />
    </div>
    </>
  );
}


export default App;

