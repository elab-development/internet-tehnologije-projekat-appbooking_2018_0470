import "./mailLista.css"

const MailLista = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Uštedite vreme, uštedite novac!</h1>
      <span className="mailDesc">Prijavite se i poslaćemo vam najbolje ponude</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Vaša adresa e-pošte" />
        <button>Prijavite se</button>
      </div>
    </div>
  )
}

export default MailLista