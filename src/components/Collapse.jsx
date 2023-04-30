import Arrow from "../assets/Collapse/arrowCollapse.png";
import React, { useState } from "react";
import handleCollapseToggle from "./HandleCollapseToogle";

function Collapse({ data }) {
  const [collapseStates, setCollapseStates] = useState(
    data.map(() => ({ isOpen: false }))
  );

  return (
    <div className="collapse-list">
      {data.map((item, index) => (
        <div className="collapse-container" key={`MyCollapse_${index}`}>
          <div
            className="collapse"
            onClick={() =>
              handleCollapseToggle(index, collapseStates, setCollapseStates)
            }
          >
            {item.title}
            <span className="arrow-collapse">
              <img
                src={Arrow}
                alt="arrow"
                style={{
                  transform: collapseStates[index].isOpen
                    ? ""
                    : "rotate(180deg)",
                }}
              />
            </span>
          </div>
          <div
            className="collapse-content"
            style={{
              display: collapseStates[index].isOpen ? "block" : "none",
            }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
export default Collapse;
