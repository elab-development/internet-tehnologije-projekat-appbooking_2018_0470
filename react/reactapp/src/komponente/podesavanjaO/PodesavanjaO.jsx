import "./podesavanjaO.css"

const PodesavanjaO = () => {
  return (
    <div className="fp">
    <div className="fpItem">
      <img
        src="/slike/1.webp"
        alt=""
        className="fpImg"
      />
      <span className="fpName">Aparthotel Stare Miasto</span>
      <span className="fpCity">Old Town, Poljska, Krakov</span>
      <span className="fpPrice">Već od 9.494 RSD</span>
      <div className="fpRating">
        <button>8.7</button>
        <span>Sjajan</span>
      </div>
    </div>
    <div className="fpItem">
      <img
        src="/slike/2.jpg"
        alt=""
        className="fpImg"
      />
      <span className="fpName">Leman Locke</span>
      <span className="fpCity">Tauer Hamlets, Velika Britanija, London</span>
      <span className="fpPrice">Već od 17.206 RSD</span>
      <div className="fpRating">
        <button>8.8</button>
        <span>Sjajan</span>
      </div>
    </div>
    <div className="fpItem">
      <img
        src="/slike/3.webp"
        alt=""
        className="fpImg"
      />
      <span className="fpName">3 Epoques Apartments by Adrez Living</span>
      <span className="fpCity">Prag 01, Češka, Praha 1</span>
      <span className="fpPrice">Već od 7.173 RSD</span>
      <div className="fpRating">
        <button>8.7</button>
        <span>Sjajan</span>
      </div>
    </div>
    <div className="fpItem">
      <img
        src="/slike/4.webp"
        alt=""
        className="fpImg"
      />
      <span className="fpName">Oriente Palace Apartments</span>
      <span className="fpCity">Madrid - Centar, Španija, Madrid</span>
      <span className="fpPrice">Već od 8.048 RSD</span>
      <div className="fpRating">
        <button>9.0</button>
        <span>Izvanredan</span>
      </div>
    </div>
  </div>
  )
}

export default PodesavanjaO