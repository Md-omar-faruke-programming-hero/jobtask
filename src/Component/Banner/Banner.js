import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import doctor from "../../images/Doctor.gif"

import Fade from 'react-reveal/Fade';

const Banner = () => {
    return (
        <Fade left>
        <div className='container mb-5 margint'>
            <div className='row px-0 mx-0 align-items-center'>
                <div className='col-12 col-md-6'> 
                    <h1>Virtual healthcare <br /> for you</h1>
                    <p>Trafalgar provides progressive, and affordable <br />
                        healthcare, accessible on mobile and online <br />
                        for everyone</p>
                    <button className='btn btn-primary rounded-pill px-3 mt-2'>Consult today</button>

                </div>
                <div className='col-12 col-md-6'>
                    <img src={doctor} alt="" />
                </div>

            </div>
            
        </div>
        
        </Fade>

       
    );
};

export default Banner;