import "../styles/style.css";
import K from "../assets/Logo/Header/K.png";
import AHouse from "../assets/Logo/Header/AHouse.png";
import S from "../assets/Logo/Header/S.png";
import A from "../assets/Logo/Header/A.png";
import Door from "../assets/Logo/Header/door.png";
import { Link, useLocation } from "react-router-dom";
function Header() {
  const { pathname } = useLocation();
  const lastWord = pathname.split("/").pop();
  const className = lastWord === "404" ? "unline" : "";
  return (
    <div className="nav-container">
      <nav>
        <ul className="navbar">
          <li className="logo">
            <Link to="/">
              <img src={K} alt="K" />
              <img src={AHouse} alt="logo-maison" />
              <img className="door" src={Door} alt="logo-maison" />
              <img src={S} alt="S" />
              <img src={A} alt="S" />
            </Link>
          </li>
          <li className="navlink">
            <Link className={className} to="/">
              Accueil
            </Link>
            <Link to="/about" className="about">
              À propos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
