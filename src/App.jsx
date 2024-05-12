

import { BrowserRouter,Routes,Route } from "react-router-dom";


import Home from "./Components/Home";
import Sucess from "./Components/Sucess";


const App = () => {



  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={< Home />} ></Route>
        <Route path="/Sucess" element={< Sucess/>} ></Route>


        </Routes>
    
    </BrowserRouter>
     
    </>
  );
};

export default App;
