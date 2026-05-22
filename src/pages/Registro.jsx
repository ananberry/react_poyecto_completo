import Navbar from "../components/Navbar";

import "../styles/Navbar.css";
import "../styles/InicioSesion.css";

import { Link, useNavigate } from "react-router-dom";

const Registro = () => {

  const navigate = useNavigate();

  const handleRegistro = () => {

    alert("Cuenta creada correctamente");

    // Redirige a inicio de sesión
    navigate("/inicio-sesion");
  };

  return (

    <div className="login-wrapper">

      {/* Navbar */}
      <Navbar />

      <div className="auth-page">

        <div className="auth-card">

          <h2 className="auth-logo-text">
            COSMO
            <br />
            SYSTEM
            <br />
            OPTTIM
          </h2>

          <h3 className="auth-title">
            Crear cuenta
          </h3>

          {/* Nombre */}
          <div className="auth-field">

            <label>Nombre completo</label>

            <input
              type="text"
              placeholder="Ingresa tu nombre"
            />

          </div>

          {/* Correo */}
          <div className="auth-field">

            <label>Correo electrónico</label>

            <input
              type="email"
              placeholder="Ingresa tu correo"
            />

          </div>

          {/* Usuario */}
          <div className="auth-field">

            <label>Usuario</label>

            <input
              type="text"
              placeholder="Elige un usuario"
            />

          </div>

          {/* Contraseña */}
          <div className="auth-field">

            <label>Contraseña</label>

            <input
              type="password"
              placeholder="Crea una contraseña"
            />

          </div>

          {/* Botón */}
          <button
            className="auth-button"
            onClick={handleRegistro}
          >
            Registrarse
          </button>

          {/* Link para volver al login */}
          <p className="auth-link">

            ¿Ya tienes cuenta?

            <Link to="/inicio-sesion">
              {" "}Inicia sesión
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Registro;