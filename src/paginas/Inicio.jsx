import { useState } from "react";
import "./Inicio.css";
import { Search } from "lucide-react";


function Inicio({ tareas = [], avisos = [] }) {
  const [busqueda, setBusqueda] = useState("");

  return (
    <div className="pagina-inicio">
      <main className="contenedor">
        <div className="fila-superior">
          

          <div className="izquierda">
          <Search className="lupa"  />
          <input
            
            type="text"
            placeholder=" Buscar materia, tarea o aviso..."
            className="buscador"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          
          </div>
            
          <div className="caja-grupo">Grupo: 5°C</div>
             
        </div>

        <div className="cuadro-bienvenida">
          <h1>¡Bienvenid@ a StudyCedi!</h1>
          <p className="subtitulo">
            Organiza tus entregas y mantente al día con tu grupo.
          </p>
        </div>

        <div className="cuadro-informativo">
          <div className="resumen-grid">
            <div className="tarjeta-dato">
              <span className="numero">{tareas.length}</span>
              <span className="etiqueta">Tareas pendientes</span>
            </div>
            <div className="tarjeta-dato">
              <span className="numero">{avisos.length}</span>
              <span className="etiqueta">Avisos importantes</span>
            </div>
          </div>
          <p className="recordatorio">
            Recuerda revisar tus materias y fechas de entrega.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Inicio;
