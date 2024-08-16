import { BrowserRouter as Router, Route, Routes as ReactRoutes} from "react-router-dom"
import Home from "./pages/Home/Home"
import FindPet from "./pages/FindPet/FindPet"
import Marketplace from "./pages/Marketplace/Marketplace"
import Login from "./pages/Login/Login"

export const Routes = () => {
    return(
        <Router>
            <ReactRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/animal" element={<FindPet />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/login" element={<Login />} />
<<<<<<< HEAD
=======
                {/* <Route path="/create-account" element={<CreateAccount />} /> */}
>>>>>>> 4f4bdac (fix errors - 16/08)
            </ReactRoutes>
        </Router>
    )
}