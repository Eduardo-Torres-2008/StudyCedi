import { Link } from 'react-router-dom'
import { useTareas } from '../context/TareasContext'
import './Tareas.css' // Asegúrate de importar tu archivo CSS

function Tareas() {
  const { tareas } = useTareas()

  return (
    <main className="tareas-pagina">
      <div className="tareas-titulo">
        <h1>Mis Tareas</h1>
        <p>Consulta tus actividades pendientes y gestiona tus entregas.</p>
      </div>

      <div className="tareas-contenedor">
        {/* Tarjeta 1: Listado de tareas */}
        <div className="tareas-tarjeta">
          <h2>Lista de actividades ({tareas.length})</h2>

          {tareas.length === 0 ? (
            <div className="tareas-vacio">
              <p>No hay tareas pendientes por el momento.</p>
            </div>
          ) : (
            <div className="tareas-lista">
              {tareas.map((tarea, index) => (
                <div className="tareas-item" key={tarea.id}>
                  <p>
                    <strong>Tarea {index + 1}:</strong>{' '}
                    <span>[{tarea.materia}]</span> {tarea.texto} —{' '}
                    <em>Entrega: {tarea.fecha}</em>
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tarjeta 2: Botones de navegación */}
        <div className="tareas-tarjeta">
          <h2>Acciones</h2>
          <div className="tareas-acciones">
            <Link to="/CrearTarea" className="tareas-link">
              <button type="button" className="tareas-boton">
                Crear Tarea
              </button>
            </Link>

            <Link to="/EditarTarea" className="tareas-link">
              <button
                type="button"
                className="tareas-boton tareas-boton-secundario"
                disabled={tareas.length === 0}
              >
                Editar Tarea
              </button>
            </Link>

            <Link to="/EliminarTarea" className="tareas-link">
              <button
                type="button"
                className="tareas-boton tareas-boton-peligro"
                disabled={tareas.length === 0}
              >
                Eliminar Tarea
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Tareas
