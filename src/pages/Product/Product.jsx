import { useParams } from "react-router-dom";
import data from "../../datas/houseList.json";
import Error from '../Error/Error'

function Product() {
  const { productId } = useParams();
  const product = data.find((item) => item.id === productId);

  if (!product) {
    // Si l'ID n'est pas valide, afficher une page d'erreur 404
    return <Error/> ;
  }

  return (
    <>
      <h1>{productId}</h1>
    </>
  );
}
export default Product;
