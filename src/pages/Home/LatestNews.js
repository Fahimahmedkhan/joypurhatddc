import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';

const LatestNews = () => {
    const blogs = [
        {
            id: 1,
            title: 'SQUARE Pharma as Platinum Sponsor',
            description: 'The Pharma Science Club (PSC) of the Department of Pharmacy, University of Asia Pacific (UAP) organized the Pharma Fest 2020 at UAP City Campus, Green Road, Dhaka on 5th February. SQUARE Pharmaceuticals Ltd. was the Platinum Sponsor of the Pharma Fest. Honorable Director General, Directorate General of Drug Administration (DGDA), Major General Md. Mahbubur Rahman addressed program as the Chief Guest. Mr. C.M. Shafi Sami, Chairman, Board of Trustees, UAP and Mr. Md. Mizanur Rahman, Executive Director, Operations, SQUARE Pharmaceuticals Ltd. were the special guests of the program. The program was chaired by National Professor Dr. Jamilur Reza Choudhury, Vice-Chancellor of UAP, Mr. Muhammad Mahbubul Haq, Secretary, Pharmacy Council of Bangladesh and Mr. M Mosaddek Hossain, Vice President, Pharmacy Council of Bangladesh also graced the program as respected guests. Prof. Dr. Swarnali Islam Khandaker, Head, Department of Pharmacy along with all faculty members of the Department and guest faculties from all participating universities were also present during the program.',
            date: '2020-01-01',
        },
        {
            id: 2,
            title: 'Free Diabetes Screening Program',
            description: 'To create awareness against the hazardous consequences of Diabetes, Square Pharmaceuticals Ltd. arranged “Free Diabetes Screening Campaign” at 10 (ten) different locations in Dhaka city from 6:00 am to 8:30 am on 14 November 2019 on the occasion of World Diabetes Day. The locations were Uttara Sector 7 Kollyan Samity Park, Uttara Sector 4 Kollyan Samity Park, Dr. Shaheed Fazle Rabbi Park (Gulshan Niketon), Outside of Mirpur Indoor Stadium, Manik Mia Avenue, Mohammadpur Thana Road, Ramna Park Gate, Azimpur Colony, Lalbagh Fort & Boldha Garden. On that day, around 2,500 people participated in this screening program enthusiastically. In addition, a patient awareness leaflet & 2 pcs Zerocal sachet were provided to all participants from Square Pharmaceuticals Ltd. and Square Toiletries Ltd. respectively. Moreover, to inform people about this awareness campaign, 13 November 2019 a Branded Caravan was run within Dhaka city.',
            date: '2020-01-01',
        },
        {
            id: 3,
            title: 'Nepalese Doctors Visited Square Pharma',
            description: 'A group of 43 Doctors from Nepalese Doctors Welfare Society visited Square Pharmaceuticals Ltd.s Kaliakoir facilities on May 4, 2017. They were very pleased to visit such a state- of - art facilities.On behalf of them Dr.Sailesh said that - "We had a very nice time visiting the company. It was a wonderful experience. We came to know different aspect of medicine productions and their quality assurance. Thanks and wishing all the best for future.',
            date: '2020-01-01',
        },
        {
            id: 4,
            title: 'US Ambassador visits Square Pharmaceuticals',
            description: 'US Ambassador Marcia Stephens Bloom Bernicat made a visit to Square Pharmaceuticals Limited’s facilities in Gazipur on 11 April, 2017. Managing Director of Square Pharma Tapan Chowdhury was present there to receive her. Among others, Mizanur Rahman, Executive Director (Operations), Nawabur Rahman, Technical Operations Director, and Rajiv Rana, Senior Manager (Human Resources) were also present during the visit. Later, a meeting took place there upon which Prosenjit Chakraborty on behalf of Square Pharma briefed the delegates about the overall state of the company. Visiting the facilities there, Ms. Bernicat highly appreciated the production quality, environment etc. among other things. She also had her positive words for Square Pharmaceuticals’ worldwide role as exporter of medicine. Tapan Chowdhury stated that the visit of the US Ambassador was a great opportunity to introduce Bangladesh to the world market. It can be mentioned here that Square Pharmaceuticals recently achieved FDA certification of the United States.',
            date: '2020-01-01',
        },
    ];

    return (
        <div className='mt-16 mb-8 text-center flex flex-col items-center '>
            <h1 className='text-5xl font-semibold text-black'>Latest News</h1>
            <h4 className='py-6 text-xl text-black'>We are one of the best health clinics in town, with over 25 certified and qualified doctors serving the community since 1998.
            </h4>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10'>
                {blogs.map(blog => <Link to={`/news/${blog.id}`} key={blog.id}>
                    <BlogCard key={blog.id} title={blog.title} date={blog.date} description={blog.description.slice(0, 300) + " ..."} />
                </Link>)}
            </div>
            <button className='mt-10 text-2xl font-medium bg-primary w-fit px-8 flex items-center justify-center py-4 rounded-xl text-white hover:bg-[#0ED3B0]'><Link to='/' >View All News</Link></button>
        </div>
    );
};

export default LatestNews;