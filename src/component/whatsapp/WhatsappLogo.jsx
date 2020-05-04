import React from 'react'
import Whatsapp from '../../Global-Assets/global/whatsapplogo.png'
import {Link} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

function WhatsappLogo() {
    return (
        <div className="justify-content-end fixed-bottom">
            <Link to="">
                <img src={Whatsapp} alt="logo whatsapp" width="150px"height="auto" className="float-right"/>
            </Link>
        </div>
    )
}

export default WhatsappLogo
