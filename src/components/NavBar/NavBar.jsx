import './NavBar.css';
import BtnComp from '../BtnComp/BtnComp.jsx';

export default function NavBar() {
  return (
    <>
      <nav className="barra">
        <BtnComp nombre="Sobre Mí" color="#147470" />
        <BtnComp nombre="Productos" color="#147485" />
        <BtnComp nombre="Contacto" color="#147595" />
      </nav>
    </>
  );
}
