import "./Home.css";
import data from "../../datas/houseList.json";
import HouseItem from "../../components/HouseItem";
import Banner from "../../components/Banner";
function Home() {
  return (
    <>
      <Banner>
        <span className="text">Chez vous, partout et ailleurs !</span>
      </Banner>
      <div className="houseListBackground">
        <ul className="houseList">
          {data.map((obj) => (
            <HouseItem key={obj.id} {...obj}></HouseItem>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
