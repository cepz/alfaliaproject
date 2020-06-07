import React from 'react'
import Whatsapp from '../../Global-Assets/global/whatsapplogo.png'
import './WhatsappLogo.scss'

function WhatsappLogo() {
    return (
        <div className="container mt-4" style={{backgroundColor:"#ff95b8", color:"#bdf1ff"}}>
            <div className="footer">
                    <div className="container">
                        <div className="justify-content-end fixed-bottom">
                            <a href="https://api.whatsapp.com/send?phone=6282117813096&text=asslamualaikum%20Kak%20saya%20tertarik%20dengan%20produk%20yang%20ada%20di%20web%20AlfaliaStore%20mohon%20informasinya%20ya%20kak%20terimakasih">
                                <img src={Whatsapp} alt="logo whatsapp" width="120px"height="auto" className="float-right"/>
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default WhatsappLogo
