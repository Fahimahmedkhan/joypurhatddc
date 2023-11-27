import React from 'react';

const DoctorCard = ({ name, image, designation, id, details }) => {

    return (
        <div className="card w-96 bg-base-100 shadow-2xl hover:shadow-black mt-2">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl w-96 h-96" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{designation}</p>
            </div>
            <div className='flex justify-center items-center'>
                <label htmlFor={`doctors-details-${id}`} className='mb-10 text-2xl font-medium bg-primary w-fit px-8 flex items-center justify-center py-4 rounded-xl text-white hover:bg-[#0ED3B0] cursor-pointer'>Learn More</label>
            </div>

            <input type="checkbox" id={`doctors-details-${id}`} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={image} alt={name} /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">{name}</h2>
                        <p className='w-[600px] text-lg font-normal text-left'>{details}</p>
                        <div className="modal-action card-actions justify-end">
                            <label htmlFor={`doctors-details-${id}`} className="btn">Close!</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;