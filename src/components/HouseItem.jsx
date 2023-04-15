import "../pages/Home.css";
import { Link } from "react-router-dom";
function HouseItem({ id, title, cover, pictures, description }) {
  return (
    <Link to="/error">
      <li key={id} className="houseItem">
        <img className="houseCover" src={cover} alt={`${title} cover`} />

        <span className="houseText">{title}</span>
      </li>
    </Link>
  );
}

export default HouseItem;
