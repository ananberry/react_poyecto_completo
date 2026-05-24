<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const sesion = localStorage.getItem("sesionUsuario");
    if (sesion) {
      setUsuario(JSON.parse(sesion));
    }
  }, []);

  const handleCerrarSesion = () => {
    localStorage.removeItem("sesionUsuario");
    setUsuario(null);
    alert("Sesión cerrada correctamente.");
    navigate("/inicio-sesion");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo">
=======
import React from 'react';
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (

    <nav className="navbar">

      {/* Logo */}
      <Link
        to="/"
        className="navbar-logo"
      >
>>>>>>> be7c2328874972e95f7a54921ad4a53ca31fad9c
        NMS
      </Link>

      {/* Menú */}
      <ul className="navbar-menu">
<<<<<<< HEAD
=======

>>>>>>> be7c2328874972e95f7a54921ad4a53ca31fad9c
        <li className="navbar-item">
          <Link to="/inventario">
            Inventario
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/historial">
            Historial
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/notificaciones">
            Notificaciones
          </Link>
        </li>

<<<<<<< HEAD
        {usuario ? (
          <>
            <li className="navbar-item navbar-user-info" style={{ color: "#fff", display: "flex", alignItems: "center", gap: "8px" }}>
              <span className="navbar-user-badge" style={{ background: "#4dabf7", padding: "4px 8px", borderRadius: "4px", fontSize: "0.8rem", fontWeight: "bold" }}>
                {usuario.rol}
              </span>
              <span style={{ fontWeight: "500" }}>{usuario.nombre}</span>
            </li>
            <li className="navbar-item">
              <button 
                onClick={handleCerrarSesion} 
                className="navbar-logout-btn"
                style={{
                  background: "transparent",
                  border: "1px solid #ff6b6b",
                  color: "#ff6b6b",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "500",
                  transition: "all 0.2s ease"
                }}
              >
                Cerrar Sesión
              </button>
            </li>
          </>
        ) : (
          <li className="navbar-item">
            <Link to="/inicio-sesion">
              Inicio Sesión
            </Link>
          </li>
        )}
      </ul>
    </nav>
=======
        <li className="navbar-item">
          <Link to="/inicio-sesion">
            Inicio Sesión
          </Link>
        </li>

      </ul>

    </nav>

>>>>>>> be7c2328874972e95f7a54921ad4a53ca31fad9c
  );
};

export default Navbar;
<<<<<<< HEAD
=======







>>>>>>> be7c2328874972e95f7a54921ad4a53ca31fad9c
