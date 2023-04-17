import { Router,Routes,Route,BrowserRouter } from "react-router-dom";
import AboutMe from "../Pages/AboutMe";

const RouteList = () =>{
        <BrowserRouter>
            <Router>
                <Routes path='/about-me' element={<AboutMe />} />
            </Router>
        </BrowserRouter>
};

export default RouteList();