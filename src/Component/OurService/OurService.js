import React from 'react';
import "./OurService.css"
import pic from "../../images/search-interface-symbol.png"
import Bounce from 'react-reveal/Bounce';


const services=[
    {
        "img":{pic},
        "title":"search doctor",
        "descreption":"Choose your doctor from thousands of specialist, general, and trusted hospitals"
    },
    {
        "img":{pic},
        "title":"search doctor",
        "descreption":"Choose your doctor from thousands of specialist, general, and trusted hospitals"
    },
    {
        "img":{pic},
        "title":"search doctor",
        "descreption":"Choose your doctor from thousands of specialist, general, and trusted hospitals"
    },
    {
        "img":{pic},
        "title":"search doctor",
        "descreption":"Choose your doctor from thousands of specialist, general, and trusted hospitals"
    },
    {
        "img":{pic},
        "title":"search doctor",
        "descreption":"Choose your doctor from thousands of specialist, general, and trusted hospitals"
    },
    {
        "img":{pic},
        "title":"search doctor",
        "descreption":"Choose your doctor from thousands of specialist, general, and trusted hospitals"
    }
]

const OurService = () => {
    return (
        <div className='container margin'>
           <div className='text-center my-5'>
                <Bounce left>
                <h3>Our Service</h3>
                </Bounce>
                <hr className='hr m-auto my-3' />
                <p className='px-5'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
           </div>
           <div className="row px-0 mx-0   g-4">
           {
               services.map(service=> <div key={service.img} className="col-12 col-md-4  ">
               <div className="shadow b h-100 p-3">
                <div className="">
                <img src={pic} style={{width:"74px",height:"74px"}} className="card-img-top " alt="..."/>
                </div>
                 <div className="card-body">
                   <h5 className="card-title ">{service.title}</h5>
                   <p className="card-text ">{service.descreption}</p>
                 </div>
                 
               </div>
             </div> )
           }
           </div>

           <button className='btn btn-outline-primary rounded-pill d-block m-auto my-5'>Learn more</button>

            
        </div>
    );
};

export default OurService;