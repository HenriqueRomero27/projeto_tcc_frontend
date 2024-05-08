import Carousel from "../../components/Carousel/Carousel"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import foto1 from "../../assets/foto1.jpg"
import foto2 from "../../assets/foto2.jpg"
import foto3 from "../../assets/foto3.jpg"

function Home() {

    const items = [
        {
            image: foto1,
            alt: "imagem1"
        },
        {
            image: foto2,
            alt: "imagem2"
        },
        {
            image: foto3,
            alt: "imagem3"
        }
    ]

    return(
        <>
            {/* <Header /> */}
            <div className="container">
                <div className="carousel">
                    <div className="banner">
                        <Carousel items={items} />
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    )
}

export default Home