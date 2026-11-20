import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTareas } from '../context/TareasContext'

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
    <main className="Contenedor">
      <div className="Concuchara">
        <form onSubmit={choosen}>
          <label htmlFor="num-tarea">¿Qué tarea deseas eliminar?</label>
          {tareas.map((tarea, index) => (
            <p key={tarea.id}>
              Tarea {index + 1}: [{tarea.materia}] {tarea.texto} - ({tarea.fecha})
            </p>
          ))}

          <input
            id="num-tarea"
            type="number"
            min="1"
            max={tareas.length}
            value={sele}
            onChange={(evento) => setSele(evento.target.value)}
          />
          <button type="submit">Seleccionar</button>
        </form>

        <form onSubmit={eliminarConfirmado}>
          <p>
            Tarea a eliminar: <strong>{tareaElegida ? `${tareaElegida.texto} (${tareaElegida.materia})` : 'Ninguna seleccionada'}</strong>
          </p>

          <button type="submit" disabled={!tareaElegida}>
            Confirmar eliminación
          </button>
        </form>
      </div>
    </main>
  )
}

export default EliminarTarea
