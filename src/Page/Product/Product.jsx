import React from "react";
import Header from "../../component/Header";
import Navbar from "../../component/Navbar";
import SidebarProduct from "../../component/Sidebar";
import CardProduct from "../../component/CardProduct";

import { product } from "../../component/Images";
import Panel from "../../component/Panel";

const Product = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Panel title="Product" />
      <section className="content mx-auto">
        <div className="container mt-2">
          <div className="row clearfix">
            {product.map((index) => {
              return (
                <CardProduct
                  src={index.src}
                  alt={index.alt}
                  key={index.id}
                  price={index.price}
                  name={index.name}
                />
              );
            })}

            <div className="col-md-4 col-lg-3">
              <SidebarProduct />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
