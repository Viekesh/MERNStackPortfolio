import { Route, Routes } from "react-router-dom"
import LandingPage from "../Pages/LandingPage/LandingPage"
import Projects from "../Projects/Projects";
import WeatherWatch from "../Projects/WeatherWatch/WeatherWatch";



const ReactRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/WeatherWatch" element={<WeatherWatch />} />
            </Routes>
        </>
    )
}



export default ReactRoutes;