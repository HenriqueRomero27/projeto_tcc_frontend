import { BrowserRouter as Router, Route, Routes as ReactRoutes} from "react-router-dom"
import Home from "./pages/Home/Home"
import FindPet from "./pages/FindPet/FindPet"
import Marketplace from "./pages/Marketplace/Marketplace"

export const Routes = () => {
    return(
        <Router>
            <ReactRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/findPet" element={<FindPet />} />
                <Route path="/marketplace" element={<Marketplace />} />
            </ReactRoutes>
        </Router>
    )
}