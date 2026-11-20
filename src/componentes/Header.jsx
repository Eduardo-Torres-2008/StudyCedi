import './header.css'
import { Link } from 'react-router-dom'
import { UserRound, House } from 'lucide-react'





function Header(){
    return(
        <header>
            <nav>
            <Link to ="/"><House size={25} color="rgb(55, 123, 224)"/></Link>
                <Link to="/Tareas"><b>Tareas</b></Link>
                <Link to="/Horario"><b>Horario</b></Link>
                <Link to="/Materias"><b>Materias</b></Link>
                <Link to ="/Avisos"><b>Avisos</b></Link>
                <Link to="/Login"><UserRound size={25} color="rgb(55, 123, 224)" /></Link>
            </nav>
        </header>
    );
}

export default Header;

