import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getMateriales, crearMaterial } from "../services/api";

import "../styles/Navbar.css";
import "../styles/Inventario.css";

// ─── Constantes ────────────────────────────────────────────────────────────
const UMBRAL_BAJO = 3;

function getExistenciaTag(cantidad) {
  if (cantidad <= UMBRAL_BAJO) {
    return <span className="inv__tag inv__tag--bajo">Baja</span>;
  }
  return <span className="inv__tag inv__tag--alto">Alta</span>;
}

function getEstadoTag(estado) {
  const clases = {
    Bueno: "inv__tag inv__tag--bueno",
    Regular: "inv__tag inv__tag--regular",
    Malo: "inv__tag inv__tag--malo",
  };
  return (
    <span className={clases[estado] ?? "inv__tag"}>{estado ?? "—"}</span>
  );
}

// ─── Formulario para agregar material (solo Profesores) ──────────────────
function FormularioMaterial({ onGuardado, onCancelar }) {
  const [form, setForm] = useState({
    name: "",
    condition: "Bueno",
    date: "",
    returndate: "",
    usuarioId: "",
  });
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setCargando(true);
    try {
      const payload = {
        ...form,
        usuarioId: form.usuarioId ? Number(form.usuarioId) : null,
      };
      const nuevo = await crearMaterial(payload);
      onGuardado(nuevo);
    } catch (err) {
      setError("No se pudo guardar el material. Revisa que el backend esté corriendo.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="inv__form-overlay">
      <form className="inv__form" onSubmit={handleSubmit}>
        <h2 className="inv__form-titulo">Añadir nuevo material</h2>

        <div className="inv__form-field">
          <label>Nombre del material</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ej: Proyector Epson"
            required
          />
        </div>

        <div className="inv__form-field">
          <label>Condición</label>
          <select name="condition" value={form.condition} onChange={handleChange}>
            <option value="Bueno">Bueno</option>
            <option value="Regular">Regular</option>
            <option value="Malo">Malo</option>
          </select>
        </div>

        <div className="inv__form-field">
          <label>Fecha de préstamo</label>
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="inv__form-field">
          <label>Fecha de devolución</label>
          <input
            name="returndate"
            type="date"
            value={form.returndate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="inv__form-field">
          <label>ID de usuario asignado <span className="inv__opcional">(opcional)</span></label>
          <input
            name="usuarioId"
            type="number"
            value={form.usuarioId}
            onChange={handleChange}
            placeholder="Dejar vacío si no está prestado"
            min="1"
          />
        </div>

        {error && <p className="inv__form-error">{error}</p>}

        <div className="inv__form-botones">
          <button type="submit" className="inv__btn inv__btn--primary" disabled={cargando}>
            {cargando ? "Guardando..." : "Guardar material"}
          </button>
          <button type="button" className="inv__btn inv__btn--secondary" onClick={onCancelar}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────
export default function Inventario() {
  const navigate = useNavigate();
  const [materiales, setMateriales] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);
  const [rolActual, setRolActual] = useState("ESTUDIANTE");

  // Al montar el componente, verifica la sesión y carga los datos
  useEffect(() => {
    const sesion = localStorage.getItem("sesionUsuario");
    if (!sesion) {
      alert("⚠️ Debes iniciar sesión para acceder al inventario.");
      navigate("/inicio-sesion");
      return;
    }

    const user = JSON.parse(sesion);
    setUsuarioLogueado(user);
    setRolActual(user.rol || "ESTUDIANTE");

    const cargarMateriales = async () => {
      try {
        const datos = await getMateriales();
        setMateriales(datos);
      } catch (err) {
        setError("No se pudo conectar con el servidor. Asegúrate de que el backend esté corriendo en el puerto 8080.");
      } finally {
        setCargando(false);
      }
    };
    cargarMateriales();
  }, [navigate]);

  // Cuando el Profesor guarda un nuevo material, lo agrega a la lista
  const handleMaterialGuardado = (nuevoMaterial) => {
    setMateriales((prev) => [...prev, nuevoMaterial]);
    setMostrarFormulario(false);
  };

  return (
    <>
      <Navbar />

      <div className="inv">
        <div className="inv__header">
          <div>
            <h1 className="inv__titulo">Inventario</h1>
            <p className="inv__subtitulo">
              {cargando ? "Cargando..." : `${materiales.length} items registrados`}
            </p>
          </div>

          {/* Solo el Profesor puede añadir materiales */}
          {rolActual === "PROFESOR" && (
            <button
              className="inv__btn inv__btn--primary"
              onClick={() => setMostrarFormulario(true)}
              id="btn-anadir-material"
            >
              + Añadir material
            </button>
          )}
        </div>

        {/* Estado: cargando */}
        {cargando && (
          <div className="inv__estado">
            <div className="inv__spinner" />
            <p>Conectando con el servidor...</p>
          </div>
        )}

        {/* Estado: error de conexión */}
        {error && !cargando && (
          <div className="inv__error">
            <span>⚠️</span>
            <p>{error}</p>
          </div>
        )}

        {/* Tabla del inventario */}
        {!cargando && !error && (
          <div className="inv__tabla-wrapper">
            <table className="inv__tabla">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Condición</th>
                  <th>Prestado a</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {materiales.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="inv__vacio">
                      No hay materiales registrados aún.
                    </td>
                  </tr>
                ) : (
                  materiales.map((item) => (
                    <tr key={item.id}>
                      <td className="inv__id">#{item.id}</td>
                      <td className="inv__nombre">{item.name}</td>
                      <td>{getEstadoTag(item.condition)}</td>
                      <td className={!item.nombreUsuario ? "inv__libre" : ""}>
                        {item.nombreUsuario ?? "—"}
                      </td>
                      <td>{getExistenciaTag(1)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal del formulario (solo visible para Profesores) */}
      {mostrarFormulario && (
        <FormularioMaterial
          onGuardado={handleMaterialGuardado}
          onCancelar={() => setMostrarFormulario(false)}
        />
      )}
    </>
  );
}
