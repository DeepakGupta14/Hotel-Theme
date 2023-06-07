import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
       <div className="tm-top-bar" id="tm-top-bar">
                <div className="container">
                    <div className="row">
                        
                        <nav className="navbar navbar-expand-lg narbar-light">
                            <Link className="navbar-brand mr-auto" to="/">
                                TheHotell
                            </Link>
                            <button type="button" id="nav-toggle" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#mainNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div id="mainNav" className="collapse navbar-collapse tm-bg-white">
                                <ul className="navbar-nav ml-auto">
                                  <li className="nav-item">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link className="nav-link" to="/services">Services</Link>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="#tm-section-5">About</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="#tm-section-6">Contact Us</a>
                                  </li>
                                </ul>
                            </div>                            
                        </nav>            
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Navbar;