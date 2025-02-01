import React from "react";
import "../styles/Program.css";

const Program = () => {
  return (
    <div className="program">
      <h1 className="program-title">Workshop Program</h1>
      <p className="program-para">
        Google APIs: Search Console, Analytics, Bigquery. Creating Data Studio
        Dashboards, Kibana. Data analysis.
      </p>
      <div className="programs">
        <div className="left-program">
          <div>
            <h1>20th September</h1>
            <p>10:00 — 18:00</p>
          </div>
          <div className="unique">
            <h1>21th September</h1>
            <p>10:00 — 18:00</p>
          </div>
          <div>
            <h1>22th September</h1>
            <p>10:00 — 18:00</p>
          </div>
        </div>
        <div className="right-program">
          <div>
            <h1>
              Creating a project in the Google Cloud Platform Working with API
              scripts in Python:
            </h1>
            <p>&#x27A1; Connection and use of Google Search Console API;</p>
            <p>&#x27A1; Connection and use of Google Analytics API;</p>
            <p>&#x27A1; Connect and use the Big Query API.</p>
          </div>
          <div>
            <h1>How to optimize your webpresence for SEO and its value:</h1>
            <p>&#x27A1; What is NAP data;</p>
            <p>&#x27A1; How to create a unique local page;</p>
            <p>&#x27A1; BrightEdge: what is it and how to use.</p>
          </div>
          <div>
            <h1>The latest SEO Innovations:</h1>
            <p>&#x27A1; Google Algorithm timeline updates;</p>
            <p>&#x27A1; What should you do to rank for you keywords;</p>
            <p>&#x27A1; How to become a successful SEO specialist nowadays.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
