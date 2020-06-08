import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import WhatsappLogo from "../whatsapp";
import Home from "../../Page/Home";
import Product from "../../Page/Product";
import Cart from "../../Page/Cart/Cart";
import Article from "../../Page/Article/Article";
import Login from "../../Page/Login/Login";

import "./Navbar.scss";

import { logoImage } from "../Images";
import Register from "../../Page/Register";

function Navbar() {
  return (
    <Router>
      <div className="container-fluid mb-2 mt-4">
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
                    className="nav-link btn-success btn-sm"
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
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <div className="top">
              <Home />
            </div>
          </Route>
          <Route path="/product">
            <div className="top">
              <Product />
            </div>
          </Route>
          <Route path="/cart">
            <div className="top">
              <Cart />
            </div>
          </Route>
        </Switch>
        <Route path="/article">
          <div className="top">
            <Article />
          </div>
        </Route>
        <Route path="/login">
          <div className="top">
            <Login />
          </div>
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </div>
      <WhatsappLogo />
    </Router>
  );
}

export default Navbar;
