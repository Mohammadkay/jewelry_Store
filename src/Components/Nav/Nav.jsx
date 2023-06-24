import React from 'react';
import './Nav.css';


const Nav = () => {
  const handleProfileToggle = () => {
    const profileMenu = document.querySelector('#navbarProfile .navbar-nav');
    profileMenu.classList.toggle('show');
  };

  const handleMenuToggle = () => {
    const mainMenu = document.querySelector('#navbarMenu .navbar-nav');
    mainMenu.classList.toggle('show');
  };

  return (
    <div className="container">
      <div className="top-nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light transparent-navbar">
          <a className="navbar-brand" style={{ fontSize: '13px' }}>PHONE SHOPPING (+962) 7 9661 8504</a>
          <button
            style={{ backgroundColor: 'white !important' }}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarProfile"
            aria-controls="navbarProfile"
            aria-expanded="false"
            aria-label="Toggle profile"
            onClick={handleProfileToggle}
          >
            <i className="fas fa-user"></i>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarProfile">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#">MY ACCOUNT</a></li>
              <li className="nav-item"><a className="nav-link" href="#">LOGIN</a></li>
              <li className="nav-item"><a className="nav-link" href="#">CREATE ACCOUNT</a></li>
              <div className="icons-profile" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <li><a href="#"><i className="fab fa-facebook-f fa-lg text-secondary"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter fa-lg text-secondary"></i></a></li>
                <li><a href="#"><i className="fab fa-youtube fa-lg text-secondary"></i></a></li>
              </div>
            </ul>
          </div>
        </nav>
      </div>

      <hr className="separator" />

      <div className="second-nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light transparent-navbar">
          <a className="navbar-brand">
            <img className="col-sm" src="./image/loogggo3.png" width="50px" alt="" />
            <img src="./image/Untitle22d-1.png" width="130px" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleMenuToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarMenu">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#">HOME</a></li>
              <li className="nav-item"><a className="nav-link" href="#">COLLECTIONS</a></li>
              <li className="nav-item"><a className="nav-link" href="#">PAGES</a></li>
              <li className="nav-item"><a className="nav-link" href="#">CONTACT</a></li>
              <li className="nav-item"><a className="nav-link" href="#">CART</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;