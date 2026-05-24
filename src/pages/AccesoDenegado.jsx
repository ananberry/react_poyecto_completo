import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import "../styles/Navbar.css";

const AccesoDenegado = () => {
  return (
    <div className="acceso-denegado-page">
      <Navbar />
      <div className="acceso-denegado-container" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        textAlign: 'center',
        padding: '20px'
      }}>
        <h1 style={{ color: '#ff6b6b', fontSize: '48px', marginBottom: '20px' }}>403</h1>
        <h2 style={{ marginBottom: '10px' }}>Acceso Denegado</h2>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>
          Solo los profesores pueden acceder al historial de movimientos.
        </p>
        <Link 
          to="/inventario" 
          style={{
            background: '#4dabf7',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Volver al Inventario
        </Link>
      </div>
    </div>
  );
};

export default AccesoDenegado;