import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Dashboard from '../Dashboard'
import './Home.scss'

import WhatsappLogo from '../../component/whatsapp'

import { icons, logo } from '../../component/Images/Images'

function Home() {
    return (
        <Router>
            <Fragment>
                <div className="header">
                    <span><icons.FaFacebook/></span> <span><icons.FaInstagram/></span>
                    <p className="right"><span><icons.FaPaperPlane/></span> admin@alfalia.store <span><icons.IoLogoWhatsapp /></span> +62 858 6493 0084 </p>
                </div>
                <div className="navigation">
                <div className="logo">
                    <img src={logo.src} alt={logo.alt}></img>
                </div>
                    {/* <Link to='/Login'><sapan><IoIosLock/></sapan> Login</Link> */}
                    {/* <Link to='/Cart'><span><IoIosCart/></span> Cart</Link>
                    <Link to='/Articles'><span><AiOutlineCoffee/></span> Article</Link>
                    <Link to='/Product'><span><IoIosPricetags/></span> Product</Link> */}
                    <Link to='/'><span><icons.FaHome/></span> Home</Link>
                </div>
                <WhatsappLogo/>
                <Route path="/" exact component={Dashboard}/>
            </Fragment>
        </Router>
    )
}

export default Home
