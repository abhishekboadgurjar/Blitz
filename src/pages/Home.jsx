import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-start">
        <h2>COURSE:</h2>
        <h1 className="home-heading">Data Science for SEO</h1>
        <p className="home-para">
          If you are interested in writing articles or want to become
          SEO-specialist this event is for you. A three-days webinar, where you
          can find something new in semantic sphere.
        </p>
      </div>
      <div className="info-boxes">
        <div id="box">
          <div>
            <h1>20-22 th</h1>
            <h4>September</h4>
          </div>
          <p>3 days of intense practice</p>
        </div>
        <div id="box">
          <div>
            <h1>24</h1>
            <h4>Hours</h4>
          </div>
          <p>10:00 — 18:00</p>
        </div>

        <div id="box">
          <div>
            <h1>20</h1>
            <h4>Seats</h4>
          </div>
          <p>Seating is limited</p>
        </div>
        <div id="box" className="price-box">
          <div>
            <h4>Price</h4>
            <h1>$245</h1>
          </div>
          <p>Best offer</p>
        </div>
      </div>
      <div className="info-sec">
        <div className="left-sec">
          <p>
            24 hours of practice and immersion in data science for SEO
            specialists
          </p>
          <h4>Level: MIDDLE</h4>
        </div>
        <div className="right-sec">
          <h1>
            Every day, Google Analytics, Google Search Console and your Web
            server collect millions of rows of data, and SEOs often only look at
            summary graphs and rejoice when they grow and upset when they fall.
          </h1>
          <p>
            It is time to understand the causes and consequences and take the
            first step in Data Science – dig into this data with your head and
            find answers to all your questions.
          </p>
          <p>
            So why invent Google’s conspiracy theories against SEO if you can
            hypothesize and test it. This is how the process in the workshop
            will be built
          </p>
          <button className="bookplace">Book a Place</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
