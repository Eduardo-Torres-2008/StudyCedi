import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTareas, MATERIAS_DISPONIBLES } from '../context/TareasContext'
import './crearTarea.css' // Asegúrate de importar tu archivo CSS

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
    <main className="crear-pagina">
      <div className="crear-titulo">
        <h1>Nueva Tarea</h1>
        <p>Completa los datos para agregar una actividad a tu lista.</p>
      </div>

      <div className="crear-contenedor">
        <div className="crear-formulario">
          <h2>Detalles de la actividad</h2>
          <form onSubmit={enviarTarea}>
            <label htmlFor="tarea-input">Tarea</label>
            <input
              id="tarea-input"
              className="crear-input"
              type="text"
              placeholder="Ej. Proyecto CMEM"
              value={info}
              onChange={(evento) => setInfo(evento.target.value)}
              required
            />

            <label htmlFor="materia-input">Materia</label>
            <select
              id="materia-input"
              className="crear-input"
              value={materia}
              onChange={(evento) => setMateria(evento.target.value)}
            >
              {MATERIAS_DISPONIBLES.map((mat) => (
                <option key={mat} value={mat}>
                  {mat}
                </option>
              ))}
            </select>

            <label htmlFor="fecha-input">Fecha de entrega</label>
            <input
              id="fecha-input"
              className="crear-input"
              type="date"
              value={fecha}
              onChange={(evento) => setFecha(evento.target.value)}
              required
            />

            <button type="submit" className="crear-boton">
              Publicar tarea
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default CrearTarea
