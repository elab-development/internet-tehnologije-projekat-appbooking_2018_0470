import "./pretrazivanje.css"

const Pretrazivanje = () => {
  return (
    <div className="searchItem">
    <img src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
    alt="" 
    className="siImg" />
     <div className="siDesc">
    <h1 className="siTitle">Tower Street Apartments</h1>
    <span className="siDistance">500m od centra</span>
    <span className="siTaxiOp">Besplatan prevoz od/do aerodroma</span>
    <span className="siSubtitle">
      Studio Apartman sa klimom
    </span>
    <span className="siFeatures">
      Čitav studio • 1 kupatilo • 21m² 1 krevet
    </span>
    <span className="siCancelOp">Besplatno otkazivanje</span>
    <span className="siCancelOpSubtitle">
        Možete otkazati kasnije, zato iskoristite ovu odličnu cenu danas!
    </span>
  </div>
  <div className="siDetails">
    <div className="siRating">
        <span>Sjajan</span>
        <button>8.9</button>
    </div>
    <div className="siDetailTexts">
      <span className="siPrice">11.000 RSD</span>
      <span className="siTaxOp">+ takse i naknade</span>
      <button className="siCheckButton">Prikaži raspoloživost</button>
    </div>
  </div>
</div>
  )
}

export default Pretrazivanje