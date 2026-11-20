import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTareas, MATERIAS_DISPONIBLES } from '../context/TareasContext'

function EditarTarea() {
  const { tareas, editarTarea } = useTareas()
  const [info, setInfo] = useState('')
  const [fecha, setFecha] = useState('')
  const [materia, setMateria] = useState('')
  const [sele, setSele] = useState('')
  const [tareaElegida, setTareaElegida] = useState(null)
  const navigate = useNavigate()

  function choosen(evento) {
    evento.preventDefault()
    const indice = Number(sele) - 1
    const encontrada = tareas[indice]

    if (encontrada) {
      setTareaElegida(encontrada)
      setInfo(encontrada.texto)
      setFecha(encontrada.fecha)
      setMateria(encontrada.materia)
    } else {
      alert(`Esa tarea no existe, elige un número del 1 al ${tareas.length}`)
    }
  }

  function enviarTarea(evento) {
    evento.preventDefault()
    if (!tareaElegida) return

    editarTarea(tareaElegida.id, info, fecha, materia)
    setInfo('')
    setFecha('')
    setMateria('')
    navigate('/Tareas')
  }

  return (
    <main className="Contenedor">
      <div className="Concuchara">
        <form onSubmit={choosen}>
          <label htmlFor="num-tarea">¿Qué tarea?</label>
          {tareas.map((t, index) => (
            <p key={t.id}>
              Tarea {index + 1}: [{t.materia}] {t.texto} - ({t.fecha})
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

        <form onSubmit={enviarTarea}>
          <label htmlFor="tarea-input">Editar Tarea</label>
          <p>Tarea original: {tareaElegida ? tareaElegida.texto : 'Ninguna seleccionada'}</p>

          <input
            id="tarea-input"
            type="text"
            value={info}
            onChange={(evento) => setInfo(evento.target.value)}
            disabled={!tareaElegida}
            required
          />

          <label htmlFor="materia-edit">Materia</label>
          <select
            id="materia-edit"
            value={materia}
            onChange={(evento) => setMateria(evento.target.value)}
            disabled={!tareaElegida}
          >
            {MATERIAS_DISPONIBLES.map((mat) => (
              <option key={mat} value={mat}>{mat}</option>
            ))}
          </select>

          <label htmlFor="fecha-edit">Fecha</label>
          <input
            id="fecha-edit"
            type="date"
            value={fecha}
            onChange={(evento) => setFecha(evento.target.value)}
            disabled={!tareaElegida}
            required
          />

          <button type="submit" disabled={!tareaElegida}>Guardar cambios</button>
        </form>
      </div>
    </main>
  )
}

export default EditarTarea
