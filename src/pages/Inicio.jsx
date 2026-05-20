import React from "react";

// Componentes
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Info from "../components/Info";
import Footer from "../components/Footer";
// CSS
import "../styles/Navbar.css";
import '../styles/HeroSection.css'
import "../styles/Info.css";
import "../styles/Footer.css";


const Inicio = () => {
  return (
    <>
      <Navbar />
        <HeroSection />
      <Info />
      <Footer />
    </>
  );
};

export default Inicio;
