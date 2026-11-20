

import Tareas from "./paginas/Tareas"
import CrearTarea from "./paginas/CrearTarea"
import EditarTarea from "./paginas/EditarTarea"
import EliminarTarea from "./paginas/EliminarTarea"



import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App(){

  return (
    <>


   
    <BrowserRouter>
      

      <Routes>
        
        <Route path="/Tareas" element={<Tareas/>} />
        <Route path="/CrearTarea" element={<CrearTarea/>} />
        <Route path="/EditarTarea" element={<EditarTarea/>} />
        <Route path="/EliminarTarea" element={<EliminarTarea/>} />
      </Routes>
    
    
    </BrowserRouter>
    </>
  )
}


export default App