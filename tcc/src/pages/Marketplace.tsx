import "../root.css"
import "./Marketplace.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from "../assets/bannerMarketplace.svg"
import Toys from "../assets/toys.svg"
import Products from "../assets/products.svg"

function Marketplace() {
    return (
        <>
            {/* <Header /> */}
            <div className="marketplace_container">
                <img src={Banner} alt="Banner" id="banner" />
                <div className="sections">
                    <div className="card" id="toys_card">
                        <h4>Brinquedos</h4>
                        <a href="">Explorar</a>
                        <img src={Toys} alt="Toys" id="img_toys" />
                    </div>
                    <div className="card" id="products_card">
                        <h4>Brinquedos</h4>
                        <a href="">Explorar</a>
                        <img src={Products} alt="Products" id="img_products" />
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Marketplace