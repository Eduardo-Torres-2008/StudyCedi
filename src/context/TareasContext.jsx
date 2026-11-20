import { createContext, useState, useContext } from 'react';

const TareasContext = createContext();

export const MATERIAS_DISPONIBLES = [
  'CMEM', 'TDAD', 'ARCM', 'MA', 'AAD', 
  'TW', 'CS', 'DSW', 'MCAI', 'MTDF'
];

const TAREAS_INICIALES = [
  { id: 1, texto: 'Mesa CMEM', fecha: '2026-11-26', materia: 'CMEM' },
  { id: 2, texto: 'Terminar el proyecto de React', fecha: '2026-11-26', materia: 'DSW' },
  { id: 3, texto: 'Proyecto TDAD', fecha: '2026-11-26', materia: 'TDAD' }
];

export function TareasProvider({ children }) {
  const [tareas, setTareas] = useState(TAREAS_INICIALES);

  function agregarTarea(texto, fecha, materia) {
    const nueva = {
      id: Date.now(),
      texto,
      fecha,
      materia
    };
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

  return (
    <TareasContext.Provider
      value={{
        tareas,
        agregarTarea,
        editarTarea,
        eliminarTarea
      }}
    >
      {children}
    </TareasContext.Provider>
  );
}

export const useTareas = () => useContext(TareasContext);