import React from 'react';
import { GiPersonInBed, GiHeartPlus } from 'react-icons/gi';
import { RiUserSettingsFill, RiHandHeartFill } from 'react-icons/ri';
import { BsHeartPulseFill } from 'react-icons/bs';
import { BiDonateBlood } from 'react-icons/bi';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';

const OurServices = () => {
    const services = [
        {
            id: 1,
            name: 'Dialysis',
            description: 'Our Dialysis facility is set-up to provide affordable, quality dialysis to people with kidney disease through individualized care. We are well equipped to deliver the patient experience with the latest technology, water filtration system, dialysis machines and certified professional staff.',
            image: <GiPersonInBed style={{ color: '#4E97FD', width: '70px', height: '70px' }} />
        },
        {
            id: 2,
            name: 'Pathology',
            description: 'Our Pathology services involve the laboratory examination of samples of body tissues and fluids to determine the causes and effects of diseases. Our Laboratory is equipped with the latest automated analyzers installed to ensure accuracy, precision and reproducible and reliable results within the shortest turn-around-time.',
            image: <GiHeartPlus style={{ color: '#4E97FD', width: '70px', height: '70px' }} />
        },
        {
            id: 3,
            name: 'Cardiology',
            description: 'In offering cardiology services, we carry out various tests to obtain results for early diagnosis and treatment of heart-related conditions or circulatory system disorders. Equipped with various advanced cardiological equipment, we use several techniques to develop reliable results for patient care and offer a broad range of cardiac services from our non-invasive examinations and tests.',
            image: <RiHandHeartFill style={{ color: '#4E97FD', width: '70px', height: '70px' }} />
        },
        {
            id: 4,
            name: 'Radiology',
            description: 'Hermon’s Radiology services uses various radiation techniques like X-rays and other high-energy radiation to develop images of the body internally for diagnosis and precise treatment of diseases. Our Laboratory is equipped with advanced Radiology equipments for accurate, precise and reproducible results for various medical conditions requiring diagnostic images.',
            image: <RiUserSettingsFill style={{ color: '#4E97FD', width: '70px', height: '70px' }} />
        },
        {
            id: 5,
            name: 'Blood Bank',
            description: 'Our blood bank service is targeted at providing blood and blood products to our customers when needed to prevent deaths due to lack of supply.',
            image: <BiDonateBlood style={{ color: '#4E97FD', width: '70px', height: '70px' }} />
        },
        {
            id: 6,
            name: 'Cardiology',
            description: 'We are one of the best health clinics in town, with over 25 certified and qualified.',
            image: <BsHeartPulseFill style={{ color: '#4E97FD', width: '70px', height: '70px' }} />
        },
    ]
    return (
        <div className='mt-16 text-center flex flex-col items-center '>
            <h1 className='text-5xl font-semibold text-black'>Our Services</h1>
            <h4 className='py-6 text-xl text-black'>With the touch of advanced technology, we are always at your side with the assurance of the latest health care.
            </h4>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10'>
                {services.map((service) => <ServiceCard
                    key={service.id}
                    name={service.name}
                    description={service.description}
                    image={service.image}
                />)}
            </div>
            <button className='mt-10 text-2xl font-medium bg-primary w-fit px-8 flex items-center justify-center py-4 rounded-xl text-white hover:bg-[#0ED3B0]'><Link to='/' >View All Service</Link></button>
        </div>
    );
};

export default OurServices;