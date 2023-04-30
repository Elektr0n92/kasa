import Collapse from "../components/Collapse";
import SlideShow from "../components/SlideShow";
function HouseSingle(props) {
  const description = [{ title: "description", content: props.description }];
  const equip = [{ title: "équipements", content: props.equipments.join(" ") }];

  return (
    <div className="product-container">
      <SlideShow alt={props.title} images={props.pictures} />
      <div className="product-label">
        <div className="product-title">{props.title}</div>
        <div className="product-location">{props.location}</div>
        <div className="product-tag-list">
          {props.tags.map((tag, index) => (
            <li className="product-tag" key={tag + index}>
              {tag}
            </li>
          ))}
        </div>
      </div>
      <div className="product-inform">
        <Collapse data={description} />
        <Collapse data={equip} />
      </div>
    </div>
  );
}
export default HouseSingle;
//<div className="product-tags">{props.tags.join(" ")}</div>
