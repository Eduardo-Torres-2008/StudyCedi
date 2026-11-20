import { useState } from "react";
import "./Inicio.css";

function Inicio() {
  const [busqueda, setBusqueda] = useState("");

  return (
    <div>
      <header className="barra-superior">
        <a href="/inicio" className="icono">🏠</a>

        <nav className="menu">
          <a href="/tareas">Tareas</a>
          <span> | </span>
          <a href="/horario">Horario</a>
          <span> | </span>
          <a href="/materias">Materias</a>
          <span> | </span>
          <a href="/avisos">Avisos</a>
          <span> | </span>
          <a href="/formularios">Formularios</a>
        </nav>

        <a href="/perfil" className="icono">👤</a>
      </header>

      
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
