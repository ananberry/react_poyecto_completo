import Navbar from "../components/Navbar";

import "../styles/Historial.css";
import "../styles/Navbar.css";

const Historial = () => {

  const data = [
    {
      id: 1,
      nombre: "Carlos Méndez",
      rol: "Profesor",
      documento: "PROF-48291",
      correo: "carlos.mendez@cso.edu",
      accion: "Retiró",
      objeto: "Laptop HP EliteBook",
      fecha: "2026-05-18"
    },
    {
      id: 2,
      nombre: "Valentina Ríos",
      rol: "Estudiante",
      documento: "EST-19384",
      correo: "valentina.rios@cso.edu",
      accion: "Devolvió",
      objeto: "Tablet Samsung Galaxy Tab",
      fecha: "2026-05-17"
    },
    {
      id: 3,
      nombre: "Julián Torres",
      rol: "Profesor",
      documento: "PROF-77821",
      correo: "julian.torres@cso.edu",
      accion: "Retiró",
      objeto: "Proyector Epson X200",
      fecha: "2026-05-16"
    },
    {
      id: 4,
      nombre: "Sofía Herrera",
      rol: "Estudiante",
      documento: "EST-55290",
      correo: "sofia.herrera@cso.edu",
      accion: "Retiró",
      objeto: "Kit de robótica LEGO Education",
      fecha: "2026-05-15"
    },
    {
      id: 5,
      nombre: "Andrés López",
      rol: "Profesor",
      documento: "PROF-66510",
      correo: "andres.lopez@cso.edu",
      accion: "Devolvió",
      objeto: "Microscopio Digital",
      fecha: "2026-05-14"
    }
  ];

  return (
    <div className="historial-page">

      {/* Navbar */}
      <Navbar />

      {/* Título */}
      <h1 className="historial-title">
        Historial de Movimientos
      </h1>

      {/* Contenedor */}
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