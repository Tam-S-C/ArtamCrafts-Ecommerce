import React from 'react';
import './SesionComp.css';
import Swal from 'sweetalert2';

export default function SesionComp() {
    
  const enviarFormulario = (event) => {
    event.preventDefault();

    // SweetAlert2
    Swal.fire({
      icon: 'success',
      title: '¡Sesión Iniciada Con Éxito!',
      width: 580,
      padding: '1em',
      color: '#716add',
      background: '#fff',
      backdrop: 'rgba(0,0,123,0.3)',
      confirmButtonText: 'Salir'
    });

    event.target.reset();
  }


  return (
      <>
    <main>
      <hr />
      <br />
      <h2 style={{ fontFamily: 'monospace' }}>INICIO DE SESIÓN</h2>
      <div>
        <br />
        <form method="post" id="formulario" onSubmit={enviarFormulario}>
          <fieldset>
            <label className="entradas" htmlFor="nombre">Nombre:</label>
            <br />
            <input
              type="text"
              id="nombre"
              name="nombre"
              size="48"
              minLength="2"
              maxLength="30"
              autoComplete="nombre"
              required
            />
            <br /><br />
            <label className="entradas" htmlFor="contrasena">Contraseña:</label>
            <br />
            <input
              type="contrasena"
              id="contrasena"
              name="contrasena"
              size="48"
              minLength="6"
              maxLength="30"
              autoComplete="contrasena"
              required
            />
            <br /><br />
            <label className="entradas" htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="mail"
              size="48"
              minLength="3"
              maxLength="30"
              autoComplete="email"
              required
            />
            <br /><br />
          </fieldset>
          <br />
          <button type="submit" className="botonContacto" id="enviar">Iniciar</button>
          <button type="reset" className="botonContacto">Reset</button>
        </form>
        <br /><br />
      </div>
    </main>
      </>
    );
  }