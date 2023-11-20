import {NavLink} from "react-router-dom";
import BtnDark from "../btnDark/BtnDark";
import "./style.css";
function Navbar() {

const activeLink = "nav-list__link nav-list__link--active";
const passiveLink = "nav-list__link";

    return(<nav className="nav">
        <div className="container">
            <div className="nav-row">
                <NavLink to="/" className="logo">
                    <strong>Portfolio</strong>
                </NavLink>

                <BtnDark/>

                <ul className="nav-list">
                    <li className="nav-list__item">
                    <NavLink to="/" className={({isActive}) =>
                    isActive ? activeLink: passiveLink
                    }>
                    Home
                    </NavLink>
                    </li>

                    <li className="nav-list__item">
                    <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink: passiveLink}>
                    Contacts
                    </NavLink>
                    </li>

                </ul>
            </div>
        </div>
    </nav>);
}

export default Navbar;