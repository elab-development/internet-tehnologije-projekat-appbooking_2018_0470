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
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
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
          {photos.map((photo, i) => (
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