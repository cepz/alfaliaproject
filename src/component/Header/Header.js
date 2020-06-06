import React from 'react'

function Header() {
    return (
          <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#ff95b8", color:"#bdf1ff"}}>
            <div className="container">
                  <div className="justify-content-left">
                    <a href="https://www.facebook.com/alfaliastore/">
                      <span><i className="zmdi zmdi-facebook"> @alfaliakids </i> </span>
                    </a>
                    <a href="https://www.instagram.com/alfaliastore/">
                      <i className="zmdi zmdi-instagram"> <span>@alfailastore </span></i>
                    </a>
                  </div>
                <div className="justify-content-end">
                  <span><i className="zmdi zmdi-whatsapp"> +62 821 1781 3096 </i> </span>
                    <i className="zmdi zmdi-email"> <span>alfaliakids@gmail.com </span></i>
                </div>
            </div>
          </nav>
    )
}

export default Header
