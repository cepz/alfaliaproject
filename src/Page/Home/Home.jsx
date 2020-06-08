import React from "react";
import "./Home.scss";
import SlideShow from "../../component/SlideShow";
import Card from "../../component/Card";

const Home = () => {
  return (
    <div className="container">
      <SlideShow />
      <Card />
    </div>
  );
};

export default Home;
