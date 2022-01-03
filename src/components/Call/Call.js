import React from 'react';
import call from '../../images/363-3639744_call-center-png-clipart-removebg-preview.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Call.css';
const Call = () => {
    AOS.init({ duration: 2000 });
    return (
        <div data-aos="zoom-out" className='container'>
            <div className="row bg-style mt-3 overflow-hidden">
                <div className='col-md-4 overflow-hidden'>
<img src={call} className='img-fluid' alt="" />
                </div>
                <div className='col-md-4 mt-5 text-center overflow-hidden mx-auto'>
                <i className="fas fa-phone-volume phone-style rounded-circle mt-5 pt-3 ps-3 pe-3 mx-auto mb-3"></i>

                </div>
                <div className='col-md-4 overflow-hidden text-center'>

            
                <h4 className='text-st mt-5 m-3'>Call us Anytime to make order</h4>
                
                <p className='nmbr mt-5'>90-500-28-999</p>
                </div>

            </div>
        </div>
    );
};

export default Call;