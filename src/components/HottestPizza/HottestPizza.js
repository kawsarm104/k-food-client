import React from 'react';
import images from '../../images/italianpizza.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HottestPizza.css';
const HottestPizza = () => {
    AOS.init({ duration: 2000 });
    return (
        <div className='container'>
            <div  data-aos="flip-left" className='row custom mt-3 overflow-hidden'>
                <div className='col-md-4 container'>
                    <p className='text-style m-5'>Always
                    <h1 className='text-style2'>the Hottest</h1>
                        <h1 className='text-style2'>Pizza</h1>
                        
                    <p className='text-style3'>Curabitur imperdiet varius lacus, id placerat purus vulputate non. Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex, gravida vel porttitor et, pretium ac sapien.</p>
                    </p>
                    
                    <button className='btn btn-dark mx-5 ps-5 pe-5 p-3 rounded-pill custom-b mb-3'>Get Pizza</button>
                   
                        
                </div>
                <div className='col-md-8 overflow-hidden'>
            <img src={images} className='img-fluid m-5' alt="" />
                </div>

            </div>
        </div>
    );
};

export default HottestPizza;