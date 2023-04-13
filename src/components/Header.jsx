import { Link } from "react-router-dom";
function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/about" className="">
            À propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Header;
