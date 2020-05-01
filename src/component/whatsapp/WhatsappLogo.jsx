import React from 'react'
import Whatsapp from '../../Global-Assets/global/whatsapplogo.png'

import 'bootstrap/dist/css/bootstrap.min.css'

function WhatsappLogo() {
    return (
        <div className="logoWhatsaap fixed-bottom">
            <img src={Whatsapp} alt="logo whatsapp" width="180px"height="auto"/>
        </div>
    )
}

export default WhatsappLogo
