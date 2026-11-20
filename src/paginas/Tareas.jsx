import { Link } from 'react-router-dom'
import { useTareas } from '../context/TareasContext'

function Tareas() {
  const { tareas } = useTareas()

  return (
    <main className="Contenedor">
      <div className="Concuchara">
        <h2>Mis Tareas</h2>

        {tareas.length === 0 ? (
          <p>No hay tareas pendientes.</p>
        ) : (
          tareas.map((tarea, index) => (
            <p key={tarea.id}>
              <strong>Tarea {index + 1}:</strong> [{tarea.materia}] {tarea.texto} — <em>Entrega: {tarea.fecha}</em>
            </p>
          ))
        )}

        <div>
          <Link to="/CrearTarea"><button>Crear Tarea</button></Link>
          <Link to="/EditarTarea"><button>Editar Tarea</button></Link>
          <Link to="/EliminarTarea"><button>Eliminar Tarea</button></Link>
        </div>
      </div>
    </main>
  )
}

export default Tareas
