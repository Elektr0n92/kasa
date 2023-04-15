import "../styles/style.css";
import K from "../assets/Logo/K.png";
import AHouse from "../assets/Logo/AHouse.png";
import S from "../assets/Logo/S.png";
import A from "../assets/Logo/A.png";
import Door from "../assets/Logo/door.png";
import { Link, useLocation } from "react-router-dom";
function Header() {
  const { pathname } = useLocation();
  const lastWord = pathname.split("/").pop();
  const className = lastWord === "error" ? "unline" : "";
  return (
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
  );
}
export default Header;
