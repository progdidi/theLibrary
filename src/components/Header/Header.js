import './header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return ( 
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <NavLink to="/" className="logo">Open Library</NavLink>

                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__list-item">
                                <NavLink to="/" className="menu__list-link">Home</NavLink>
                            </li>
                            <li className="menu__list-item">
                                <NavLink to="/" className="menu__list-link">About</NavLink>
                            </li>
                            <li className="menu__list-item">
                                <NavLink to="/" className="menu__list-link">Books</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="header__buttons">
                        <button className="search-btn">search</button>
                        <button className="favs-btn">fav</button>

                        <div className="autorization">
                            <button className="autorization__btn">Log in</button>
                            <button className="autorization__btn">Sign up</button>
                        </div>
                    </div>

                    
                </div>
            </div>
        </header>
     );
}
 
export default Header;