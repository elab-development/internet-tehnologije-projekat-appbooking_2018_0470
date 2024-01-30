import "./navBar.css"

const NavBar = () => {
  return (
    <div className="navBar">
        <div className="navContainer">
            <span className="logo">mvbooking</span>
            <div className="navItems">
                <button className="navButton">Registrujte se</button>
                <button className="navButton">Ulogujte se</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar