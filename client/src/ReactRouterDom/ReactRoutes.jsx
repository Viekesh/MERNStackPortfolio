import { Route, Routes } from "react-router-dom"
import LandingPage from "../Pages/LandingPage/LandingPage"
import Projects from "../Projects/Projects";
import ContextAPI from "../Components/Tutorials/ContextAPI/ContextAPI";



const ReactRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/ContextAPI" element={<ContextAPI />} />
            </Routes>
        </>
    )
}



export default ReactRoutes;