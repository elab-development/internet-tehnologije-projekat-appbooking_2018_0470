import { useState } from "react";
import Header from "../../komponente/header/Header"
import NavBar from "../../komponente/navBar/NavBar"
import "./lista.css"
import { useFormAction, useLocation } from "react-router-dom";
import {format} from "date-fns";
import { DateRange } from "react-date-range";
import Pretrazivanje from "../../komponente/pretrazivanje/Pretrazivanje";

const Lista = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <NavBar/>
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <div className="lsTitle">Traži</div>
            <div className="lsItem">
              <label>Destinacija</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Datum</label>
             <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].startDate, "MM/dd/yyyy")}`}</span>
             {openDate && (<DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
              />)}
            </div>
            <div className="lsItem">
            <label>Opcije</label>
            <div className="lsOptions">
            <div className="lsOptionItem">
                <span className="lsOptionText">Min cena <small>po noćenju</small></span>
                <input type="number" className="lsOptionInput" />
            </div>
            <div className="lsOptionItem">
                  <span className="lsOptionText">Max cena <small>po noćenju</small></span>
                  <input type="number" className="lsOptionInput" />
            </div>
            <div className="lsOptionItem">
                  <span className="lsOptionText">Odrasli</span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.odrasli}/>
              </div>
              <div className="lsOptionItem">
                  <span className="lsOptionText">Deca</span>
                  <input type="number" min={0} className="lsOptionInput" placeholder={options.deca}/>
              </div>
              <div className="lsOptionItem">
                  <span className="lsOptionText">Soba</span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.jedinica} />
              </div>
            </div>
            </div>
            <button>Traži</button>
          </div>
          <div className="listResult">
          <Pretrazivanje/>
          <Pretrazivanje/>
          <Pretrazivanje/>
          <Pretrazivanje/>
          <Pretrazivanje/>
          <Pretrazivanje/>
          <Pretrazivanje/>
          </div>
     
        </div>
      </div>

    </div>
  )
}

export default Lista