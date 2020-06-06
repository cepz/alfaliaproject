import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../../Page/Home';

function Navbar() {
    return (
     <Router>
        <div className="container-fluid mb-2 mt-4">
            <div id="search" className="bg-dark">
                <button id="close" type="button" className="close btn btn-primary btn-icon btn-icon-mini btn-round">x</button>
                <form>
                <input type="search" placeholder="Search..." />
                <button type="submit" className="btn btn-primary mt-5">Search</button>
                </form>
            </div>

            <nav className="navbar navbar-expand-lg mt-5" style={{backgroundColor:"#bdf1ff"}}>
            <div className="container">
                <Link className="brand mt-2" to="/" style={{color:"rgb(255, 149, 184)"}}> 
                    Alfalia Store
                </Link>
                <button className="navbar-toggler bg-danger mt-4 mb-2 mr-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                {/* <div className="navbar justify-content-center mt-4">
                <a href="#search" className="btn-success btn-sm" title="Search..."><i className="zmdi zmdi-search"></i></a>
                </div> */}

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="#"><i className="zmdi zmdi-shopping-cart"></i> cart [0]<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="#">Article</Link>
                            </li>
                            <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Product
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="#">Boys</Link>
                                <Link className="dropdown-item" to="#">Girl</Link>
                                <Link className="dropdown-item" to="#">Mos's and Dad</Link>
                            </div>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link btn-warning btn-sm" to="#" tabIndex="-1">Login</Link>
                            </li>
                            {/* <li><Link to="#search" className="btn-success btn-sm" title="Search..."><i className="zmdi zmdi-search"></i></Link></li> */}
                        </ul>
                </div>
                </div>
            </nav>
      </div>
      <div className="container mt-4">
            <Switch>
                <Route path='/'>
                    <Home/>
                </Route>
            </Switch>
      </div>
    </Router>
    )
}

export default Navbar
