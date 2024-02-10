import "./osobine.css"

const Osobine = () => {
  return (
    <div className="featured">
    <div className="featuredItem">
        <img src="/slike/London1.jpg " alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>London</h1>
            <h2>123 objekata</h2>
        </div>
    </div>
    <div className="featuredItem">
        <img src="/slike/NewYork2.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>New York</h1>
            <h2>543 objekata</h2>
        </div>
    </div>
    <div className="featuredItem">
        <img src="/slike/Dublin3.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>780 objekata</h2>
        </div>
    </div>
</div>

  )
}

export default Osobine