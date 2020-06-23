import React from "react";
import "./Home.scss";
import Header from "../../component/Header";
import Navbar from "../../component/Navbar";
import SlideShow from "../../component/SlideShow";
import Card from "../../component/Card";
import Panel from "../../component/Panel";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Panel title="Home" />
      <section className="content mx-auto">
        <SlideShow />
        <Card />
      </section>
    </>
  );
};

export default Home;
