import "../styles/Footer.css";
 
const Footer = () => {
  return (
    <footer className="footer">
 
      <div className="footer-divider" />
 
      <div className="footer-content">
 
        <div className="footer-column">
          <h3>SEDES</h3>
          <p><strong>Cosmo Schools Bello</strong></p>
          <p>📍 Calle 52B # 59B - 50</p>
        </div>
 
        <div className="footer-column">
          <h3>Redes sociales</h3>
          <p>📸 Instagram</p>
          <p>📘 Facebook</p>
          <p>🎥 YouTube</p>
          <p>📞 309-789-6767</p>
        </div>
 
        <div className="footer-column">
          <h3>Creadores</h3>
          <p>Samuel Cardona Ortiz</p>
          <p>Samuel Sanchez Orrego</p>
          <p>Ana María Ortega Querubín</p>
          <p>Miguel Angel Naranjo Ocampo</p>
        </div>
 
        <div className="footer-column">
          <h3>Año</h3>
          <p className="footer-year">8/05/2030</p>
        </div>
 
      </div>
    </footer>
  );
};
 
export default Footer;