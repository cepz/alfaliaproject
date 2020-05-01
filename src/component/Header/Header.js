import React from 'react'
import {icons} from '../Icons'
import './Header.scss'

function Header() {
    return (
        <div className="header">
            <a href="https://www.facebook.com/alfaliastore/">
                <span className="icon"><icons.FaInstagram/></span>
            </a>
            <a href='https://www.instagram.com/alfaliastore/'>
                <span className="icon"><icons.FaFacebook/></span>
            </a>
            <p className="right"><span><icons.FaPaperPlane/></span> admin@alfalia.store <span><icons.IoLogoWhatsapp /></span> +62 858 6493 0084 </p>
        </div>
    )
}

export default Header
