import React from 'react';
import Swal from 'sweetalert2';
import '../CarritoComp/UserInfo.css';

export default function ContactComp() {

  // Función para enviar el formulario de contacto
  const enviarFormulario = (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Mostrar un mensaje de éxito usando SweetAlert2
    Swal.fire({
      icon: 'success',
      title: '¡Mensaje enviado con éxito!',
      text: 'Le estaremos respondiendo a la brevedad.',
      width: 580,
      padding: '1em',
      color: '#716add',
      background: '#fff',
      backdrop: 'rgba(0,0,123,0.3)',
      confirmButtonText: 'Salir'
    });

    // Restablecer el formulario luego de enviarlo
    event.target.reset();
  }

  return (
    <main>
      <hr />
      <br />
      <br />
      <h2 style={{ fontFamily: 'monospace' }}>CONTACTO</h2>
      <div>
        <br />
        <form method="post" id="formulario" onSubmit={enviarFormulario}>
          <fieldset>
            <legend>Completa el formulario de consulta</legend>
            <label className="entradas" htmlFor="nombre">Nombre:</label>
            <br />
            <input
              type="text"
              id="nombre"
              name="nombre"
              size="60"
              minLength="2"
              maxLength="30"
              autoComplete="nombre"
              required
            />
            <br /><br />
            <label className="entradas" htmlFor="apellido">Apellido:</label>
            <br />
            <input
              type="text"
              id="apellido"
              name="apellido"
              size="60"
              minLength="2"
              maxLength="30"
              autoComplete="apellido"
              required
            />
            <br /><br />
            <label className="entradas" htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="mail"
              size="60"
              minLength="2"
              maxLength="30"
              autoComplete="email"
              required
            />
            <br /><br />
            <label htmlFor="comentario">Comentarios:</label>
            <br />
            <textarea
              name="comentario"
              id="comentario"
              cols="61"
              rows="5"
              required
              defaultValue="Escribí tus consultas aquí!"
            />
          </fieldset>
          <br />
          <button type="submit" className="botonContacto" id="enviar">Enviar</button>
          <button type="reset" className="botonContacto">Reset</button>
        </form>
        <br /><br />
      </div>
    </main>
  );
}
