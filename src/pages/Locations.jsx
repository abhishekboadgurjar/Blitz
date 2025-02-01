import React from "react";
import AddressImage from "../assets/address.webp"
import "../styles/Location.css";
const Locations = () => {
  return (
    <div className="locations">
      <div className="location">
        <div className="ratings">
          <h1>4.59/5</h1>
          <p>Rating on CodeCanyon</p>
          <h4>⭐⭐⭐⭐</h4>
        </div>
        <hr className="line-break" />
        <div className="rating">
          <div id="rate">
            <h1>
              This course is a game-changer! It perfectly blends data science
              and SEO, making complex topics easy to understand. Highly
              recommended!
            </h1>
            <h4>⭐⭐⭐⭐⭐ John Doe</h4>
          </div>
          <div id="rate">
            <h1>
              Great course with practical insights. The hands-on projects helped
              me apply data-driven SEO strategies effectively. Would love more
              case studies!
            </h1>
            <h4>⭐⭐⭐⭐ Emily Smith</h4>
          </div>
          <div id="rate">
            <h1>
              The content is solid, but some sections felt rushed. A bit more
              depth on machine learning for SEO would make it even better.
            </h1>
            <h4>⭐⭐⭐⭐ Michael Johnson</h4>
          </div>
        </div>
      </div>
      <div className="address">
        <div className="address-img">
          <img src={AddressImage} alt="" />
        </div>
        <div className="address-text">
          <h1>
            Our School is a platform that helps professionals of various levels
            and specializations develop system and point skills in interface
            design.
          </h1>
          <h4>178 West 27th Street, Suite 527, New York NY 10012</h4>
        </div>
      </div>
    </div>
  );
};

export default Locations;
