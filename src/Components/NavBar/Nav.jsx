import React from "react";
import { Cart4, Facebook, Twitter, Pinterest } from "react-bootstrap-icons";
import "./Nav.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";function Nav() {
  return (
    <div>
      <div className="BeforeNav">
        <h3>Phone shopping:00000000</h3>

        <ul className="Upper">
          <Link to="Login">My Account</Link>
          <Link to="/Register">Create account</Link>
          <Facebook color="#5a5b60c8" size={20} />
          <Twitter color="#5a5b60c8" size={20} />
          <Pinterest color=" #5a5b60c8" size={20} />
        </ul>
      </div>
      <hr />
      <nav className="navbar navbar-expand-lg py-2 bg-transparent transparent-element  ">
        <div className="container">
          <a className="navbar-brand mb-0 h1 fs-2" href="/#">
            LOGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-right ms-1 mb-lg-0 ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link active  mb-0 h5 fs-2 "
                  aria-current="page"
                  href="/#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active mb-0 h5 fs-2 "
                  aria-current="page"
                  href="/#"
                >
                  About us{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active mb-0 h5 fs-2"
                  aria-current="page"
                  href="/#"
                >
                  Products
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline- mb-0  h5 fs-2 " type="submit">
                <Cart4 color="#5a5b60" size={30} />{" "}
              </button>
              <button
                className="btn btn-outline- mb-0   h5 fs-2 "
                type="submit"
              >
                Log in{" "}
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
