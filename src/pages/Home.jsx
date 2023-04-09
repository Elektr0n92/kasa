import "../App.css";
import data from "../datas/houseList.json";
function App() {
  data.map((obj) => console.log(obj.description));
  return <h1>bonjour</h1>;
}

export default App;
