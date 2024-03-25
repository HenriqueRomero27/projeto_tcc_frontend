import './Footer.css'
import Logo from "../assets/LOGO.svg"

function Footer() {
    return (
        <div className="footer">
            <h2>Deseja adotar um animalzinho?</h2>
            <button type='button' id='adoptAnimal'>Adotar</button>
            <div className="line"></div>
            <div className="content">
                <img src={Logo} id="logo" />
                <div className="links">
                    <div className="link">
                        <p className="title">Casas de adoção</p>
                        <p>Lorem Ipsum is simply dummy text of the printing </p>
                </div>
                <div className="link">
                    <p className="title">Contatos</p>
                    <p>Lorem Ipsum is simply dummy text of the printing </p>
                </div>
                <div className="link">
                    <p className="title">Redes Sociais</p>
                    <p>Lorem Ipsum is simply dummy text of the printing </p>
                </div>
                </div>
            </div>
            <div className="line"></div>
            <p id="copy">Todos os direitos foram reservados &copy;</p>
        </div>
    )
}

export default Footer