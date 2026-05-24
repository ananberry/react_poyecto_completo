import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, requiredRole }) => {
  const usuario = JSON.parse(localStorage.getItem("sesionUsuario") || "null");

  if (!usuario) {
    return <Navigate to="/inicio-sesion" replace />;
  }

  if (requiredRole && usuario.rol !== requiredRole) {
    return <Navigate to="/acceso-denegado" replace />;
  }

  return element;
};

export default ProtectedRoute;