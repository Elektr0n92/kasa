import "../App.css";
import data from "../datas/houseList.json";
function Home() {
  return (
    <ul>
      {data.map((obj) => (
        <li key={obj.id}>{obj.title}</li>
      ))}
    </ul>
  );
}

export default Home;
