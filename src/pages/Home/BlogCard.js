import React from 'react';

const BlogCard = ({ title, date, description }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-2xl hover:shadow-black mt-2">

            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p className='text-start'>{description}</p>
                <p className='text-primary font-medium text-xl'>{date}</p>
                <button className='mt-10 text-2xl font-medium bg-primary w-fit px-8 flex items-center justify-center py-4 rounded-xl text-white hover:bg-[#0ED3B0]'>Learn More</button>
            </div>
        </div>
    );
};

export default BlogCard;