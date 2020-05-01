import React from 'react'
import {icons} from '../Icons'
import './Header.scss'

function Header() {
    return (
        <div className="header">
            <p className="icon"><icons.FaFacebook/> <icons.FaInstagram/></p>
            <p className="right"><span><icons.FaPaperPlane/></span> admin@alfalia.store <span><icons.IoLogoWhatsapp /></span> +62 858 6493 0084 </p>
        </div>
    )
}

export default Header
