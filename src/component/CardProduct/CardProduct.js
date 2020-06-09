import React from "react";
import { Link } from "react-router-dom";

function CardProduct(props) {
  const { src, alt, id, price, name } = props;
  return (
    <div className="col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex">
      <div className="product bg-cyan" key={id}>
        <Link to="#" className="img-prod">
          <img className="img-fluid" src={src} alt={alt} />
          <div className="overlay"></div>
        </Link>
        <div className="text py-2 pb-2 px-2">
          <h4>
            <Link to="#">{name}</Link>
          </h4>
          <div className="pricing">
            <p className="price">
              <span>Rp. {price}</span>
            </p>
          </div>
          <button className="btn btn-primary">
            <span>
              Add to cart <i className="zmdi zmdi-shoping-cart"></i>
            </span>
          </button>
          <button className="btn btn-success">
            <i className="zmdi zmdi-shopping-cart"></i>
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
