import React from 'react';
import logo from "../../images/logo.png"
import "./Navbar.css"

const Navbar = () => {
    return (
        
            <nav class="navbar  navbar-expand-lg navbar-light bg-white bottomargin">
                    <div class="container">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a class="navbar-brand" href="#"><img src={logo} alt="" /></a>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item me-4">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item me-4">
                            <a class="nav-link active" aria-current="page" href="#">Find a doctor</a>
                            </li>
                            <li class="nav-item me-4">
                            <a class="nav-link active" aria-current="page" href="#">App</a>
                            </li>
                            <li class="nav-item me-4">
                            <a class="nav-link active" aria-current="page" href="#">Testmonial</a>
                            </li>
                            <li class="nav-item me-4">
                            <a class="nav-link active" aria-current="page" href="#">About us</a>
                            </li>
                            
                        </ul>
                        
                        </div>
                    </div>
           </nav>
        
    );
};

export default Navbar;