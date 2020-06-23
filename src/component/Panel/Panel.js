import React from "react";
import { Link } from "react-router-dom";

const Panel = (props) => {
  const { title } = props;
  return (
    <section className="content mx-auto pt-5 mt-5">
      <div className="block-header pt-4">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-sm-12">
            <h1 className="title">{title}</h1>
            {/* <br /> */}
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">
                  <i className="zmdi zmdi-home"></i> Alfalia Store
                </Link>
              </li>
              <li className="breadcrumb-item active">{title}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Panel;
