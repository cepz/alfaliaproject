import React from "react";
import { Link } from "react-router-dom";

function SidebarProduct() {
  return (
    <>
      <div className="card bg-pink">
        <div className="header text-center">
          <h2>Categories</h2>
        </div>
        <div
          className="panel-group"
          id="accordion"
          role="tablist"
          aria-multiselectable="true"
        >
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingOne">
              <h4 className="panel-title">
                <a
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Boy's
                </a>
              </h4>
            </div>
            <div
              id="collapseOne"
              className="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="headingOne"
            >
              <div className="panel-body">
                <ul>
                  <li>
                    <Link className="waves-effect waves-block" to="#">
                      Sport
                    </Link>
                  </li>
                  <li>
                    <Link to="#">Casual</Link>
                  </li>
                  <li>
                    <Link to="#">Running</Link>
                  </li>
                  <li>
                    <Link to="#">Jordan</Link>
                  </li>
                  <li>
                    <Link to="#">Soccer</Link>
                  </li>
                  <li>
                    <Link to="#">Football</Link>
                  </li>
                  <li>
                    <Link to="#">Lifestyle</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingTwo">
              <h4 className="panel-title">
                <a
                  className="collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Girl's
                </a>
              </h4>
            </div>
            <div
              id="collapseTwo"
              className="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="headingTwo"
            >
              <div className="panel-body">
                <ul>
                  <li>
                    <Link to="#">Sport</Link>
                  </li>
                  <li>
                    <Link to="#">Casual</Link>
                  </li>
                  <li>
                    <Link to="#">Running</Link>
                  </li>
                  <li>
                    <Link to="#">Jordan</Link>
                  </li>
                  <li>
                    <Link to="#">Soccer</Link>
                  </li>
                  <li>
                    <Link to="#">Football</Link>
                  </li>
                  <li>
                    <Link to="#">Lifestyle</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingThree">
              <h4 className="panel-title">
                <a
                  className="collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Mom's & Dad's
                </a>
              </h4>
            </div>
            <div
              id="collapseThree"
              className="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="headingThree"
            >
              <div className="panel-body">
                <ul>
                  <li>
                    <Link to="#">Jeans</Link>
                  </li>
                  <li>
                    <Link to="#">T-Shirt</Link>
                  </li>
                  <li>
                    <Link to="#">Jacket</Link>
                  </li>
                  <li>
                    <Link to="#">Shoes</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarProduct;
