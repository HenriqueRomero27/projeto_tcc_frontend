import { BrowserRouter as Router, Route, Routes as ReactRoutes} from "react-router-dom"
// import Home from "./pages/Home/Home"
import FindPet from "./pages/FindPet/FindPet"
import Marketplace from "./pages/Marketplace/Marketplace"
import Login from "./pages/Login/Login"
import Doadores from "./pages/Doadores/Doadores"
import CreateAccountUser from "./pages/CreateAccountUser/CreateAcocuntUser"
import Perfil from "./pages/PerfilUser/Perfil.tsx"

export const Routes = () => {
    return(
        <Router>
            <ReactRoutes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/animal" element={<FindPet />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/doadores" element={<Doadores />} />
                <Route path="/create-account/user" element={<CreateAccountUser />} />
                <Route path="/perfil" element={<Perfil />} />
            </ReactRoutes>
        </Router>
    )
}