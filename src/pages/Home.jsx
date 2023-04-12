import "../App.css";
import data from "../datas/houseList.json";
function Home() {
  data.map((obj) => console.log(obj.description));
  return <h1>bonjour</h1>;
}

export default Home;
