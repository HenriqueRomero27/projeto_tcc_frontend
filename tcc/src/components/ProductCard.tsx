import "./ProductCard.css"

interface props {
    name: string,
    picture: string,
    price: number,
    description: string
}

function ProductCard({name, picture, price, description}: props) {
    return (
        <>
            <div className="card-container">
                <div className="picture">
                    <img src={picture} alt="Foto do produto" />
                </div>
                <div className="card-content">
                    <h3>{name}</h3>
                    <h4>R${price}</h4>
                    <p>{description}</p>
                    <button>Comprar</button>
                </div>
            </div>
        </>
    )
}

export default ProductCard