import React from "react";
import { Link } from "react-router-dom";
import { logoImage } from "../../component/Images";

const Login = () => {
  const [date, setDate] = React.useState("");

  React.useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);
  return (
    <div className="authentication">
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
                <h5>Log in</h5>
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
                    placeholder="Password"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <a
                        href="forgot-password.html"
                        className="forgot"
                        title="Forgot Password"
                      >
                        <i className="zmdi zmdi-lock"></i>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="checkbox">
                  <input id="remember_me" type="checkbox" />
                  <label htmlFor="remember_me">Remember Me</label>
                </div>
                <button className="btn btn-primary btn-block waves-effect waves-light">
                  Login
                </button>
                <div className="signin_with mt-3">
                  <p className="mb-0">
                    have'nt account? Sign Up <Link to="/register">here</Link>
                  </p>
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

export default Login;
