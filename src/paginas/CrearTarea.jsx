import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTareas, MATERIAS_DISPONIBLES } from '../context/TareasContext'

function CrearTarea() {
  const [info, setInfo] = useState('')
  const [fecha, setFecha] = useState('')
  const [materia, setMateria] = useState(MATERIAS_DISPONIBLES[0])

  const { agregarTarea } = useTareas()
  const navigate = useNavigate()

  function enviarTarea(evento) {
    evento.preventDefault()
    if (!info.trim() || !fecha) return

    agregarTarea(info, fecha, materia)
    setInfo('')
    setFecha('')
    navigate('/Tareas')
  }

  return (
    <main className="Contenedor">
      <div className="Concuchara">
        <form onSubmit={enviarTarea}>
          <label htmlFor="tarea-input">Tarea</label>
          <input
            id="tarea-input"
            type="text"
            value={info}
            onChange={(evento) => setInfo(evento.target.value)}
            required
          />

          <label htmlFor="materia-input">Materia</label>
          <select
            id="materia-input"
            value={materia}
            onChange={(evento) => setMateria(evento.target.value)}
          >
            {MATERIAS_DISPONIBLES.map((mat) => (
              <option key={mat} value={mat}>{mat}</option>
            ))}
          </select>

          <label htmlFor="fecha-input">Fecha de entrega</label>
          <input
            id="fecha-input"
            type="date"
            value={fecha}
            onChange={(evento) => setFecha(evento.target.value)}
            required
          />

          <button type="submit">Publicar</button>
        </form>
      </div>
    </main>
  )
}

export default CrearTarea
