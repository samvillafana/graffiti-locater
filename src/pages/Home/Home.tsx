import React from "react";
import "./Home.css";
import { Map } from "../../componets";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-row">
        <input className="home-input" />
        <Map />
      </div>
    </div>
  );
};

export default Home;
