import React from 'react';

const BlogCard = ({ title, date }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-2xl mt-2">

            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{date}</p>
            </div>
        </div>
    );
};

export default BlogCard;