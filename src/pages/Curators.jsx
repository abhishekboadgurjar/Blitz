import React from "react";
import "../styles/Curators.css";
const Curators = () => {
  return (
    <div className="curators">
      <div className="left-curators">
        <h1>Curators</h1>
        <p>
          It is time to understand the causes and consequences and take the
          first step.
        </p>
      </div>
      <div className="right-curators">
        <div className="cards">
          <div className="card1">
            <h1>Jhon Smith</h1>
            <p>SEO copywriter LUN & Flatfy. SEO consultant.</p>
          </div>
          <div className="card2">
            <h1>Vladislav Morgun</h1>
            <p>
              SEO team-lead LUN & Flatfy. Curator of Product SEO course at
              PRJCTR. SEO consultant.
            </p>
          </div>
          <div className="card3">
            <h1>Adam Green</h1>
            <p>Full stack WordPress web developer LUN & Flatfy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curators;
