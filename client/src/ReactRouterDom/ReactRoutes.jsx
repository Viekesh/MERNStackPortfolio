import { Route, Routes } from "react-router-dom"
import LandingPage from "../Pages/LandingPage/LandingPage"
import Projects from "../Projects/Projects";



const ReactRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/Projects" element={<Projects />} />
            </Routes>
        </>
    )
}



export default ReactRoutes;