import "./Home.css";
import data from "../../datas/houseList.json";
import HouseItem from "../../components/HouseItem";
import Banner from "../../components/Banner";

function Home() {
  return (
    <>
      <Banner>
        <span className="banner-text">Chez vous, partout et ailleurs !</span>
      </Banner>
      <div className="houseListBackground">
        <ul className="houseList">
          {data.map((obj) => {
            const productUrl = `/products/${obj.id}`;
            return (
              <HouseItem key={obj.id} {...obj} url={productUrl}></HouseItem>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Home;
