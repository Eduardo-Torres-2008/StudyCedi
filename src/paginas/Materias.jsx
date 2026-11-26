import "./Materias.css"
import { useTareas } from "../context/TareasContext"

function pendientesPorMateria(materia) {
    const { tareas } = useTareas()
    return tareas.filter(tarea => tarea.materia === materia)
}

function Materias(){
    return(
        <main>
            <div className="materias">
                <table>
                    <thead>
                        <tr>
                            <th>Materia</th>
                            <th>Tareas pendientes</th>
                            <th>Correos de profesores</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>TDAD</td>
                            <td>{pendientesPorMateria('TDAD').length}</td>
                            <td>kperez@cedi.edu.mx</td>
                            
                        </tr>
                        <tr>
                            <td>ARCM</td> 
                            <td>{pendientesPorMateria('ARCM').length}</td>
                            <td>icisneros@cedi.edu.mx</td>
                           
                        </tr>
                        <tr>
                            <td>MA</td>
                            <td>{pendientesPorMateria('MA').length} </td>
                            <td>osanchez@cedi.edu.mx</td>
                            
                        </tr>
                        <tr>
                            <td>DSW</td>
                            <td>{pendientesPorMateria('DSW').length}</td>
                            <td>osantollo@cedi.edu.mx</td>
                            
                        </tr>
                        <tr>
                            <td>AAD</td>
                            <td>{pendientesPorMateria('AAD').length}</td>
                            <td>jdelgado@cedi.edu.mx</td>
                            
                        </tr>
                        <tr>
                            <td>CMEM</td>
                            <td>{pendientesPorMateria('CMEM').length}</td>
                            <td>gmacias@cedi.edu.mx</td>
                            
                        </tr>
                        <tr>
                            <td>MCAI</td>
                            <td>{pendientesPorMateria('MCAI').length}</td>
                            <td>khernandez@cedi.edu.mx</td>
                            
                        </tr>
                        <tr>
                            <td>CS</td>
                            <td>{pendientesPorMateria('CS').length}</td>
                            <td>aenciso@cedi.edu.mx</td>
                            
                        </tr>
                        <tr>
                            <td>TW</td>
                            <td>{pendientesPorMateria('TW').length}</td>
                            <td>sbarbedillo@cedi.edu.mx</td>
                            
                        </tr>
                        <tr>
                            <td>MTDF</td>
                            <td>{pendientesPorMateria('MTDF').length}</td>
                            <td>jbalbuena@cedi.edu.mx</td>
                            
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default Materias;