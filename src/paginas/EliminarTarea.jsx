import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTareas } from '../context/TareasContext'
import './eliminarTarea.css' // Asegúrate de importar tu archivo CSS

function EliminarTarea() {
  const { tareas, eliminarTarea } = useTareas()
  const [sele, setSele] = useState('')
  const [tareaElegida, setTareaElegida] = useState(null)
  const navigate = useNavigate()

  function choosen(evento) {
    evento.preventDefault()
    const indice = Number(sele) - 1
    const encontrada = tareas[indice]

    if (encontrada) {
      setTareaElegida(encontrada)
    } else {
      alert(`Esa tarea no existe, elige un número del 1 al ${tareas.length}`)
    }
  }

  function eliminarConfirmado(evento) {
    evento.preventDefault()
    if (!tareaElegida) return

    eliminarTarea(tareaElegida.id)
    setTareaElegida(null)
    setSele('')
    navigate('/Tareas')
  }

  return (
    <main className="eliminar-pagina">
      <div className="eliminar-titulo">
        <h1>Eliminar Tarea</h1>
        <p>Selecciona el número de la tarea que deseas borrar de tu lista.</p>
      </div>

      <div className="eliminar-contenedor">
        {/* Tarjeta 1: Selección de tarea */}
        <div className="eliminar-seleccion">
          <h2>1. Elige una tarea</h2>
          <form onSubmit={choosen}>
            <div className="eliminar-lista">
              {tareas.map((tarea, index) => (
                <div className="eliminar-tarea-item" key={tarea.id}>
                  <p>
                    <strong>Tarea {index + 1}:</strong>{' '}
                    <span>[{tarea.materia}]</span> {tarea.texto} - ({tarea.fecha})
                  </p>
                </div>
              ))}
            </div>

            <label htmlFor="num-tarea">¿Qué número de tarea deseas eliminar?</label>
            <input
              id="num-tarea"
              className="eliminar-input"
              type="number"
              min="1"
              max={tareas.length}
              placeholder="Ej. 1"
              value={sele}
              onChange={(evento) => setSele(evento.target.value)}
            />
            <button type="submit" className="eliminar-boton">
              Seleccionar
            </button>
          </form>
        </div>

        {/* Tarjeta 2: Confirmación */}
        <div className="eliminar-confirmacion">
          <h2>2. Confirmar acción</h2>
          <form onSubmit={eliminarConfirmado}>
            <div className="eliminar-resumen">
              <p>
                Tarea a eliminar:{' '}
                <strong>
                  {tareaElegida
                    ? `${tareaElegida.texto} (${tareaElegida.materia})`
                    : 'Ninguna seleccionada'}
                </strong>
              </p>
            </div>

            <button
              type="submit"
              className="eliminar-boton eliminar-boton-peligro"
              disabled={!tareaElegida}
            >
              Confirmar eliminación
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default EliminarTarea
