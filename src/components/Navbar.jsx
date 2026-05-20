import React from 'react';
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
  <Link to="/" className="navbar-logo">
  CSO
</Link>
      <ul className="navbar-menu">
      <li className="navbar-item">
  <Link to="/inventario">
    Inventario
  </Link>
</li>
        <li className="navbar-item">
          <a href="#historial">Historial</a>
        </li>
          <li className="navbar-item">
          <Link to="/Notificaciones">
            Notificaciones
          </Link>
        </li>
        <li className="navbar-item">
          <a href="#perfil" className="profile-btn">Registrarse</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;










