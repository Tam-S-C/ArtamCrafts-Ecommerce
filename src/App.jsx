import './App.css';
import FooterBar from './components/FooterBar/FooterBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <>
      <div className='contenedorTotal'>
        <NavBar />
        <ItemListContainer greeting='Bienvenidos a ArTamCrafts 
        - Web en construcción, disculpe las moslestias.'/>
        <FooterBar />
      </div>
    </>
  );
}


export default App;

