import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import hospitalImage from '../../assets/images/hospital-image.jpg';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="hero mt-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left lg:ml-10 text-xl">
                    <h1 className="text-5xl font-semibold">Welcome to Joypurhat Diagnostic & Dialysis Centre</h1>
                    <p className="py-4">With the touch of advanced technology, we are always at your side with the assurance of the latest health care.</p>
                    <p className="py-4">In Joypurhat, we are the first to do dialysis by Germany’s world famous Fresenius dialysis machine. Our patients have very praised for our service.
                    </p>
                    <p className='flex items-center gap-x-3 mt-2'>
                        <BsFillCheckCircleFill style={{ color: '#0ED3B0' }} /> Modern Technology
                    </p>
                    <p className='flex items-center gap-x-3'>
                        <BsFillCheckCircleFill style={{ color: '#0ED3B0' }} /> Sunday to Monday 7AM to 10PM
                    </p>
                    <p className='flex items-center gap-x-3'>
                        <BsFillCheckCircleFill style={{ color: '#0ED3B0' }} /> Committed to Service
                    </p>
                    <p className='flex items-center gap-x-3'>
                        <BsFillCheckCircleFill style={{ color: '#0ED3B0' }} /> It is Our Duty to Serve the Patient
                    </p>
                    <button className='text-2xl font-medium bg-primary w-48 flex items-center justify-center mt-4 py-2 rounded-xl text-white hover:bg-[#0ED3B0]'><Link to='/' >More About</Link></button>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                    <div className="card-body">
                        <img src={hospitalImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;