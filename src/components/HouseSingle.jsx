import Collapse from "../components/Collapse";
function HouseSingle(props) {
  const description = [{ title: "description", content: props.description }];
  const equip = [{ title: "équipements", content: props.equipments }];

  return (
    <>
      <div className="product-title">{props.title}</div>
      <div className="product-location">{props.location}</div>
      <div className="product-tags">{props.tags}</div>
      <Collapse data={description} />
      <Collapse data={equip} />
    </>
  );
}
export default HouseSingle;
