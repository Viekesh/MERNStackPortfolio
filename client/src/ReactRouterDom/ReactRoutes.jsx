import { Route, Routes } from "react-router-dom"
import LandingPage from "../Pages/LandingPage/LandingPage"
import Projects from "../Projects/Projects";
import WeatherWatch from "../Projects/WeatherWatch/WeatherWatch";
import WeatherCheck from "../Projects/WeatherWatch/WeatherCheck";
import ToDoList from "../Projects/ToDoList/ToDoList";



const ReactRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/WeatherWatch" element={<WeatherWatch />} />
                <Route path="/WeatherCheck" element={<WeatherCheck />} />
                <Route path="/ToDoList" element={<ToDoList />} />
            </Routes>
        </>
    )
}



export default ReactRoutes;