import '../root.css'
import './Header.css'
import Logo from '../assets/LOGO.svg'
import Search from '../assets/search.svg'
import Heart from '../assets/heart.svg'
import ShoppingBag from '../assets/shopping_bag.svg'
import User from '../assets/user.svg'

function Header() {
    return (
        <div className="header">
            <div className="container">
                <img src={Logo} alt="Logo" id="logo" />
                <div className="searchBox">
                    <img src={Search} alt="search" id="search" />
                    <p>O que  você precisa?</p>
                </div>
                <div className="actions">
                    <img src={Heart} alt="favorites" id="favorites" />
                    <img src={ShoppingBag} alt="cart" id="cart" />
                    <img src={User} alt="user" id="user" />
                </div>
            </div>
            <div className="subcontainer">
                <p>Ongs / Casas de Doação</p>
                <p>Shopping</p>
                <p>Campanhas</p>
                <p>Doadores</p>
                <p>Blog</p>
                <p>Doar</p>
            </div>
            <div className="line" id="second_line"></div>
        </div>
    )
}

export default Header