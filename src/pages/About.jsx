import React from "react";
import "../styles/About.css"

import AboutImg1 from "../assets/seo_18361846.png"
import AboutImg2 from "../assets/target-audience_11744952.png"
import AboutImg3 from "../assets/search_3631148.png"
const About = () => {
  return (
    <div className="about">
      <h1>Who will benefit</h1>
      <div className="benifits">
        <div>
          <img src={AboutImg1} alt="" />
          <h4>In-house SEO specialists for large projects</h4></div>
        <div>
        <img src={AboutImg2} alt="" />
          <h4>SEO specialists from agencies working with large projects</h4></div>
        <div>
        <img src={AboutImg3} alt="" />
          <h4>SEO geeks</h4></div>
      </div>
      <div className="sign-sec">
        <h1>Sign up for <br /> the course now</h1>
        <p>and get a PDF course report in the mail</p>
        <button>Book a place</button>
      </div>
    </div>
  );
};

export default About;
