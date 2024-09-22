import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function CheckOutBrief() {
    const { order } = useContext(CartContext);

    return (
        <>
            <hr />
            <br />
            <h2 style={{ fontFamily: 'monospace' }}>¡GRACIAS POR TU COMPRA!</h2>
            <br />

            {order ? (
                <>
                    <p>ID de la Orden: {order.id}</p>
                    <br />
                    <h4>Productos comprados:</h4>
                    <>
                        {order.items.map((item) => (
                            <div key={item.id}>
                                <p><strong>{item.titulo}</strong></p>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Precio unitario: ${item.precio}</p>
                                <p>Subtotal: ${item.precio * item.quantity}</p>
                                <hr/>
                            </div>
                        ))}
                    </>
                    <br />
                    <h4 style={{ fontFamily: 'monospace', fontWeight:'bold' }}>PRECIO FINAL: ${order.total}</h4>
                    <hr/>
                    <br />
                    <h4>Datos del comprador:</h4>
                    <p><strong>Nombre Completo:</strong> {order.buyer.nombre}</p>
                    <p><strong>DNI:</strong> {order.buyer.dni}</p>
                    <p><strong>Email:</strong> {order.buyer.email}</p>
                    <p><strong>Dirección:</strong> {order.buyer.direccion}</p>
                    <p><strong>Localidad:</strong> {order.buyer.localidad}</p>
                    <p><strong>Código Postal:</strong> {order.buyer.cp}</p>
                    <p><strong>Teléfono:</strong> {order.buyer.telefono}</p>
                    <p><strong>Fecha de Creación:</strong> {new Date(order.creadoEn).toLocaleString()}</p>
                </>
            ) : (
                <p>Cargando la información de la orden...</p>
            )}

            <br />
            <p style={{ color: 'red', fontWeight:'bold' }}>No válido como factura.</p>
            <br />
            <hr/>
            <br />
            <div>
                <h5>Datos para realizar la transferencia:</h5>
                <p>CVU: 0000003100001777492223</p>
                <p>Alias: ArtamCrafts</p>
                <h6 style={{ color: 'red' }}> No te olvides de enviar tu comprobante con el pago realizado a
                    <a className='mail' href="mailto:artamcrafts@hotmail.com" target="_blank" rel="noopener noreferrer">artamcrafts@hotmail.com</a>
                    <br/>
                    Los productos <span style={{fontWeight:'bold'}}>no se enviarán</span> hasta que recibas por mail la confirmación <br/>de que hemos recibido tu comprobante de pago.
                </h6>
            </div>


        </>
    );
}
