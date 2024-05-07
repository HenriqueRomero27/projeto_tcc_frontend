import '../root.css'
import './Header.css'
import Logo from '../assets/LOGO.svg'
import Search from '../assets/search.svg'
import Heart from '../assets/heart.svg'
import ShoppingBag from '../assets/shopping_bag.svg'
import User from '../assets/user.svg'

import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <nav>
                <div className="container">
                    <Link to="/">
                        <img src={Logo} alt="Logo" id="logo" />
                    </Link>
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
                    <Link to="/marketplace">Marketplace</Link>
                    <p>Campanhas</p>
                    <p>Doadores</p>
                    <p>Blog</p>
                    <p>Doar</p>
                </div>
            </nav>
            <div className="line" id="second_line"></div>
        </header>
    )
}

export default Header