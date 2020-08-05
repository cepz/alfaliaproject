import React from "react";
// import axios from "axios";
import Panel from "../../component/Panel";
import Header from "../../component/Header";
import Navbar from "../../component/Navbar";

// const baseUrl = 'http://localhost';
// const proxy = 'https://cors-anywhere.herokuapp.com/';

const Article = () => {
  
  // React.useEffect(async () => {
  //   const data = await axios.get(`${baseUrl}/blog`, {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*"
  //     },
  //     responseType: 'json'
  //   })
  //   .then(res => {
  //     console.log(res)
  //   })
  //   .then(err => {
  //     console.log(err)
  //   })

  //   return data;
  // });

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
