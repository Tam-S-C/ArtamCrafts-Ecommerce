import React from 'react';
import './SesionComp.css';
import Swal from 'sweetalert2';

export default function SesionComp() {

  const inicioSesion = (event) => {
    event.preventDefault();

    // SweetAlert2 del inicio de sesión
    Swal.fire({
      icon: 'success',
      title: '¡Sesión Iniciada Con Éxito!',
      width: 500,
      padding: '1em',
      color: '#716add',
      background: '#fff',
      backdrop: 'rgba(0,0,123,0.3)',
      confirmButtonText: 'Salir'
    });
    event.target.reset();
  }


  const registroNuevo = (event) => {
    event.preventDefault();

    // SweetAlert2 del registro
    Swal.fire({
      icon: 'success',
      title: '¡Registro realizado con Éxito!',
      width: 500,
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
          <form method="post" id="formulario" onSubmit={inicioSesion}>
            <fieldset>
              <label className="entradas" htmlFor="usuario">Usuario:</label>
              <br />
              <input
                type="text"
                id="usuario"
                name="usuario"
                size="48"
                minLength="2"
                maxLength="30"
                autoComplete="usuario"
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
              <br />
              <p className='pregunta'>¿Olvidaste tu contraseña? <a href="#" className='click'>Click aquí</a></p>
            </fieldset>
            <button type="submit" className="botonContacto" id="enviar">Iniciar Sesión</button>
          </form>
          <br />
          <hr />
          <br />
          <h2 style={{ fontFamily: 'monospace' }}>REGISTRO NUEVO</h2>

          <form method="post" id="formulario" onSubmit={registroNuevo}>

            <fieldset>
              <label className="entradas" htmlFor="usuario">Usuario:</label>
              <br />
              <input
                type="text"
                id="usuario"
                name="usuario"
                size="48"
                minLength="2"
                maxLength="30"
                autoComplete="usuario"
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
            <button type="submit" className="botonContacto" id="enviar">Registrarse</button>
          </form>
          <br />

        </div>
      </main>
    </>
  );
}