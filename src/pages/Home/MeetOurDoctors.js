import React from 'react';
import DoctorCard from './DoctorCard';
import doctor1 from '../../assets/images/doctors/01.svg'
import doctor2 from '../../assets/images/doctors/02.svg'
import doctor3 from '../../assets/images/doctors/03.svg'
import doctor4 from '../../assets/images/doctors/04.svg'
import doctor5 from '../../assets/images/doctors/05.svg'

const MeetOurDoctors = () => {
    const doctors = [
        {
            id: 1,
            name: 'Dr. Md. Sohrab Hossain',
            designation: 'MBBS, BCS(H), D-CARD (BSMMU), MACP(USA)',
            image: doctor5
        },
        {
            id: 2,
            name: 'DR. Nur-Un-Nahar Nazme',
            designation: 'MBBS, BCS(H), FCPS Consultant (Gyne & Obs)',
            image: doctor4
        },
        {
            id: 3,
            name: 'Dr. Md. Rabiul Alam',
            designation: 'MBBS, BCS(H), MD(Nephrology) NIKDU, Dhaka',
            image: doctor1
        },
        {
            id: 4,
            name: 'Dr. Md. Ashik Ahmead Jebal',
            designation: 'MBBS, BCS, D-Ortho, Dhaka',
            image: doctor2
        },
        {
            id: 5,
            name: 'Dr. Md. Mizanur Rahman',
            designation: 'MBBS (Dhaka), BCS(H), PGT(Surgery)',
            image: doctor3
        },
    ]

    // const [doctors, setDoctors] = useState([]);

    // useEffect(() => {
    //     // Fetch the doctors list from API
    //     fetch('https://example.com/api/doctors')
    //         .then(response => response.json())
    //         .then(data => setDoctors(data))
    //         .catch(error => console.log(error));
    // }, []);



    return (
        <div className='mt-16 text-center flex flex-col items-center '>
            <h1 className='text-5xl font-semibold text-black'>Meet Our Doctors</h1>
            <h4 className='py-6 text-xl text-black'>We are one of the best health clinics in town, with over 25 certified and qualified doctors serving the community since 1998.
            </h4>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10'>
                {doctors.map((doctor) => <DoctorCard
                    key={doctor.id}
                    name={doctor.name}
                    designation={doctor.designation}
                    image={doctor.image}
                />)}
            </div>
        </div>
    );
};

export default MeetOurDoctors;