import "./nekretnineLista.css"

const NekretnineLista = () => {
  return (
    <div className="pList">
        <div className="pListItem">
          <img
            src="/slike/home2.jpeg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Hoteli</h1>
            <h2>233 hotela</h2>
          </div>
        </div>
        <div className="pListItem">
          <img
            src="/slike/apartman4.png"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Apartmani</h1>
            <h2>2331 apartmana</h2>
          </div>
        </div>
        <div className="pListItem">
          <img
            src="/slike/resort4.png"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Rizortovi</h1>
            <h2>2331 rizortova</h2>
          </div>
        </div>
        <div className="pListItem">
          <img
            src="/slike/vila4.png"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Vile</h1>
            <h2>2331 vila</h2>
          </div>
        </div>
        <div className="pListItem">
          <img
            src="/slike/kolibe4.png"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Kolibe</h1>
            <h2>2331 koliba</h2>
          </div>
        </div>
      </div>
  )
}

export default NekretnineLista