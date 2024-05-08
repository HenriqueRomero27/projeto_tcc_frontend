import "../../root.css"
import "./Marketplace.css"
import ProductCard from "../../components/ProductCard/ProductCard"
import Banner from "../../assets/bannerMarketplace.svg"
import Toys from "../../assets/toys.svg"
import Products from "../../assets/products.svg"
import Hidradante from "../../assets/hidradante.svg"
import Perfume from "../../assets/perfume.svg"
import Protetor from "../../assets/protetor.svg"
import KitPastaEscova from "../../assets/kitEscova.svg"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

function Marketplace() {
    return (
        <>
            <Header />
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
                    <ProductCard name={"Hidradante de Patinhas"} picture={Hidradante} price={49.90} description={"200ML, PARA DEIXAR AS PATAS DOS SEUS PETS HIDRATADAS!"} />
                    <ProductCard name={"Perfume de Pets"} picture={Perfume} price={55.50} description={"150ML, PARA DEIXAR SEUS PETS PERFUMADOS E CHEIROSOS!"} />
                    <ProductCard name={"Protetor Solar para Pets"} picture={Protetor} price={89.90} description={"80ML, A MELHOR ESCOLHA PARA MANTER SEUS PETS PROTEGIDOS!"} />
                    <ProductCard name={"Kit - Pasta de Dente e Escova"} picture={KitPastaEscova} price={35.60} description={"A MELHOR OPÇÃO PARA A SAÚDE BUCAL DO SEU PET!"} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Marketplace