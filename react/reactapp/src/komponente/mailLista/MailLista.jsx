import "./mailLista.css"
import Axios from "axios";
import { useEffect, useState } from "react";




const MailLista = () => {

  
  const [message, setMessage] = useState("");
  const fetchRandomQuote = async () => {
    try {
      const response = await Axios.get("https://api.quotable.io/random");
      const randomQuote = response.data.content;
      setMessage(randomQuote);
    } catch (error) {
      console.error("Error fetching random quote:", error);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);
  

  return (
    <div className="mail">
       
      <h1 className="mailTitle">Uštedite vreme, uštedite novac!</h1>
       <p>{message}</p>
     <div className="mailButton">
      <button onClick={fetchRandomQuote}>Klikni me!</button>
      </div>
      <span className="mailDesc">Prijavite se i poslaćemo vam najbolje ponude</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Vaša adresa e-pošte" />
        <button>Prijavite se</button>
      </div>
    </div>
  )
}

export default MailLista