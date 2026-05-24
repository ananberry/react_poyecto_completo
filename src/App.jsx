import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas
import Inicio from "./pages/Inicio";
import InicioSesion from "./pages/InicioSesion";
import Registro from "./pages/Registro";
import Historial from "./pages/Historial";
import Inventario from "./pages/Inventario";
import Notificaciones from "./pages/Notificaciones";
import AccesoDenegado from "./pages/AccesoDenegado";

// Componente de ruta protegida
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Inicio />} />

        <Route
          path="/inicio-sesion"
          element={<InicioSesion />}
        />

        <Route
          path="/registro"
          element={<Registro />}
        />

        <Route
          path="/historial"
          element={<ProtectedRoute element={<Historial />} requiredRole="PROFESOR" />}
        />

        <Route
          path="/inventario"
          element={<Inventario />}
        />

        <Route
          path="/notificaciones"
          element={<Notificaciones />}
        />

        <Route
          path="/acceso-denegado"
          element={<AccesoDenegado />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;