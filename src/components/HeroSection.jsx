import fondoImg from '../assets/image.png'
import logoImg from '../assets/logo2.png'
// ============================================

import '../styles/HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero">

      {/* Imagen de fondo */}
      <img src={fondoImg} alt="" className="hero__bg" />

      {/* Overlay oscuro */}
      <div className="hero__overlay" />

      <div className="hero__content">

        {/* Logo */}
        <div className="hero__logo">
          <img src={logoImg} alt="Cosmo System Opttim" className="hero__logo-img" />
          <div className="hero__logo-text">
            <p>COSMO</p>
            <p>SYSTEM</p>
            <p>OPTTIM</p>
          </div>
        </div>

        {/* Título */}
        <h1 className="hero__title">
          Sistema de seguridad para <br />
          la protección de inventario
        </h1>

      </div>
    </section>
  )
}