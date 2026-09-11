import './Navbar.css'

function Navbar(){
    return(
       <nav className='navbar'>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Technology</a>
                </li>
                <li>
                    <a href="#">Proyect</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
       </nav> 
    )
}

export default Navbar