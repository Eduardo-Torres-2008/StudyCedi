import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const MATERIAS_DISPONIBLES = [
  'CMEM', 'TDAD', 'ARCM', 'MA', 'AAD', 'TW', 'CS', 'DSW', 'MCAI', 'MTDF', 'OTRAS'
];

const TAREAS_INICIALES = [
  { id: 1, texto: 'Mesa CMEM', fecha: '2026-11-26', materia: 'CMEM' },
  { id: 2, texto: 'Terminar el proyecto de React', fecha: '2026-11-26', materia: 'DSW' },
  { id: 3, texto: 'Proyecto TDAD', fecha: '2026-11-26', materia: 'TDAD' }
];

const AVISOS_INICIALES = [
  {
    id: 1,
    titulo: "Cambio de fecha de examen",
    descripcion: "El examen de Física se cambió para el día 2 de diciembre.",
    fecha: "25 de noviembre, 2026",
    categoria: "Cambio de fecha: ",
    tipo: "cambio",
  },
  {
    id: 2,
    titulo: "Aviso académico",
    descripcion: "Se recuerda a todos los alumnos revisar el material de estudio publicado para las próximas evaluaciones.",
    fecha: "24 de noviembre, 2026",
    categoria: "Importante: ",
    tipo: "importante",
  },
];

export function AppProvider({ children }) {
 
  const [usuario, setUsuario] = useState(null); 

    function login(correo) {
    if (correo.endsWith('@portalcedi.edu.mx')) {
      setUsuario({ correo, rol: 'alumno' });
      return { exito: true, ruta: '/' }; 
    } 
    if (correo.endsWith('@cedi.edu.mx')) {
      setUsuario({ correo, rol: 'maestro' });
      return { exito: true, ruta: '/' }; 
    }
    return { exito: false };
  }


  function logout() {
    setUsuario(null);
  }

 
  const [tareas, setTareas] = useState(TAREAS_INICIALES);

  function pendientesPorMateria(materia) {
    return tareas.filter((t) => t.materia === materia);
  }

  function agregarTarea(texto, fecha, materia) {
    const nueva = { id: Date.now(), texto, fecha, materia };
    setTareas([...tareas, nueva]);
  }

  function editarTarea(id, nuevoTexto, nuevaFecha, nuevaMateria) {
    setTareas(
      tareas.map((t) =>
        t.id === id
          ? { ...t, texto: nuevoTexto, fecha: nuevaFecha, materia: nuevaMateria }
          : t
      )
    );
  }

  function eliminarTarea(id) {
    setTareas(tareas.filter((t) => t.id !== id));
  }


  const [avisos, setAvisos] = useState(AVISOS_INICIALES);

  function agregarAviso(titulo, descripcion, tipo) {
    
    if (usuario?.rol !== 'maestro') return;

    const fechaActual = new Date().toLocaleDateString('es-MX', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const nuevoAviso = {
      id: Date.now(),
      titulo,
      descripcion,
      fecha: fechaActual,
      categoria: tipo === 'cambio' ? 'Cambio de fecha: ' : 'Importante: ',
      tipo, 
    };

    setAvisos([nuevoAviso, ...avisos]);
  }

  return (
    <AppContext.Provider
      value={{
        usuario,
        login,
        logout,
        esMaestro: usuario?.rol === 'maestro',
        esAlumno: usuario?.rol === 'alumno',
        tareas,
        pendientesPorMateria,
        agregarTarea,
        editarTarea,
        eliminarTarea,
        avisos,
        agregarAviso,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
export const useTareas = useApp;
