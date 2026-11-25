import { useState } from 'react';
import { useApp } from '../context/TareasContext'; 
import './Avisos.css';

function Avisos() {
  const { avisos, agregarAviso, esMaestro } = useApp();

  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipo, setTipo] = useState('importante');

  function handleCrearAviso(e) {
    e.preventDefault();
    if (!titulo.trim() || !descripcion.trim()) return;

    agregarAviso(titulo, descripcion, tipo);
    setTitulo('');
    setDescripcion('');
  }

  return (
    <main className="avisos-container">
      <h1>Avisos</h1>
      <p className="subtitulo">
        Mantente al día con las novedades de tu grupo.
      </p>
      
      {esMaestro && (
        <form className="aviso-form" onSubmit={handleCrearAviso}>
          <h3>Publicar nuevo aviso</h3>
          <input
            type="text"
            placeholder="Título del aviso"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="importante">Importante</option>
            <option value="cambio">Cambio de fecha</option>
          </select>
          <textarea
            placeholder="Descripción del aviso..."
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
          <button type="submit">Publicar aviso</button>
        </form>
      )}

      <section className="avisos-lista">
        {avisos.map((aviso) => (
          <article className="aviso-card" key={aviso.id}>
            <div className="aviso-header">
              <span className={`categoria ${aviso.tipo}`}>
                {aviso.categoria}
              </span>
              <span className="fecha">{aviso.fecha}</span>
            </div>

            <h3>{aviso.titulo}</h3>
            <p>{aviso.descripcion}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Avisos;
