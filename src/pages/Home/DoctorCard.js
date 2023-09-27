import React from 'react';

const DoctorCard = ({ name, image, designation }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-2xl hover:shadow-black mt-2">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl w-96 h-96" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{designation}</p>
            </div>
        </div>
    );
};

export default DoctorCard;