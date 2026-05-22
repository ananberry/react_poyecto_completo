import React from "react";

import Navbar from "../components/Navbar";

import "../styles/Navbar.css";
import "../styles/Notificaciones.css";
import Footer from "../components/Footer";
import "../styles/Footer.css"

const Notificaciones = () => {

  return (

    <>
    
      <Navbar />

      <div className="notificaciones-container">

        <div className="notificaciones-card">

          <h1 className="notificaciones-titulo">
            NOTIFICACIONES
          </h1>

          <p className="notificaciones-texto">
            Bienvenido a las notificaciones de CSO,
            acá podrás ver información acerca del workshop
            y notificar algo si deseas.
          </p>

          <button className="notificaciones-boton">
            Dejar mensaje
          </button>

        </div>

      </div>
      <Footer />

    </>
  );
};

export default Notificaciones;