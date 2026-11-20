


import {useNavigate} from 'react-router-dom'



function Tareas(){

        const navigate = useNavigate()

        const tareasFalsas = [
  { id: 1, texto: 'Mesa CMEM' },
  { id: 2, texto: 'Terminar el proyecto de React' },
  { id: 3, texto: 'Proyecto TDAD' }
]
    
    return (
        <main>

            <h1> Tareas</h1>
            
            <button onClick={() => navigate('/CrearTarea')}>Crear Tarea</button>
            <button onClick={() => navigate("/EditarTarea")}> Editar Tarea </button>
            <button onClick={() => navigate("/EliminarTarea")}> Eliminar Tarea </button>


            <p>Tarea 1: {tareasFalsas[0].texto}</p>
          <p>Tarea 2: {tareasFalsas[1].texto}</p>
          <p>Tarea 3: {tareasFalsas[2].texto}</p>

            

        </main>
    )


}

export default Tareas