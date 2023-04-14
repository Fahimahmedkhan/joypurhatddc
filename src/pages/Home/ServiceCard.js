import React from 'react';

const ServiceCard = ({ name, image, description }) => {
    const shortDescription = description.slice(0, 100);
    return (
        <div className="card w-96 bg-base-100 shadow-2xl mt-2">
            <figure className="px-10 pt-10">
                {image}
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{shortDescription}...</p>
                <button className='text-primary mt-4'>Learn More</button>
            </div>
        </div>
    );
};

export default ServiceCard;