
import Tareas from "./paginas/Tareas"
import CrearTarea from "./paginas/CrearTarea"
import EditarTarea from "./paginas/EditarTarea"
import EliminarTarea from "./paginas/EliminarTarea"
import Login from "./paginas/login"
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from "./paginas/inicio"
import Materias from "./paginas/Materias"
import Avisos from "./paginas/Avisos"
import Horario from "./paginas/Horario"
import Header from "./componentes/Header"


function App(){

  return (
    <>

    <BrowserRouter>
      <Header />
      <Routes>
        
        <Route path="/" element={<Inicio/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Materias" element={<Materias/>} />
        <Route path="/Avisos" element={<Avisos/>} />
        <Route path="/Horario" element={<Horario/>} />
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