import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUsuario } from "../services/api";

import "../styles/Navbar.css";
import "../styles/InicioSesion.css";

const InicioSesion = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setCargando(true);

    try {
      // Llama al backend: POST /api/auth/login
      const usuarioLogueado = await loginUsuario(usuario, contrasena);

      // Guarda los datos del usuario en localStorage para persistir la sesión
      localStorage.setItem("sesionUsuario", JSON.stringify(usuarioLogueado));

      alert(`¡Bienvenido de nuevo, ${usuarioLogueado.nombre}!`);
      
      // Redirige al inventario
      navigate("/inventario");
    } catch (err) {
      setError(
        err.message || 
        "No se pudo iniciar sesión. Verifica tu usuario y contraseña."
      );
    } finally {
      setCargando(false);
    }
  };

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

          <h3 className="auth-title">Iniciar sesión</h3>

          <form onSubmit={handleLogin}>
            <div className="auth-field">
              <label>Usuario (Correo / Documento)</label>
              <input
                type="text"
                placeholder="Ingresa tu correo o documento"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
              />
            </div>

            <div className="auth-field">
              <label>Contraseña (Número de Documento)</label>
              <input
                type="password"
                placeholder="Ingresa tu documento"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                required
              />
            </div>

            {error && (
              <p style={{ color: "#ff6b6b", fontSize: "0.85rem", marginTop: "8px", textAlign: "center" }}>
                ⚠️ {error}
              </p>
            )}

            <button 
              type="submit" 
              className="auth-button"
              disabled={cargando}
            >
              {cargando ? "Iniciando sesión..." : "Entrar"}
            </button>
          </form>

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