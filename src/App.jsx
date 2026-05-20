import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas
import Inicio from './pages/Inicio'
import Notificaciones from './pages/Notificaciones'
import Inventario from './pages/Inventario'
function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Inicio />}
        />

        <Route
          path="/notificaciones"
          element={<Notificaciones />}
        />
   <Route
          path="/inventario"
          element={<Inventario />}
        />
      </Routes>

    </BrowserRouter>

  )
}

export default App