import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/TareasContext'; 

function Login() {
  const [correo, setCorreo] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();
  const { login } = useApp();

  function iniciarSesion(evento) {
    evento.preventDefault();

    const resultado = login(correo.trim());

    if (resultado.exito) {
      setCorreo('');
      setPass('');
      navigate(resultado.ruta);
    } else {
      alert('Correo no válido');
    }
  }

  return (
    <main>
      <div>
        <h2>Inicio de sesión</h2>
        <div>
          <form onSubmit={iniciarSesion}>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={correo}
              onChange={(evento) => setCorreo(evento.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={pass}
              onChange={(evento) => setPass(evento.target.value)}
              required
            />
            <button type="submit">Iniciar Sesión</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
