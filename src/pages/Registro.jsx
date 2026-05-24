import Navbar from "../components/Navbar";

import "../styles/Navbar.css";
import "../styles/InicioSesion.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registrarUsuario } from "../services/api";

const Registro = () => {
  const navigate = useNavigate();

  // Estado del formulario
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    documento: "",
    rol: "ESTUDIANTE",
  });

  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegistro = async (e) => {
    e.preventDefault();
    setError(null);
    setCargando(true);

    try {
      // Llama al backend: POST /api/usuarios
      await registrarUsuario({
        nombre: form.nombre,
        correo: form.correo,
        documento: form.documento,
        rol: form.rol,
      });

      alert("¡Cuenta creada correctamente!");
      navigate("/inicio-sesion");
    } catch (err) {
      setError("No se pudo crear la cuenta. Revisa tus datos e intenta de nuevo.");
    } finally {
      setCargando(false);
    }
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

          <h3 className="auth-title">Crear cuenta</h3>

          <form onSubmit={handleRegistro}>
            {/* Nombre */}
            <div className="auth-field">
              <label>Nombre completo</label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Ingresa tu nombre"
                required
              />
            </div>

            {/* Correo */}
            <div className="auth-field">
              <label>Correo electrónico</label>
              <input
                type="email"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                placeholder="Ingresa tu correo"
                required
              />
            </div>

            {/* Documento */}
            <div className="auth-field">
              <label>Número de documento</label>
              <input
                type="text"
                name="documento"
                value={form.documento}
                onChange={handleChange}
                placeholder="Ej: 1234567890"
                required
              />
            </div>

            {/* Rol */}
            <div className="auth-field">
              <label>Tipo de usuario</label>
              <select
                name="rol"
                value={form.rol}
                onChange={handleChange}
                className="auth-select"
              >
                <option value="ESTUDIANTE">Estudiante</option>
                <option value="PROFESOR">Profesor</option>
              </select>
            </div>

            {/* Error de conexión */}
            {error && (
              <p style={{ color: "#ff6b6b", fontSize: "0.85rem", marginTop: "8px" }}>
                ⚠️ {error}
              </p>
            )}

            {/* Botón */}
            <button
              type="submit"
              className="auth-button"
              disabled={cargando}
              id="btn-registrarse"
            >
              {cargando ? "Registrando..." : "Registrarse"}
            </button>
          </form>

          {/* Link para volver al login */}
          <p className="auth-link">
            ¿Ya tienes cuenta?
            <Link to="/inicio-sesion"> Inicia sesión</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registro;