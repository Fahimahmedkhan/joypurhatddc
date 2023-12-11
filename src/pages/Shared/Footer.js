import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import JdcLogo from "../../assets/logo/jddcLogo.svg";
import Map from '../Home/Map';

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-gray-900 text-white flex flex-cols-3 items-start justify-between">
                <div>
                    <span className="footer-title">About Us</span>
                    <span className="w-72">We are one of the best health clinics in town, certified and qualified doctors serving the community since.</span>
                </div>
                <div>
                    <span className="footer-title">Contact Us</span>
                    <span className="w-80">Sabujnagor, Posu Hospital Road, Amtoli, Joypurhat, Bangladesh.
                        <div className='py-[.5px]'>
                            <br /> General Enquiries:
                            <Link to='/' className='text-primary hover:text-[#0ED3B0] font-semibold'> joypurhatddc.com</Link>
                        </div>
                        <br />
                        <div className='py-[.5px]'>
                            Contact Number:
                            <span className='text-primary hover:text-[#0ED3B0] font-semibold'> 01751004544</span>,
                            <span className='text-primary hover:text-[#0ED3B0] font-semibold'> 01329003637</span>
                        </div>
                        <br />
                        Support:
                        <Link to='mailto:jdialysiscentre@gmail.com' className='text-primary hover:text-[#0ED3B0] font-semibold' > jdialysiscentre@gmail.com</Link>
                    </span>
                </div>
                <div>
                    <span className='footer-title'>View Location</span>
                    <Map />
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-gray-900 text-white border-base-300 flex items-center justify-between">
                <div className="items-center grid-flow-col">
                    <Link to="/" className="flex items-center justify-center gap-x-4">
                        <img
                            src={JdcLogo}
                            alt="Joypurhat Diagnostic & Dialysis Centre"
                            className="w-20 h-20"
                        />
                    </Link>
                    <p className='text-base'>Joypurhat Diagnostic & Dialysis Centre. <br />Providing affordable, quality dialysis to people</p>
                </div>
                <div>
                    <p>Copyright © 2023 - All right reserved by <Link to='https://www.linkedin.com/in/fahim-ahmed-khan-gorbo/' target="_blank" rel="noopener noreferrer" className='text-base text-[#0ED3B0] font-semibold hover:text-primary' >Fahim Ahmed Khan Gorbo</Link> & <Link to='https://www.linkedin.com/in/akash-sarkar-678623198/' target="_blank" rel="noopener noreferrer" className='text-base text-[#0ED3B0] font-semibold hover:text-primary'>Akash Sarkar</Link></p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <Link className="grid grid-flow-col gap-4" target="_blank" rel="noopener noreferrer" to='https://www.facebook.com/JDIALYSISCENTRE'>
                        <FaFacebookF className="text-white text-3xl hover:text-primary cursor-pointer" />
                    </Link>
                </div>
            </footer>
        </>
    );
};

export default Footer;