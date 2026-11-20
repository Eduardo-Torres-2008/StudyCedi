import './Header.css'
import { Link } from 'react-router-dom'
import { UserRound, House } from 'lucide-react'





function Header(){
    return(
        <header>
            <nav>
            <Link to ="/"><House size={25} color="white"/></Link>
                <Link to="/Tareas"><b>Tareas</b></Link>
                <Link to="/Horario"><b>Horario</b></Link>
                <Link to="/Materias"><b>Materias</b></Link>
                <Link to ="/Avisos"><b>Avisos</b></Link>
                <Link to="/Login"><UserRound size={25} color="white" /></Link>
            </nav>
        </header>
    );
}

export default Header;

