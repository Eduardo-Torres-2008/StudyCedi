import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const tareasFalsas = [
  { id: 1, texto: 'Mesa CMEM' },
  { id: 2, texto: 'Terminar el proyecto de React' },
  { id: 3, texto: 'Proyecto TDAD' }
]

function EliminarTarea() {

  const [tareas, setTareas] = useState(tareasFalsas)
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

    const listaActualizada = tareas.filter((tarea) => tarea.id !== tareaElegida.id)
    setTareas(listaActualizada)

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
              Tarea {index + 1}: {tarea.texto}
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
            Tarea a eliminar: <strong>{tareaElegida ? tareaElegida.texto : 'Ninguna seleccionada'}</strong>
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