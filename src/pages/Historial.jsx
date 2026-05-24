import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import "../styles/Historial.css";
import "../styles/Navbar.css";

const Historial = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("sesionUsuario") || "null");
    
    if (!usuario || usuario.rol !== "PROFESOR") {
      setError("No tienes permisos para ver el historial");
      setLoading(false);
      return;
    }

    const fetchHistorial = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/historial?rol=${usuario.rol}`);
        
        if (response.status === 403) {
          setError("Acceso denegado: solo profesores pueden ver el historial");
          return;
        }
        
        if (!response.ok) {
          throw new Error("Error al cargar el historial");
        }
        
        const historial = await response.json();
        setData(historial);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHistorial();
  }, []);

  if (loading) return <div className="historial-page"><Navbar /><p>Cargando...</p></div>;
  if (error) return <div className="historial-page"><Navbar /><p style={{color: 'red'}}>{error}</p></div>;

  return (
    <div className="historial-page">
      <Navbar />

      <h1 className="historial-title">
        Historial de Movimientos
      </h1>

      <div className="historial-container">
        {data.map((item) => (
          <div key={item.id} className="historial-card">
            <div className="historial-header">
              <h2>{item.nombre}</h2>
              <span
                className={
                  item.rol === "Profesor"
                    ? "tag profesor"
                    : "tag estudiante"
                }
              >
                {item.rol}
              </span>
            </div>

            <p><b>Documento:</b> {item.documento}</p>
            <p><b>Correo:</b> {item.correo}</p>
            <p><b>Acción:</b> {item.accion}</p>
            <p><b>Objeto:</b> {item.objeto}</p>
            <p><b>Fecha:</b> {item.fecha}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Historial;