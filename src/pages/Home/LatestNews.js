import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';

const LatestNews = () => {
    const blogs = [
        {
            id: 1,
            title: 'Health Care',
            date: '2020-01-01',
        },
        {
            id: 2,
            title: 'Health Care',
            date: '2020-01-01',
        },
        {
            id: 3,
            title: 'Health Care',
            date: '2020-01-01',
        },
        {
            id: 4,
            title: 'Health Care',
            date: '2020-01-01',
        },
    ]
    return (
        <div className='mt-16 mb-8 text-center flex flex-col items-center '>
            <h1 className='text-5xl font-semibold text-black'>Latest News</h1>
            <h4 className='py-6 text-xl text-black'>We are one of the best health clinics in town, with over 25 certified and qualified doctors serving the community since 1998.
            </h4>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10'>
                {blogs.map(blog => <BlogCard key={blog.id} title={blog.title} date={blog.date} />)}
            </div>
            <button className='mt-10 text-2xl font-medium bg-primary w-fit px-8 flex items-center justify-center py-4 rounded-xl text-white hover:bg-[#0ED3B0]'><Link to='/' >View All Service</Link></button>
        </div>
    );
};

export default LatestNews;