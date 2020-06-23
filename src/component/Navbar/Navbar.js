import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

import { logoImage } from "../Images";

function Navbar() {
  return (
    <div className="container-fluid mb-5 mt-4">
      <nav
        className="navbar navbar-expand-lg mt-5"
        style={{ backgroundColor: "#bdf1ff" }}
      >
        <div className="container">
          <div id="search" style={{ backgroundColor: "#bdf1ff" }}>
            <button
              id="close"
              type="button"
              className="close btn btn-primary btn-icon btn-icon-mini btn-round"
            >
              x
            </button>
            <form>
              <input type="search" placeholder="Search..." />
              <button type="submit" className="btn btn-primary mt-5">
                Search
              </button>
            </form>
          </div>
          <Link
            className="brand mt-0 ml-2"
            to="/"
            style={{ color: "rgb(255, 149, 184)" }}
          >
            <img
              src={logoImage.src}
              alt={logoImage.alt}
              width="40px"
              height="auto"
            />{" "}
            Alfalia Store
          </Link>

          <button
            className="navbar-toggler bg-danger mt-4 mb-2 mr-3"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#search" className="nav-link" title="Search...">
                  <i className="zmdi zmdi-search"></i> Search
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  <i className="zmdi zmdi-label"></i> Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <i className="zmdi zmdi-shopping-cart"></i> cart [0]
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/article">
                  Article
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link bg-pink btn-success btn-sm"
                  to="/login"
                  tabIndex="-1"
                >
                  <i className="zmdi zmdi-power"></i>
                  <span> Login</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
