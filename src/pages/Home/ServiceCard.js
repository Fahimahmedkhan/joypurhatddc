import React from 'react';

const ServiceCard = ({ name, image, description }) => {
    const shortDescription = description.slice(0, 100);
    return (
        <div className="card w-96 bg-base-100 shadow-2xl hover:shadow-black mt-2">
            <figure className="px-10 pt-10">
                {image}
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{shortDescription}...</p>
                <label htmlFor='' className='mb-10 text-xl font-medium bg-primary w-fit mt-4 px-8 flex items-center justify-center py-2 rounded-xl text-white hover:bg-[#0ED3B0] cursor-pointer'>Learn More</label>
            </div>
        </div>
    );
};

export default ServiceCard;