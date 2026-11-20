import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {

    const [correo, setCorreo] = useState("")
    cosnt [pass, setPass] = useState("")
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
                   <form>
                       <input

                        />
                        <input

                       />
                       <button type="submit"></button>
                   </form>
               </div>
            </div>
        </main>
    )


}

export default Login