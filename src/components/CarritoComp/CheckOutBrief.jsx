import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './UserInfo';
import './CartView';

export default function CheckOutBrief() {
    const { cart = [], order } = useContext(CartContext);

    return (
        <>
            <hr />
            <br />
            <h2 style={{ fontFamily: 'monospace' }}>¡GRACIAS POR TU COMPRA!</h2>
            <br />
            <h3 style={{ fontFamily: 'monospace' }}>
                PRECIO FINAL: ${cart.reduce((total, item) => total + item.precio * item.quantity, 0)}
            </h3>
            <br />

            {order && order.buyer &&(
                <>
                    <h4>Detalles de la compra:</h4>
                    <p><strong>Nombre:</strong> {order.buyer.nombre}</p>
                    <p><strong>Apellido:</strong> {order.buyer.apellido}</p>
                    <p><strong>DNI:</strong> {order.buyer.dni}</p>
                    <p><strong>Email:</strong> {order.buyer.email}</p>
                    <p><strong>Teléfono:</strong> {order.buyer.telefono}</p>
                    <p><strong>Dirección:</strong> {order.buyer.direccion}</p>
                    <p><strong>Localidad:</strong> {order.buyer.localidad}</p>
                    <p><strong>Código Postal:</strong> {order.buyer.cp}</p>
                </>
            )}

            <p>No válido como factura.</p>
        </>
    );
}
