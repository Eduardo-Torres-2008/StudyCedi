import { useState } from "react";
import "./Inicio.css";

function Inicio() {
  const [busqueda, setBusqueda] = useState("");

  return (
    <div>
      

      
      <main className="contenedor">
        <div className="fila-superior">
          <input
            type="text"
            placeholder="🔍 search"
            className="buscador"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />

          <div className="caja-grupo">Grupo: 5°C</div>
        </div>

        <div className="cuadro-bienvenida">
          <h1>¡Bienvenid@ a StudyCedi!</h1>
        </div>
      </main>
    </div>
  );
}

export default Inicio;
