import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {

    const [correo, setCorreo] = useState("")
    const [pass, setPass] = useState("")
    const navigate = useNavigate()

    function iniciarSesion(evento){
        evento.preventDefault()
        setCorreo("")
        setPass("")
        navigate("/")
    }

    return(
        <main>
            <div>
               <h2>Inicio de sesion</h2>
               <div>
                   <form onSubmit={iniciarSesion}>
                       <input
                            type='email'
                            placeholder='Correo electronico'
                            value={correo}
                            onChange={(evento) => setCorreo(evento.target.value)}
                        />
                        <input
                            type='password'
                            placeholder='Contrasaeña'
                            value={pass}
                            onChange = {(evento) => setPass (evento.target. value)}
                       />
                       <button type="submit">Iniciar Sesion</button>
                   </form>
               </div>
            </div>
        </main>
    )


}

export default Login