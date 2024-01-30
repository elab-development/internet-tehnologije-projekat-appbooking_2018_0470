import Header from "../../komponente/header/Header"
import MailLista from "../../komponente/mailLista/MailLista"
import NavBar from "../../komponente/navBar/NavBar"
import NekretnineLista from "../../komponente/nekretnineLista/NekretnineLista"
import Osobine from "../../komponente/osobine/Osobine"
import PodesavanjaO from "../../komponente/podesavanjaO/PodesavanjaO"
import "./pocetna.css"

const Pocetna = () => {
  return (
    <div>
       <NavBar />
       <Header />
       <div className="homeContainer">
        <Osobine/>
        <h1 className="homeTitle">Pretražite po vrsti objekta</h1>
        <NekretnineLista/>
        <h1 className="homeTitle">Privatni smeštaji kojima su gosti oduševljeni</h1>
        <PodesavanjaO/>
        <MailLista />
       </div>
    </div>
  )
}

export default Pocetna