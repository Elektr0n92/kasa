import "./Home.css";
import data from "../datas/houseList.json";
function Home() {
  return (
    <div className="home">
      <div className="banner">
        <span className="text">Chez vous, partout et ailleurs !</span>
      </div>
      <div className="houseBackground">
        <ul className="houseList">
          {data.map((obj) => (
            <li className="houseItem" key={obj.id}>
              {obj.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
