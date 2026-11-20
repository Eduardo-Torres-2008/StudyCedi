import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const tareasFalsas = [
  { id: 1, texto: 'Mesa CMEM' },
  { id: 2, texto: 'Terminar el proyecto de React' },
  { id: 3, texto: 'Proyecto TDAD' }
]

function EditarTarea() {
  const [info, setInfo] = useState('')
  const [sele, setSele] = useState('')
  const [tareaElegida, setTareaElegida] = useState(null)
  const navigate = useNavigate()

  function choosen(evento) {
    evento.preventDefault() // Con paréntesis para evitar recarga

    // Restamos 1 porque el usuario escribe 1, 2 o 3, pero el arreglo empieza en 0
    const indice = Number(sele) - 1
    const encontrada = tareasFalsas[indice]

    if (encontrada) {
      setTareaElegida(encontrada)
      setInfo(encontrada.texto) // Opcional: pone el texto actual en el input para editarlo
    } else {
      alert('Esa tarea no existe, elige un número del 1 al 3')
    }
  }

  function enviarTarea(evento) {
    evento.preventDefault()

  

    setInfo('')
    navigate('/Tareas')
  }

  return (
    <main className="Contenedor">
      <div className="Concuchara">
        {/* Primer formulario: elegir por número */}
        <form onSubmit={choosen}>
          <label htmlFor="num-tarea">¿Qué tarea?</label>
          <p>Tarea 1: {tareasFalsas[0].texto}</p>
          <p>Tarea 2: {tareasFalsas[1].texto}</p>
          <p>Tarea 3: {tareasFalsas[2].texto}</p>

          <input
            id="num-tarea"
            type="number"
            min="1"
            max={tareasFalsas.length}
            value={sele}
            onChange={(evento) => setSele(evento.target.value)}
          />
          <button type="submit">Seleccionar</button>
        </form>

        {/* Segundo formulario: editar el texto */}
        <form onSubmit={enviarTarea}>
          <label htmlFor="tarea-input">Editar Tarea</label>

          {/* El signo '?' evita que se rompa si aún no hay tarea elegida */}
          <p>Tarea original: {tareaElegida ? tareaElegida.texto : 'Ninguna seleccionada'}</p>

          <input
            id="tarea-input"
            type="text"
            value={info}
            onChange={(evento) => setInfo(evento.target.value)}
          />
          <button type="submit">Guardar cambios</button>
        </form>
      </div>
    </main>
  )
}

export default EditarTarea