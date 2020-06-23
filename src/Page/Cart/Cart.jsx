import React from "react";
import Header from "../../component/Header";
import Navbar from "../../component/Navbar";
import Panel from "../../component/Panel";

const Cart = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Panel title="Cart" />
      <section className="content mx-auto">
        <div className="card">
          <div className="header">
            <h2>Cart</h2>
          </div>
          <div className="content">
            <h4>Content Cart</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
