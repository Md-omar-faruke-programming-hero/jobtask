import React from 'react';
import pic from "../../images/CT scan.gif"
import Fade from 'react-reveal/Fade';
const Body = () => {
    return (
        <div className='container'>
            <Fade right>
            <div className='row px-0 mx-0 align-items-center'>
                <div className='col-12 col-md-6'>

                        <img src={pic} alt="" />
                </div>
                <div className='col-12 col-md-6'>
                    <h3>Leading healthcare  <br /> providers</h3>
                    <hr className='hr'/>
                    <p className='text-muted'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
                    in the solutions we deliver</p>
                    <button className='btn btn-outline-primary rounded-pill d-block  my-5'>Learn more</button>

                </div>

            </div>
            </Fade>
            <Fade left>
            <div className='row px-0 mx-0 align-items-center'>
                <div className='col-12 col-md-6'>

                <h3>Download our <br /> mobile apps</h3>
                    <hr className='hr'/>
                    <p className='text-muted'>Our dedicated patient engagement app and 
                      web portal allow you to access information instantaneously (no tedeous form, long calls,or administrative hassle) and securely</p>
                    <button className='btn btn-outline-primary rounded-pill d-block  my-5'>Download <i class="fas fa-download ms-2"></i></button>
                </div>
                <div className='col-12 col-md-6'>
                    
                    <img src={pic} alt="" />
                </div>

            </div>
            </Fade>
            
        </div>
    );
};

export default Body;