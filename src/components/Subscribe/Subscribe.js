import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Subscribe.css';


const Subscribe = () => {
    
    AOS.init({ duration: 2000 });
    return (
        <div data-aos="zoom-in-down" className='overflow-hidden'>
       <div className='row mt-3 bg overflow-hidden'>
           <div className='col-md-6 overflow-hidden'>
           <div className='text-center fs-1 m-3 fw-bold overflow-hidden'>
           <i className="fas fa-envelope-open-text"></i>
           </div>
<p className='text-center pb-5 m-3'>Get the latest news and offers

<h1 className='text-left p-3'>Subscribe to our newsletter</h1>
</p>
           </div>
           <div className='col-md-6  mt-5 text-center mb-5 mx-auto overflow-hidden'>
<input type="text" placeholder='Enter your email' className='c-in ' /> <br />
<button className='btn btn-dark c-b m-3  ps-3 pe-3'>Subscribe</button>
           </div>

       </div>
        </div>
    );
};

export default Subscribe;