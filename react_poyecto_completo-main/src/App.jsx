import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas
import Inicio from "./pages/Inicio";
import InicioSesion from "./pages/InicioSesion";
import Registro from "./pages/Registro";
import Historial from "./pages/Historial";
import Inventario from "./pages/Inventario";
import Notificaciones from "./pages/Notificaciones";
import Graficos from "./pages/Graficos"; // 👈 IMPORTANTE

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Inicio />} />

        <Route path="/inicio-sesion" element={<InicioSesion />} />

        <Route path="/registro" element={<Registro />} />

        <Route path="/historial" element={<Historial />} />

        <Route path="/inventario" element={<Inventario />} />

        <Route path="/notificaciones" element={<Notificaciones />} />

        {/* 🔥 NUEVA RUTA */}
        <Route path="/graficos" element={<Graficos />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;