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
        NMS
      </Link>

      {/* Menú */}
      <ul className="navbar-menu">

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

        <li className="navbar-item">
          <Link to="/inicio-sesion">
            Inicio Sesión
          </Link>
        </li>

      </ul>

    </nav>

  );
};

export default Navbar;







