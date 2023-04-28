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
          {data.map((obj) => {
            //console.log(obj.id);

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
