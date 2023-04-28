import "../pages/Home/Home.css";
import { Link } from "react-router-dom";

function HouseItem({ id, title, cover, pictures, description, url }) {
  return (
    <li key={id} className="houseItem">
      <Link to={url}>
        <img className="houseCover" src={cover} alt={`${title} cover`} />

        <span className="houseText">{title}</span>
      </Link>
    </li>
  );
}

export default HouseItem;
