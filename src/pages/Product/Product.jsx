import { useParams } from "react-router-dom";
import data from "../../datas/houseList.json";

function Product() {
  const { productId } = useParams();
  const product = data.find((item) => item.id === productId);

  if (!product) {
    // Si l'ID n'est pas valide, afficher une page d'erreur 404
    return <h1>404 - Page not found</h1>;
  }

  return (
    <>
      <h1>{productId}</h1>
    </>
  );
}
export default Product;
