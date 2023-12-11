import React from 'react';
import { GiPersonInBed, GiHeartPlus } from 'react-icons/gi';
import { RiUserSettingsFill, RiHandHeartFill } from 'react-icons/ri';
import { BiDonateBlood } from 'react-icons/bi';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';

const OurServices = () => {
    const services = [
        {
            id: 1,
            name: 'Dialysis',
            description: 'In Joypurhat, we are the first to do dialysis. We do Dialysis by Germany’s world famous Fresenius dialysis machine. We have experienced and expert senior stuff nurse and Technician  for dialysis. Our patients are very pleased and grateful to us for our service.',
            image: <GiPersonInBed style={{ color: '#4E97FD', width: '70px', height: '70px' }} />
        },
        {
            id: 2,
            name: 'Infertility Care',
            description: 'We have Infertility care to take care of a mother. We have Infertility specialist  to provide you well planned advice and fruitful guidelines to conceive a healthy baby.',
            image: <GiHeartPlus style={{ color: '#4E97FD', width: '70px', height: '70px' }} />
        },
        {
            id: 3,
            name: 'Pathology',
            description: 'We are here to provide you a standard medical services to the patient at a minimum cost. Here is available any kind of Hematology, Biochemistry, Immunology, serology, and microbiological test.',
            image: <RiHandHeartFill style={{ color: '#4E97FD', width: '70px', height: '70px' }} />
        },
        {
            id: 4,
            name: 'Radiology',
            description: 'We will provide to you one of the best x-ray machine to do any kind of x-ray. we have experienced and expert technologist.',
            image: <RiUserSettingsFill style={{ color: '#4E97FD', width: '70px', height: '70px' }} />
        },
        {
            id: 5,
            name: 'Ultrasonogram',
            description: 'We are ready to provide you one of the best ultrasonogram machine to do any kind of ultrasonogram. We have experienced and expert Doctor to do ultrasonogram.',
            image: <BiDonateBlood style={{ color: '#4E97FD', width: '70px', height: '70px' }} />
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