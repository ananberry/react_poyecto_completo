import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";
import "../styles/InicioSesion.css";

const InicioSesion = () => {
  return (
    <div className="login-wrapper">

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
            Iniciar sesión
          </h3>

          <div className="auth-field">
            <label>Usuario</label>

            <input
              type="text"
              placeholder="Ingresa tu usuario"
            />
          </div>

          <div className="auth-field">
            <label>Contraseña</label>

            <input
              type="password"
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <button className="auth-button">
            Entrar
          </button>

          <p className="auth-link">
            ¿No tienes cuenta?
            <Link to="/registro"> Regístrate</Link>
          </p>

        </div>

      </div>

    </div>
  );
};

export default InicioSesion;