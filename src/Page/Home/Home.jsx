import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Dashboard from '../Dashboard'
import './Home.scss'

import WhatsappLogo from '../../component/whatsapp'
import logo from '../../Global-Assets/global/alfalialogo-header.png'
import {
    FaHome, 
    FaFacebook, 
    FaInstagram, 
    FaPaperPlane} from 'react-icons/fa'
import {AiOutlineCoffee} from 'react-icons/ai'
import { IoIosLock, IoIosCart, IoIosPricetags, IoLogoWhatsapp } from 'react-icons/io'

function Home() {
    return (
        <Router>
            <Fragment>
                <div className="header">
                    <span><FaFacebook/></span> <span><FaInstagram/></span>
                    <p className="right"><FaPaperPlane/> admin@alfalia.store <IoLogoWhatsapp />+62 858 6493 0084 </p>
                </div>
                <div className="navigation">
                <div className="logo">
                    <img src={logo}></img>
                </div>
                    {/* <Link to='/Login'><sapan><IoIosLock/></sapan> Login</Link> */}
                    {/* <Link to='/Cart'><span><IoIosCart/></span> Cart</Link>
                    <Link to='/Articles'><span><AiOutlineCoffee/></span> Article</Link>
                    <Link to='/Product'><span><IoIosPricetags/></span> Product</Link> */}
                    <Link to='/'><span><FaHome/></span> Home</Link>
                </div>
                <WhatsappLogo/>
                <Route path="/" exact children={Dashboard}/>
            </Fragment>
        </Router>
    )
}

export default Home
