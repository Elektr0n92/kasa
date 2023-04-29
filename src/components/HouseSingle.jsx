import Collapse from "../components/Collapse";
import SlideShow from "../components/SlideShow";
function HouseSingle(props) {
  const description = [{ title: "description", content: props.description }];
  const equip = [{ title: "équipements", content: props.equipments }];

  return (
    <>
      <SlideShow alt={props.title} images={props.pictures} />
      <div className="product-title">{props.title}</div>
      <div className="product-location">{props.location}</div>
      <div className="product-tags">{props.tags}</div>
      <Collapse data={description} />
      <Collapse data={equip} />
    </>
  );
}
export default HouseSingle;
