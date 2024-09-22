import React, { useState, useContext } from 'react';
import './UserInfo.css';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const UserInfo = ({ carrito }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [dni, setDni] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [cp, setCP] = useState('');

    const { clearAll, createNewOrder } = useContext(CartContext);
    const navigate = useNavigate();

    const handleSubmit = () => {
        const order = {
            buyer: {
                nombre,
                apellido,
                dni,
                email,
                telefono,
                direccion,
                localidad,
                cp,
            },
            items: carrito,
            creadoEn: new Date()
        };

        createNewOrder(order); 
        clearAll();             
        navigate('/checkOutBrief');
    }

    return (
        <div className='containerCarrito'>
            <h5>Completa los siguientes datos para finalizar la compra:</h5>
            <br/>
            <div className='formulario'>
                <input type='text' placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                <input type='text' placeholder='Apellido' value={apellido} onChange={(e) => setApellido(e.target.value)} required/>
                <input type='text' placeholder='DNI' value={dni} onChange={(e) => setDni(e.target.value)} required/>
                <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <input type='text' placeholder='Teléfono' value={telefono} onChange={(e) => setTelefono(e.target.value)} required/>
                <input type='text' placeholder='Dirección' value={direccion} onChange={(e) => setDireccion(e.target.value)} required/>
                <input type='text' placeholder='Localidad' value={localidad} onChange={(e) => setLocalidad(e.target.value)} required/>
                <input type='text' placeholder='Código Postal' value={cp} onChange={(e) => setCP(e.target.value)} required/>
            </div>
            <br/>
            <div>
                <h5>Datos para realizar la transferencia:</h5>
                <p>CVU: 0000003100001777492223</p>
                <p>Alias: ArtamCrafts</p>
                <h6 style={{color:'red'}}>
                    No te olvides de enviar tu comprobante con el pago realizado a  
                    <a className='mail' href="mailto:artamcrafts@hotmail.com" target="_blank" rel="noopener noreferrer">artamcrafts@hotmail.com</a>
                </h6>
            </div>
            <div>
                <button className='finCompra' onClick={handleSubmit}>Terminar mi compra</button>
            </div>
        </div>
    )
}

export default UserInfo;
