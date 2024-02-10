import { Link } from "react-router-dom"
import "./navBar.css"

const NavBar = () => {
  return (
    <div className="navBar">
        <div className="navContainer">
            <span className="logo">mvbooking</span>
            <li className='elementListeNavbar'> <Link to="/">Početna</Link>  </li>
            <li className='elementListeNavbar'><Link to="/hoteli/:id">Hotel</Link> </li>
            <div className="navItems">
                <button className="navButton">Registrujte se</button>
                <button className="navButton">Ulogujte se</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar