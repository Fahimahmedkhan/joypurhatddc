import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import TopBanner from './TopBanner';

const ContactUs = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <TopBanner />
            <div className='mt-16 mb-10 text-center flex flex-col items-center '>
                <h1 className='text-5xl font-semibold text-black'>Contact Us</h1>
                <h4 className='py-6 text-xl text-black'>We are one of the best health clinics in town, with over 25 certified and qualified doctors serving the community since 1998.
                </h4>
                <div className="hero min-h-screen ">
                    <div className="flex items-center justify-around gap-x-20 ">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-primary text-white text-left shadow-black">
                            <div className="card-body">
                                <div className='mb-2'>
                                    <label className="label">
                                        <span className="text-xl font-semibold underline">Reach Us</span>
                                    </label>
                                    <p>If you have any general or medical enquiry, feel free to contact us. Our doctors will response ASAP.</p>
                                </div>
                                <div className='mb-2'>
                                    <label className='label '>
                                        <span className="text-xl font-semibold underline">Address</span>
                                    </label>
                                    <p>Sabujnagor, Posu Hospital Road, Amtoli, Joypurhat, Bangladesh</p>
                                </div>
                                <div className='mb-2'>
                                    <label className='label'>
                                        <span className="text-xl font-semibold underline">Phone</span>
                                    </label>
                                    <p>01751004544, 01329003637</p>
                                </div>
                                <div className='mb-2'>
                                    <label className='label'>
                                        <span className="text-xl font-semibold underline">Email</span>
                                    </label>
                                    <p><Link to='mailto:jdialysiscentre@gmail.com' className='font-semibold'> jdialysiscentre@gmail.com</Link></p>
                                </div>
                                <div>
                                    <label className='label'>
                                        <span className="text-xl font-semibold underline">Opening Hour</span>
                                    </label>
                                    <div className='flex items-center justify-between'>
                                        <p>Sat-Fri</p>
                                        <p>08.00AM - 22.00PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="text-center lg:text-left w-full">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="text-xl font-medium">Name:</span>
                                </label>
                                <input type="text" id='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs border-2 border-primary" {...register("name")} required />
                            </div>
                            <div className="form-control w-full mt-2">
                                <label className="label">
                                    <span className="text-xl font-medium">Email:</span>
                                </label>
                                <input type="email" id='email' placeholder="Your Email Address" className="input input-bordered w-[450px] border-2 border-primary" {...register("email")} required />
                            </div>
                            <div className="form-control w-full max-w-xs mt-2">
                                <label className="label">
                                    <span className="text-xl font-medium">Description:</span>
                                </label>
                                <textarea id='description' placeholder="What do you need from us...!" {...register("description")} required className="textarea textarea-bordered w-[450px] h-48 border-2 border-primary" />
                            </div>
                            <input type="submit" className='text-2xl font-medium bg-primary w-fit px-10 flex items-center justify-center py-3 rounded-xl text-white hover:bg-[#0ED3B0] cursor-pointer mt-6' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;