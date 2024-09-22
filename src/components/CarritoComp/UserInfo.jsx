import { useState, useContext } from 'react';
import './UserInfo.css';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const UserInfo = ({ carrito, createNewOrder }) => {
    const [nombre, setNombre] = useState('');
    const [dni, setDni] = useState('');
    const [email, setEmail] = useState('');
    const [direccion, setDireccion] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [cp, setCP] = useState('');
    const [error, setError] = useState('');

    const { clearAll } = useContext(CartContext);
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!nombre || !dni || !email || !direccion || !localidad || !cp) {
            setError('Todos los campos son obligatorios.');
            return;
        }

        if  (!/\S+@\S+\.\S+/.test(email)) {
            setError('El formato del email es incorrecto');
            return;
        }
      
        if ([nombre, direccion, localidad, cp].some(field => field.length < 3) || 
            dni.length < 7 || isNaN(dni) ) {
            setError('Todos los campos deben tener al menos 3 caracteres. El DNI debe ser sólo números y tener al menos 7 dígitos.');
            return;
        }
    
        const order = {
            buyer: {
                nombre,
                dni,
                email,
                direccion,
                localidad,
                cp,
            },
            items: carrito,
            total: carrito.reduce((total, item) => total + item.precio * item.quantity, 0),
            creadoEn: new Date()
        };
    
        createNewOrder(order);
        clearAll();
        navigate('/checkOutBrief');
    };

    return (
        <div className='containerCarrito'>
            <h5>Completa los siguientes datos para finalizar la compra:</h5>
            {error && <p style={{fontSize:'18px', fontWeight:'bold', color: 'red' }}>{error}</p>}
            <div className='formulario'>
                <input type='text' placeholder='Nombre Completo' value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                <input type='number' placeholder='DNI' value={dni} onChange={(e) => setDni(e.target.value)} required />
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type='text' placeholder='Dirección' value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
                <input type='text' placeholder='Localidad' value={localidad} onChange={(e) => setLocalidad(e.target.value)} required />
                <input type='text' placeholder='Código Postal' value={cp} onChange={(e) => setCP(e.target.value)} required />
            </div>
            <br />
            <div>
                <h5>Datos para realizar la transferencia:</h5>
                <p>CVU: 0000003100001777492223</p>
                <p>Alias: ArtamCrafts</p>
                <h6 style={{ color: 'red' }}> No te olvides de enviar tu comprobante con el pago realizado a
                    <a className='mail' href="mailto:artamcrafts@hotmail.com" target="_blank" rel="noopener noreferrer"> artamcrafts@hotmail.com</a>
                </h6>
            </div>
            <div>
                <button className='finCompra' onClick={handleSubmit}>Terminar mi compra</button>
            </div>
        </div>
    );
};

export default UserInfo;
