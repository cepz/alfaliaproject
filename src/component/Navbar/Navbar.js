import React from 'react'
import {logo} from '../Images'
import {Link} from 'react-router-dom'
import {icons} from '../Icons'
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './Navbar.scss'

function NavbarMenu() {
    return (
            <div className="navigation">
                    <div className="logo">
                        <img src={logo.src} alt={logo.alt}></img>
                    </div>
                    <>
                        <Navbar expand="lg" className="justify-content-end">
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                                <Navbar.Collapse id="basic-navbar-nav" >
                                                <div className="menu justify-content-end">
                                                        <Link to='/'><span><icons.FaHome/></span> Home</Link>
                                                        <Link to='/Product'><span><icons.IoIosPricetags/></span> Product</Link>
                                                        <Link to='/Cart'><span><icons.IoIosCart/></span> Cart</Link>
                                                        <Link to='/Articles'><span><icons.AiOutlineCoffee/></span> Article</Link>
                                                        <Link to='/Login'><span><icons.IoIosLock/></span> Login</Link>
                                                </div>
                                </Navbar.Collapse>
                        </Navbar>
                   </>
            </div>
    )
}

export default NavbarMenu
