import React from "react";
import SidebarProduct from "../../component/Sidebar";
import CardProduct from "../../component/CardProduct";

import { product } from "../../component/Images";

const Product = () => {
  return (
    <section className="ftco-section bg-light">
      <div className="header text-center mt-4 pt-4">
        <h2>Product</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9 order-md-last">
            <div className="row">
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
              {/* <CardProduct src={product.src} alt={product.alt} /> */}
            </div>
            {/* PAGINATION */}
            {/* <div className="row mt-5">
              <div className="col text-center">
                <div className="block-27">
                  <ul>
                    <li>
                      <a href="#">&lt;</a>
                    </li>
                    <li className="active">
                      <span>1</span>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">5</a>
                    </li>
                    <li>
                      <a href="#">&gt;</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            {/* END PAGINATION */}
          </div>

          <div className="col-md-4 col-lg-3">
            <SidebarProduct />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
