import React from "react";
import Panel from "../../component/Panel";
import Header from "../../component/Header";
import Navbar from "../../component/Navbar";

const Article = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Panel title="Article" />
      <section className="content mx-auto">
        <div className="container">
          <div className="card">
            <div className="header">
              <h2>Article</h2>
            </div>
            <div className="content">
              <h4>Content Article</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Article;
