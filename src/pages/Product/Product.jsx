import { useParams, Navigate } from "react-router-dom";
import "./Product.css";
import data from "../../datas/houseList.json";
import HouseSingle from "../../components/HouseSingle";

function Product() {
  const { productId } = useParams();
  const product = data.find((item) => item.id === productId);

  if (!product) {
    // Si l'ID n'est pas valide, afficher une page d'erreur 404
    return <Navigate to={"/404"} />;
  }

  return (
    <>
      <HouseSingle {...product} />
    </>
  );
}
export default Product;
