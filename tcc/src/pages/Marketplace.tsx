import "../root.css"
import "./Marketplace.css"
import ProductCard from "../components/ProductCard"
import Banner from "../assets/bannerMarketplace.svg"
import Toys from "../assets/toys.svg"
import Products from "../assets/products.svg"
import Hidradante from "../assets/hidradante.svg"

function Marketplace() {
    return (
        <>
            <div className="marketplace_container">
                <img src={Banner} alt="Banner" id="banner" />
                <div className="sections">
                    <div className="card" id="toys_card">
                        <h4>Brinquedos</h4>
                        <a href="">Explorar</a>
                        <img src={Toys} alt="Toys" id="img_toys" />
                    </div>
                    <div className="card" id="products_card">
                        <h4>Produtos em Geral</h4>
                        <a href="">Explorar</a>
                        <img src={Products} alt="Products" id="img_products" />
                    </div>
                </div>

                <h2>COSMÉTICOS PARA PETS</h2>
                <div className="products">
                    <ProductCard name={"Hidradante de Patinhas"} picture={Hidradante} price={48.98} description={"200ML, PARA DEIXAR AS PATAS DOS SEUS PETS HIDRATADAS!"} />
                    <ProductCard name={"Hidradante de Patinhas"} picture={Hidradante} price={48.98} description={"200ML, PARA DEIXAR AS PATAS DOS SEUS PETS HIDRATADAS!"} />
                    <ProductCard name={"Hidradante de Patinhas"} picture={Hidradante} price={48.98} description={"200ML, PARA DEIXAR AS PATAS DOS SEUS PETS HIDRATADAS!"} />
                    <ProductCard name={"Hidradante de Patinhas"} picture={Hidradante} price={48.98} description={"200ML, PARA DEIXAR AS PATAS DOS SEUS PETS HIDRATADAS!"} />
                </div>
            </div>
        </>
    )
}

export default Marketplace