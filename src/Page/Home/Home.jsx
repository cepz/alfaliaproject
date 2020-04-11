import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Dashboard from '../Dashboard'
import './Home.scss'
import WhatsappLogo from '../../component/whatsapp'


function Home() {
    return (
        <Router>
            <Fragment>
                <div className="navigation">
                <div className="logo">Alfalia</div>
                    <Link to='/Login'>Login</Link>
                    <Link to='/Cart'>Cart</Link>
                    <Link to='/Articles'>Article</Link>
                    <Link to='/Product'>Product</Link>
                    <Link to='/'>Home</Link>
                </div>
                <WhatsappLogo/>
            </Fragment>
            <Route path="/" exact children={Dashboard}/>
        </Router>
    )
}

export default Home
