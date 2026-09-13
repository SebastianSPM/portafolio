import './Navbar.css'

function Navbar(){
    return(
       <nav className='navbar'>
            <ul>
                <li>
                    <a href="#HeroSection">Inicio</a>
                </li>
                <li>
                    <a href="#AboutMe">Acerca de mi</a>
                </li>
                <li>
                    <a href="#Technology">Tecnologia</a>
                </li>
                <li>
                    <a href="#Proyects">Proyectos</a>
                </li>
                <li>
                    <a href="#Contact">Contacto</a>
                </li>
            </ul>
       </nav> 
    )
}

export default Navbar