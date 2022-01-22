import React from 'react';
import pic1 from "../../images/Mask Group (1).png"
import pic2 from "../../images/image 2.png"
import pic3 from "../../images/Mask Group.png"
import {  NavLink } from 'react-router-dom';
import "./Artical.css"


const services=[
    {
        img:pic1,
        title:"Natural care for healthy facial skin",
        descreption:"In this case, the role of the health laboratory is very important to do a disease detection..."
    },
    {
        img:pic2,
        title:"Herbal medicines that are safe for consumption",
        descreption:"Herbal medicine is very widely used at this time because of its very good for your health..."
    },
    {
        img:pic3,
        title:"Disease detection, check up in the laboratory",
        descreption:"A healthy lifestyle should start from now and also for your skin health . There are some..."
    }
]
const Artical = () => {
    return (
        <div className='container margin'>
        <div className='text-center my-5'>
             <h3>Check out our latest article</h3>
             <hr className='hr m-auto my-3' />
             <p className='px-5'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
        </div>
        <div className="row px-0 mx-0   g-4">
        {
            services.map(service=> <div key={service.img} className="col-12 col-md-4  ">
            <div className="shadow b h-100 p-3">
             <div className="">
             <img src={service.img}  className="card-img-top " alt="..."/>
             </div>
              <div className="card-body">
                <h5 className="card-title ">{service.title}</h5>
                <p className="card-text ">{service.descreption}</p>
                <span><NavLink className="read" to="/">Read more <i class="fas fa-arrow-right ms-2"></i></NavLink></span>
              </div>
              
            </div>
          </div> )
        }
        </div>

        <button className='btn btn-outline-primary rounded-pill d-block m-auto my-5'>View all</button>

         
     </div>
    );
};

export default Artical;