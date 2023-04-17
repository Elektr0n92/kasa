import "./Error.css";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="error">
      <span>404</span>
      <p className="error-text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <p className="error-return">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </p>
    </div>
  );
}
export default Error;
