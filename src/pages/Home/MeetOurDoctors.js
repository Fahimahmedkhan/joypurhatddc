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
            name: 'Kaiya Kenter',
            designation: 'Gynecologist',
            image: doctor1
        },
        {
            id: 2,
            name: 'Jaylon Bergson',
            designation: 'Gynecologist',
            image: doctor2
        },
        {
            id: 3,
            name: 'Dr. Md. Mijanur Rahman',
            designation: 'Gynecologist',
            image: doctor3
        },
        {
            id: 4,
            name: 'Alfonso Saris',
            designation: 'Gynecologist',
            image: doctor4
        },
        {
            id: 5,
            name: 'Alfonso Saris',
            designation: 'Gynecologist',
            image: doctor5
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