import Navbar from "../components/Navbar";

import "../styles/Navbar.css";
import "../styles/Inventario.css";

const items = [
  { id: 'ITM-001', nombre: 'Pincel grueso', categoria: 'Arte', ubicacion: 'Aula 3', prestadoA: 'Juan Pérez', cantidad: 2, estado: 'Bueno' },
  { id: 'ITM-002', nombre: 'Libro de Matemáticas', categoria: 'Libros', ubicacion: 'Biblioteca', prestadoA: '—', cantidad: 15, estado: 'Bueno' },
  { id: 'ITM-003', nombre: 'Pinturas acrílicas', categoria: 'Arte', ubicacion: 'Aula 3', prestadoA: 'María López', cantidad: 3, estado: 'Regular' },
  { id: 'ITM-004', nombre: 'Televisor 40"', categoria: 'Electrónico', ubicacion: 'Sala AV', prestadoA: '—', cantidad: 1, estado: 'Bueno' },
  { id: 'ITM-005', nombre: 'Tijeras', categoria: 'Útiles', ubicacion: 'Aula 1', prestadoA: '—', cantidad: 8, estado: 'Bueno' },
  { id: 'ITM-006', nombre: 'Marcadores', categoria: 'Útiles', ubicacion: 'Aula 2', prestadoA: 'Carlos Ruiz', cantidad: 2, estado: 'Malo' },
  { id: 'ITM-007', nombre: 'Globo terráqueo', categoria: 'Didáctico', ubicacion: 'Biblioteca', prestadoA: '—', cantidad: 1, estado: 'Bueno' },
  { id: 'ITM-008', nombre: 'Reglas', categoria: 'Útiles', ubicacion: 'Aula 1', prestadoA: '—', cantidad: 4, estado: 'Regular' },
];

const UMBRAL_BAJO = 3;

function getExistenciaTag(cantidad) {
  if (cantidad <= UMBRAL_BAJO) {
    return <span className="inv__tag inv__tag--bajo">Baja</span>;
  }

  return <span className="inv__tag inv__tag--alto">Alta</span>;
}

function getEstadoTag(estado) {
  const clases = {
    Bueno: 'inv__tag inv__tag--bueno',
    Regular: 'inv__tag inv__tag--regular',
    Malo: 'inv__tag inv__tag--malo',
  };

  return (
    <span className={clases[estado] ?? 'inv__tag'}>
      {estado}
    </span>
  );
}

export default function Inventario() {

  return (

    <>
    
      <Navbar />

      <div className="inv">

        <div className="inv__header">
          <h1 className="inv__titulo">Inventario</h1>

          <p className="inv__subtitulo">
            {items.length} items registrados
          </p>
        </div>

        <div className="inv__tabla-wrapper">

          <table className="inv__tabla">

            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Ubicación</th>
                <th>Prestado a</th>
                <th>Cantidad</th>
                <th>Existencia</th>
                <th>Estado</th>
              </tr>
            </thead>

            <tbody>

              {items.map((item) => (

                <tr key={item.id}>

                  <td className="inv__id">{item.id}</td>

                  <td className="inv__nombre">
                    {item.nombre}
                  </td>

                  <td>{item.categoria}</td>

                  <td>{item.ubicacion}</td>

                  <td className={item.prestadoA === '—' ? 'inv__libre' : ''}>
                    {item.prestadoA}
                  </td>

                  <td className="inv__cantidad">
                    {item.cantidad}
                  </td>

                  <td>
                    {getExistenciaTag(item.cantidad)}
                  </td>

                  <td>
                    {getEstadoTag(item.estado)}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </>

  );
}
