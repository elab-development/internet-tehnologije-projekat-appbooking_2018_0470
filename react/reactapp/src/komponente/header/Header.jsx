import "./header.css"
import {faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { useState } from "react";
import {format} from "date-fns";

const Header = ({type}) => {
  const [openDate, setOpenDate]=useState(false);
  const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      ]);
      const [openOptions, setOpenOptions]= useState(false);
      const [options, setOptions]= useState({
        odrasli:1,
        deca: 0,
        jedinica: 1,
      });

      const handleOption = (name, operation) => {
        setOptions((prev) => {
          return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
          };
        });
      };
  return (
    <div className="header">
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem active">
                   <FontAwesomeIcon icon={faBed} />
                   <span>Smeštaj</span>

                </div>
                <div className="headerListItem">
                   <FontAwesomeIcon icon={faPlane} />
                   <span>Letovi</span>
                </div>
                <div className="headerListItem">
                   <FontAwesomeIcon icon={faCar} />
                   <span>Iznajmljivanje automobila</span>
                </div>
                <div className="headerListItem">
                   <FontAwesomeIcon icon={faBed} />
                   <span>Atrakcije</span>
                </div>
                <div className="headerListItem">
                   <FontAwesomeIcon icon={faTaxi} />
                   <span>Taxi od/do aerodroma</span>
                </div>
            </div>
            {type !=="list" &&
            <><h1 className="headerTitle">Istražujte više, trošite manje!</h1>
            <p className="headerDesc">
             Iskoristite sjajne ponude na našoj aplikaciji za rezervaciju i putujte pametno. Vaše avanture su na dohvat ruke, a uštede čekaju da budu iskusene. 
             Pronađite idealan smeštaj i uživajte u putovanjima bez brige o budžetu.
            </p>
            <button className="headerBtn">Ulogujte se / Registrujte se</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} classname="headerIcon" />
                    <input 
                     type="text" 
                     placeholder="Gde idete?" 
                     className="headerSearchInput"
                     />

                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} classname="headerIcon" />
                    <span onClick={()=>setOpenDate(!openDate)}  className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} do ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                    {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
/>}
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} classname="headerIcon" />
                    <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.odrasli} odrasli · ${options.deca} deca · ${options.jedinica} jedinica `}</span>
                      {openOptions && <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Odrasli</span>
                            <div className="optionCounter">
                            <button 
                            disabled={options.odrasli <=1} 
                            className="optionCounterButton" 
                            onClick={()=>handleOption("odrasli", "d")}>-</button>
                            <span className="optionCounterNumber">{options.odrasli}</span>
                            <button className="optionCounterButton" onClick={()=>handleOption("odrasli", "i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Deca</span>
                            <div className="optionCounter">
                            <button
                             disabled={options.deca <=0} 
                             className="optionCounterButton" onClick={()=>handleOption("deca", "d")}>-</button>
                            <span className="optionCounterNumber">{options.deca}</span>
                            <button className="optionCounterButton" onClick={()=>handleOption("deca", "i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Jedinica</span>
                            <div className="optionCounter">
                            <button 
                            disabled={options.jedinica <=1} 
                            className="optionCounterButton" onClick={()=>handleOption("jedinica", "d")}>-</button>
                            <span className="optionCounterNumber">{options.jedinica}</span>
                            <button className="optionCounterButton" onClick={()=>handleOption("jedinica", "i")}>+</button>
                            </div>
                        </div>
                      </div>}
                </div>
                <div className="headerSearchItem">
                    <button className="headerBtn">Trazi</button>
                </div>
            </div></>}
        </div>
    </div>
  )
}

export default Header