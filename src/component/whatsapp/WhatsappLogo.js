import React from "react";
import Whatsapp from "../../Global-Assets/global/whatsapplogo.png";
import "./WhatsappLogo.scss";

function WhatsappLogo() {
  return (
    <div
      className="container mt-4"
      style={{ backgroundColor: "#bdf1ff", color: "#ff95b8" }}
    >
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p>
                <strong>Official Store :</strong>
              </p>
              <p>
                Jl. Terusan Suryani No. 33 <br />
                Kel. Babakan Kec. Babakan Ciparay <br />
                Bandung 40222
              </p>
            </div>
            <div className="col-md-4 text-center">
              <p>
                <strong>follow us :</strong>
              </p>
              <p>
                <a href="https://www.facebook.com/alfaliastore/">
                  <span>
                    <i className="zmdi zmdi-facebook"> @alfaliakids </i>{" "}
                  </span>
                </a>
                <br />
                <a href="https://www.instagram.com/alfaliastore/">
                  <i className="zmdi zmdi-instagram">
                    {" "}
                    <span>@alfailastore </span>
                  </i>
                </a>
                <br />
                <span>
                  <i className="zmdi zmdi-whatsapp"> +6282117813096 </i>{" "}
                </span>
                <br />
                <i className="zmdi zmdi-email">
                  {" "}
                  <span>alfaliakids@gmail.com </span>
                </i>
              </p>
            </div>
            <div className="col-md-4 mx-auto my-auto">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter your email"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    Subscribe
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-content-end fixed-bottom">
            <a href="https://api.whatsapp.com/send?phone=6282117813096&text=asslamualaikum%20Kak%20saya%20tertarik%20dengan%20produk%20yang%20ada%20di%20web%20AlfaliaStore%20mohon%20informasinya%20ya%20kak%20terimakasih">
              <img
                src={Whatsapp}
                alt="logo whatsapp"
                width="120px"
                height="auto"
                className="float-right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatsappLogo;
