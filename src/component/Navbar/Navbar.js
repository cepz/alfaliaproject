import React from 'react'
import {logo} from '../Images'
import {Link} from 'react-router-dom'
import {icons} from '../Icons'

import './Navbar.scss'

function Navbar() {
    return (
        <div className="navigation">
            <div className="logo">
                <img src={logo.src} alt={logo.alt}></img>
            </div>
            <Link to='/Login'><span><icons.IoIosLock/></span> Login</Link>
            <Link to='/Cart'><span><icons.IoIosCart/></span> Cart</Link>
            <Link to='/Articles'><span><icons.AiOutlineCoffee/></span> Article</Link>
            <Link to='/Product'><span><icons.IoIosPricetags/></span> Product</Link>
            <Link to='/'><span><icons.FaHome/></span> Home</Link>
        </div>
    )
}

export default Navbar
