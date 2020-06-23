import React from "react";
import { Link } from "react-router-dom";
import { logoImage } from "../../component/Images";

const Register = () => {
  const [date, setDate] = React.useState("");

  React.useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);
  return (
    <div className="authentication my-auto">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <form className="card auth_form">
              <div className="header">
                <Link to="/">
                  <img
                    className="logo"
                    src={logoImage.src}
                    alt={logoImage.alt}
                  />
                </Link>
                <h5>Sign Up</h5>
                <span>Register a new membership</span>
              </div>
              <div className="body">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="zmdi zmdi-account-circle"></i>
                    </span>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="zmdi zmdi-email"></i>
                    </span>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="zmdi zmdi-lock"></i>
                    </span>
                  </div>
                </div>
                <div className="checkbox">
                  <input id="remember_me" type="checkbox" />
                  <label hmtlfor="remember_me">I read and agree to the </label>
                </div>
                <button className="btn btn-primary btn-block waves-effect waves-light">
                  SIGN UP
                </button>
                <div className="signin_with mt-3">
                  <Link className="link" to="/login">
                    You already have a membership?
                  </Link>
                </div>
              </div>
            </form>
            <div className="copyright text-center">
              <span> © {date} , Designed by MangCep Developer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
