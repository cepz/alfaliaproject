import React from "react";
import { Link } from "react-router-dom";

function CardProduct(props) {
  const { src, alt, id, price, name } = props;
  return (
    <div className="col-md-3 col-lg-3 order-md-last">
      <div className="card" key={id}>
        <div className="body product-item">
          {/* <span className="label onsale">Sale!</span> */}
          <Link to="#" className="img-prod">
            <img className="img-fluid cp_img" src={src} alt={alt} />
          </Link>
          <div className="product_details">
            <h4>
              <Link to="#">{name}</Link>
            </h4>
            <ul className="product_price list-unstyled">
              <li className="price">
                <span>Rp. {price}</span>
              </li>
            </ul>
          </div>
          <div className="action">
            <button className="btn btn-primary">
              <span>
                Add to cart <i className="zmdi zmdi-shoping-cart"></i>
              </span>
            </button>
            <button className="btn btn-success">
              <i className="zmdi zmdi-shopping-cart"></i>
              <span> Buy now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
