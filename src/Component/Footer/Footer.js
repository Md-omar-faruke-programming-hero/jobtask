import React from 'react';
import logo from "../../images/logo.png"

const Footer = () => {
    return (
       <div className='back p-5 text-white '>
            <div className='container'>
            <div className='row px-0 mx-0'>
                <div className='col-12 col-md-5'>
                    <img src={logo} alt="" />
                    <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and onlinefor everyone</p>
                    <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
                </div>
                <div className='col-12 col-md-2'>
                   <span>Company</span>
                   <span>Company</span>
                   <span><p>About</p></span>
                   <span><p>About</p></span>
                   <span><p>About</p></span>
                   <span><p>About</p></span>
                </div>
                <div className='col-12 col-md-2'>
                <span>Company</span>
                   <span>Company</span>
                   <span><p>About</p></span>
                   <span><p>About</p></span>
                   <span><p>About</p></span>
                   <span><p>About</p></span>
                </div>
                <div className='col-12 col-md-2'>
                   <span>Company</span>
                   <span><p>About</p></span>
                   <span><p>About</p></span>
                   <span><p>About</p></span>
                   <span><p>About</p></span>
                </div>
               

            </div>
            
        </div>
       </div>
    );
};

export default Footer;