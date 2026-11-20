import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CrearTarea() {
  const [info, setInfo] = useState('')
  const navigate = useNavigate()

  function enviarTarea(evento) {
    evento.preventDefault()


    
    setInfo('')
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
          />
          <button type="submit">publicar</button>
        </form>
      </div>
    </main>
  )
}

export default CrearTarea