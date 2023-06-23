import React from 'react'
import { Cart4 ,PersonCircle} from "react-bootstrap-icons";
import './Nav.css'
function Nav() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg py-4 bg-body-tertiary ">
  <div className="container">
    <a className="navbar-brand mb-0 h1 fs-2" href="/#">LOGO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto ms-1 mb-lg-0 ms-auto">
        <li className="nav-item">
          <a  className="nav-link active  mb-0 h3 fs-2" aria-current="page" href="/#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active mb-0 h3 fs-2" aria-current="page" href="/#">About us </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active mb-0 h3 fs-2" aria-current="page" href="/#">Products</a>
        </li>
       
      
         
           
            
           
           
         
       
       
      </ul>
      <form className="d-flex">
      <button className="btn btn-outline- mb-0 h3 fs-2 " type="submit" ><Cart4 color='#5a5b60' size={25}/>Cart </button>
        <button className="btn btn-outline- mb-0 h3 fs-2 " type="submit"><PersonCircle color='#5a5b60' size={25}/>Log in </button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav
