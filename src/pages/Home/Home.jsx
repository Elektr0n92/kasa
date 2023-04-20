import "./Home.css";
import data from "../../datas/houseList.json";
import HouseItem from "../../components/HouseItem";
function Home() {
  return (
    <div className="home">
      <div className="banner">
        <span className="text">Chez vous, partout et ailleurs !</span>
      </div>
      <div className="houseListBackground">
        <ul className="houseList">
          {data.map((obj) => (
            <HouseItem key={obj.id} {...obj}></HouseItem>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
