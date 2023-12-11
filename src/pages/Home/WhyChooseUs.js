import React from 'react';
import { GrEmergency } from 'react-icons/gr';
import { GiDoctorFace } from 'react-icons/gi';
import { BsFillPersonCheckFill, BsFillLightbulbFill } from 'react-icons/bs';
import doctor from '../../assets/images/doctor.png';

const WhyChooseUs = () => {
    return (
        <div className='mt-16 text-center flex flex-col items-center '>
            <h1 className='text-5xl font-semibold text-black'>Why Choose Us?</h1>
            <h4 className='py-6 text-xl text-black'>We are one of the best Diagnostic and Dialysis centre  in town, with certified and qualified doctors serving the community since 2023.
            </h4>
            <div className='grid grid-cols-12 mt-12 mb-4 mx-28 gap-x-4'>
                <div className='col-span-4 flex flex-col items-center justify-center gap-y-12'>
                    <div className='flex items-center justify-center text-right gap-x-4'>
                        <div>
                            <h2 className='text-2xl font-semibold text-black'>Modern Technology</h2>
                        </div>
                        <div className='p-6 rounded-full bg-[#DCE8FA]'>
                            <GrEmergency style={{ color: '#4E97FD', width: '20px', height: '20px' }} />
                        </div>
                    </div>
                    <div className='flex items-center justify-center text-right gap-x-4'>
                        <div>
                            <h2 className='text-2xl font-semibold text-black'>Qualified Doctor</h2>
                        </div>
                        <div className='p-6 rounded-full bg-[#DCE8FA]'>
                            <BsFillPersonCheckFill style={{ color: '#4E97FD', width: '20px', height: '20px' }} />
                        </div>
                    </div>
                    <div className='flex items-center justify-center text-right gap-x-4'>
                        <div>
                            <h2 className='text-2xl font-semibold text-black'>World famous Dialysis machine</h2>
                        </div>
                        <div className='p-6 rounded-full bg-[#DCE8FA]'>
                            <GiDoctorFace style={{ color: '#4E97FD', width: '20px', height: '20px' }} />
                        </div>
                    </div>
                </div>
                <div className='grid col-span-4'>
                    <img src={doctor} alt="" className='w-full' />
                </div>
                <div className='col-span-4 flex flex-col items-center justify-center gap-y-12'>
                    <div className='flex items-center justify-center text-left gap-x-4'>
                        <div className='p-6 rounded-full bg-[#DCE8FA]'>
                            <BsFillLightbulbFill style={{ color: '#4E97FD', width: '20px', height: '20px' }} />
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold text-black'>Modern pathology and machine</h2>
                        </div>
                    </div>
                    <div className='flex items-center justify-center text-left gap-x-4'>
                        <div className='p-6 rounded-full bg-[#DCE8FA]'>
                            <BsFillPersonCheckFill style={{ color: '#4E97FD', width: '20px', height: '20px' }} />
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold text-black'>One of the best x- ray machine</h2>
                        </div>
                    </div>
                    <div className='flex items-center justify-center text-left gap-x-4'>
                        <div className='p-6 rounded-full bg-[#DCE8FA]'>
                            <GiDoctorFace style={{ color: '#4E97FD', width: '20px', height: '20px' }} />
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold text-black'>One of the best ultrasonogram machine</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;