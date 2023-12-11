import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import hospitalImage from '../../assets/images/14.jpg';

const Welcome = () => {
    const welcomeData = {
        title: 'Welcome to Joypurhat Diagnostic & Dialysis Centre',
        head1: 'With the touch of advanced technology, we are always at your side with the assurance of the latest health care.',
        head2: 'In Joypurhat, we are the first to do dialysis by Germany’s world famous Fresenius dialysis machine. Our patients have very praised for our service.',
        points: [
            { id: 'c5e2cb73-332d-4927-874a-1615d2d3a3cc', name: 'Modern Technology' },
            { id: 'e1df6c68-dc65-4f63-be04-0c41a9c02331', name: 'Sunday to Monday 7AM to 10PM' },
            { id: 'a5b56cd4-2541-4f0b-bcd8-2703063389d4', name: 'Committed to Service' },
            { id: 'f067444d-5e88-427b-99cc-d9386c3e98df', name: 'It is Our Duty to Serve the Patient' },
        ],
        description: 'We are here to provide you standard and qualitative medical services. We have modern technology. We have standard machine in pathology, Ultrasonogram, x-ray and dialysis. We have experienced and expert Technologist in every sector. Here is available all kind of Pathological test, Ultrasonogram, and Dialysis. We try our best to provide you qualitative test and service.',
    }

    return (
        <div className="hero mt-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left lg:ml-10 text-xl">
                    <h1 className="text-5xl font-semibold">{welcomeData.title}</h1>
                    <p className="py-4">{welcomeData.head1}</p>
                    <p className="py-4">{welcomeData.head2}</p>
                    {welcomeData.points.map(point => <p key={point.id} className='flex items-center gap-x-3 mt-2'>
                        <BsFillCheckCircleFill style={{ color: '#0ED3B0' }} /> {point.name}
                    </p>)}
                    <label htmlFor='more-about-jddc' className='mb-10 text-2xl font-medium bg-primary w-fit mt-4 px-8 flex items-center justify-center py-2 rounded-xl text-white hover:bg-[#0ED3B0] cursor-pointer'>More About</label>

                    <input type="checkbox" id='more-about-jddc' className="modal-toggle" />
                    <div className="modal" role="dialog">
                        <div className="card card-side bg-base-100 shadow-xl">
                            {/* <figure><img src={image} alt={name} /></figure> */}
                            <div className="card-body">
                                <h2 className="card-title font-bold">{welcomeData.title}</h2>
                                <p className='w-[600px] text-lg font-normal text-left'>
                                    {welcomeData.description}
                                </p>
                                <div className="modal-action card-actions justify-end">
                                    <label htmlFor='more-about-jddc' className="btn">Close!</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                    <div className="card-body">
                        <img src={hospitalImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;