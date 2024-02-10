import { useState } from "react";
import "./nekretnineLista.css"

const NekretnineLista = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;


  const nekretnineData = [
    { id: 1, type: "Hoteli", count: 233, image: "/slike/home2.jpeg" },
    { id: 2, type: "Apartmani", count: 2331, image: "/slike/apartman4.png" },
    { id: 3, type: "Rizortovi", count: 2331, image: "/slike/resort4.png" },
    { id: 4, type: "Vile", count: 2331, image: "/slike/vila4.png" },
    { id: 5, type: "Kolibe", count: 2331, image: "/slike/kolibe4.png" },
    { id: 6, type: "Bungalovi", count: 26, image: "/slike/bungalovi.jpg" },
    
  ];


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = nekretnineData.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className="pList">
           {currentItems.map((item, index) => (

            <div className="pListItem" key={index}>
          <img
            src={item.image}
            alt=""
            className="pListImg"
            />
          <div className="pListTitles">
            <h1>{item.type}</h1>
            <h2>{`${item.count} ${item.type.toLowerCase()}`}</h2>
          </div>
        </div>
        
        ))}
        <div className="paginationButtons">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Prethodna
        </button>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={indexOfLastItem >= nekretnineData.length}>
          Sledeca
        </button>
      </div>
      </div>
  )
}

export default NekretnineLista