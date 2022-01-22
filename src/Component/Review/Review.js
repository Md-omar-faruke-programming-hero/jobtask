import React from 'react';
import pic from "../../images/m.png"
import "./Review.css"

const Review = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner container">
        
          <div class="carousel-item active ">
           
             <div className='back row px-0 mx-0 justify-content-center align-items-center px-5 border py-5'>
             <h4 className='text-center text-white'>What our clients saying</h4>
                    <div className='col-6 col-md-6 '>
                     <div className='d-flex align-items-center'>
                        <div>
                            <img src={pic} style={{width:"141px",height:"141px"}} class="d-block me-2" alt="..."/>
                        </div>
                        <div>
                        <div>
                            <h6>Edward Newgate</h6>
                            <p>Founder Circle</p>
                        </div>
                        </div>
                    </div>

                    </div>
                    <div className='col-6 col-md-6'>
                        <p>“Our dedicated patient engagement app and 
                           web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</p>

                    </div>

             </div>
            
            
          </div>
          <div class="carousel-item">
          <div className='back row px-0 mx-0 justify-content-center align-items-center px-5 border py-5'>
                <div>
                <h4 className='text-center text-white'>What our clients saying</h4>
                 <hr className='hr m-auto'  />
                </div>
                    <div className='col-6 col-md-6'>
                     <div className='d-flex align-items-center'>
                        <div>
                            <img src={pic} style={{width:"141px",height:"141px"}} class="d-block me-2" alt="..."/>
                        </div>
                        <div className='text-white'>
                            <h6>Edward Newgate</h6>
                            <p>Founder Circle</p>
                        </div>
                    </div>

                    </div>
                    <div className='col-6 col-md-6'>
                        <p className='text-white'>“Our dedicated patient engagement app and 
                           web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</p>

                    </div>

             </div>
          </div>
          <div class="carousel-item">
          <div className='back row px-0 mx-0 justify-content-center align-items-center px-5 border py-5'>
                   <h4 className='text-center text-white'>What our clients saying</h4>
                
                    <div className='col-6 col-md-6'>
                     <div className='d-flex align-items-center'>
                        <div>
                            <img src={pic} style={{width:"141px",height:"141px"}} class="d-block me-2" alt="..."/>
                        </div>
                        <div className='text-white'>
                            <h6>Edward Newgate</h6>
                            <p>Founder Circle</p>
                        </div>
                    </div>

                    </div>
                    <div className='col-6 col-md-6'>
                        <p className='text-white'>“Our dedicated patient engagement app and 
                           web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</p>

                    </div>

             </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
};

export default Review;