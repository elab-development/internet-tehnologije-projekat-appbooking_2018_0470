import {
  createBrowserRouter,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Pocetna from "./stranice/pocetna/Pocetna";
import Lista from "./stranice/lista/Lista";
import Hoteli from "./stranice/hoteli/Hoteli";

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Pocetna/>}/>
        <Route path="/hoteli" element={<Lista/>}/>
        <Route path="/hoteli/:id" element={<Hoteli/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
