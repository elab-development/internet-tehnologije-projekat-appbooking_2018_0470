import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../komponente/header/Header"
import NavBar from "../../komponente/navBar/NavBar"
import "./hoteli.css"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MailLista from "../../komponente/mailLista/MailLista";
import Footer from "../../komponente/footer/Footer";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const Hoteli = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);


  const photos = [
    {
      src: "/slike/hoteli/dnevni.jpg",
    },
    {
      src: "/slike/hoteli/trpezarija.jpg",
    },
    {
      src: "/slike/hoteli/trpezarija1.jpg",
    },
    {
      src: "/slike/hoteli/kupatilo.jpg",
    },
    {
      src: "/slike/hoteli/spavaca.jpg",
    },
    {
      src: "/slike/hoteli/trpezarija2.jpg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };
  const [filter, setFilter] = useState("");

  const filteredPhotos = photos.filter((photo) =>
    photo.src.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };



  return (
    <div>
    <NavBar/>
    <Header type="list" />
    <div className="hotelContainer">
      {open && 
      <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")}/>

      </div>}
      <div className="hotelWrapper">
         <div className="filterWrapper">
            <label>Filtriraj po slici:</label>
            <input
              type="text"
              value={filter}
              onChange={handleFilterChange}
              placeholder="Pretraži"
            />
          </div>
        <button className="bookNow">Rezervišite odmah!</button>
        <h1 className="hotelTitle">Grand Hotel</h1>
        <div className="hotelAddress">
          <FontAwesomeIcon icon={faLocationDot}/>
          <span>Elton St 125 New York</span>
        </div>
        <span className="hotelDistance">
          Odlična lokacija - 500m od centra
        </span>
        <span className="hotelPriceHighlight">
          Rezervišite boravak preko 11.000 RSD za ovaj objekat i dobijate besplatan taxi od/do aerodroma
        </span>
        <div className="hotelImages">
          {filteredPhotos.map((photo, i) => (
            <div className="hotelImgWrapper" key={i}>
              <img
                onClick={() => handleOpen(i)}
                src={photo.src}
                alt=""
                className="hotelImg"
              />
            </div>
          ))}
        </div>
        <div className="hotelDetails">
          <div className="hotelDetailsTexts">
            <h1 className="hotelTitle">Boravite u centru grada</h1>
            <p className="hotelDesc">
            Nalazi se na 5 minuta hoda od Florianove kapije u Krakovu,
            Tower Street Apartments nudi smeštaj sa klima uređajem i besplatnim bežičnim internetom. 
            Jedinice sadrže parket i imaju potpuno opremljenu kuhinju sa mikrotalasnom pećnicom,
            flat-screen TV-om i privatnim kupatilom sa tušem i fenom za kosu. 
            Takođe se nude frižider, električni čajnik i aparat za kafu. 
            Popularne lokacije u blizini apartmana uključuju Suknenu halu, Glavni trg i Kulu gradske kuće. 
            Najbliži aerodrom je Međunarodni aerodrom "John Paul II" Krakov-Balice, udaljen 16.1 km od Tower Street Apartments,
            a objekat nudi uslugu plaćenog šatl prevoza do aerodroma.
            </p>
          </div>
          <div className="hotelDetailsPrice">
            <h1>Idealno za boravak od 9 noći!</h1>
            <span>
                Smeštena u pravom srcu Krakova, ova nekretnina ima izvrsnu ocenu lokacije 9,8!
            </span>
            <h2>
              <b>13.000RSD</b> (9 noćenja)
            </h2>
            <button>Rezervišite odmah!</button>
          </div>
        </div>
      </div>
      <MailLista />
      <Footer />
    </div>
    </div>
  )
}

export default Hoteli