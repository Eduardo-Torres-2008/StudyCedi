import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/TareasContext'
import Tareas from "./paginas/Tareas"
import CrearTarea from "./paginas/CrearTarea"
import EditarTarea from "./paginas/EditarTarea"
import EliminarTarea from "./paginas/EliminarTarea"
import Login from "./paginas/Login"
import Inicio from "./paginas/Inicio"
import Materias from "./paginas/Materias"
import Avisos from "./paginas/Avisos"
import Horario from "./paginas/Horario"
import EditarAvisos from "./paginas/EditarAvisos"
import Header from "./componentes/Header"
import './App.css'

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Materias" element={<Materias />} />
          <Route path="/Avisos" element={<Avisos />} />
          <Route path="/Horario" element={<Horario />} />
          <Route path="/Tareas" element={<Tareas />} />
          <Route path="/CrearTarea" element={<CrearTarea />} />
          <Route path="/EditarTarea" element={<EditarTarea />} />
          <Route path="/EliminarTarea" element={<EliminarTarea />} />
          <Route path="/EditarAvisos" element={<EditarAvisos />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
