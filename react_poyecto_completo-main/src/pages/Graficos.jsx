import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import "../styles/Historial.css";
import "../styles/Navbar.css";

function Graficos() {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    fetch("http://127.0.0.1:5000/graficos")
    .then((res) => res.json())
    .then((data) => {
        setData(data);
        setLoading(false);
    })
    .catch((error) => {
        console.error("Error al cargar la API:", error);
        setLoading(false);
    });
}, []);

if (loading) return <p>Cargando gráficos...</p>;

if (!data) return <p>Error cargando datos</p>;

return (
    <div style={{ textAlign: "center" }}>
    <h2>📊 Gráfico de Frecuencia</h2>
<img
        src={`data:image/png;base64,${data.frecuencia}`}
        alt="frecuencia"
        style={{ width: "80%" }}
    />

    <h2>📊 Gráfico de Estados</h2>
    <img
        src={`data:image/png;base64,${data.estados}`}
        alt="estados"
        style={{ width: "80%" }}
    />
    </div>
);
}

export default Graficos;