import React from "react";

import Home from "../Home";
import Product from "../Product";
import Cart from "../Cart";
import Article from "../Article";
import Login from "../Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from "../../Page/Register";
import WhatsappLogo from "../../component/whatsapp";

const App = () => {
  return (
    <>
      <Router>
        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product" component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/article" component={Article} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
        <WhatsappLogo />
      </Router>
    </>
  );
};

export default App;
