import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import JdcLogo from "../../assets/logo/jddcLogo.svg";

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-gray-900 text-white">
                <div>
                    <span className="footer-title">Services</span>
                    <span className="link link-hover">Branding</span>
                    <span className="link link-hover">Design</span>
                    <span className="link link-hover">Marketing</span>
                    <span className="link link-hover">Advertisement</span>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <span className="link link-hover">About us</span>
                    <span className="link link-hover">Contact</span>
                    <span className="link link-hover">Jobs</span>
                    <span className="link link-hover">Press kit</span>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <span className="link link-hover">Terms of use</span>
                    <span className="link link-hover">Privacy policy</span>
                    <span className="link link-hover">Cookie policy</span>
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
                    <div className="grid grid-flow-col gap-4">
                        <FaFacebookF className="text-white text-3xl hover:text-primary cursor-pointer" />
                        <FaTwitter className="text-white text-3xl hover:text-primary cursor-pointer" />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;