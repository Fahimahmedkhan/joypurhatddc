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
            details: 'Dr. Md. Sohrab Hossain passed MBBS from Rangpur Medical College in 2005. He joined government service through 33rd BCS in 2011. He completed his D-card degree under Bangabandhu Sheikh Mujib Medical University. He has completed CCD degree with Special Training in Diabetes from BIRDEM. He completed his MACP degree from America. He specializes in heart disease, hypertension, rheumatic fever and medicine. He has provided medical services at Square,     Ibne- Sina, Lab-Aid. He was formerly working as Registrar (Department of Cardiology) in Shaheed Ziaur Rahman Medical College, Bogura. He is currently working as Consultant (Cardiology) at Modern District Hospital, Joypurhat. He is a Fellow of the American College of Physicians.',
            image: doctor5
        },
        {
            id: 2,
            name: 'DR. Nur-Un-Nahar Nazme',
            designation: 'MBBS, BCS(H), FCPS Consultant (Gyne & Obs)',
            details: 'Dr. Nur-Un-Naher Nazme passed MBBS in 2003 from Shaheed Ziaur Rahman Medical College, Bogura. She completed post graduation training from Rajshahi Medical College Hospital. She joined government service through 25th BCS in 2006 and currently promoted as Consultant (Gyne & Obs). She completed FCPS (Gynae & Obs) in 2018 from BCPS. She received special training in basic Laparoscopic surgery from BMAS Lab-Aid Dhaka Bangladesh in 2018. She has specialized training in laparoscopy and hysteroscopy. She has done Fellowship (IVF, IUI) in Infertility and Gynecology from World Laparoscopy Hospital (NCR) Delhi, India in 2022 and Fellowship (FMAS) and Diploma (DMAS) in Minimal Access Surgery (Laparoscopy) from World Laparoscopy Hospital (NCR) Delhi, India in 2022. She is a member of the World Association of Laparoscopy Surgeons.',
            image: doctor4
        },
        {
            id: 3,
            name: 'Dr. Md. Rabiul Alam',
            designation: 'MBBS, BCS(H), MD(Nephrology) NIKDU, Dhaka',
            details: 'Dr. Md. Rabiul Alam passed MBBS in 2006 from Rajshahi Medical College, Rajshahi. He joined government service through 28th BCS in 2010. He completed MD (Nephrology) degree from National Institute of Kidney Diseases and Urology (NIKDU) under Bangabandhu Sheikh Mujib Medical University. He is working in (NIKDU) since 2019. He has completed CCD Degree with Special Training in Diabetes from BIRDEM. He specializes in diabetes medicine, kidney disease, dialysis and transplant. He does kidney biopsy, catheter (permanent, jugular, femoral and CAPD) regularly. During his career, he provided medical services in Diabetic Hospital (NHN, Foot Care), Dhaka Medical College Hospital, Sohrawardy Medical College Hospital, Mymensingh Medical College Hospital, and Bogra Medical College Hospital. He is a life member of Bangladesh Renal Association (BRA).',
            image: doctor1
        },
        {
            id: 4,
            name: 'Dr. Md. Ashik Ahmead Jebal',
            designation: 'MBBS, BCS, D-Ortho, Dhaka',
            details: 'Dr.Ashik Ahmad Jebal (Bappy) was born in west Janiarbagan, Notunhat,Joypurhat Sadar,Joypurhat.He completed his primary with securing a scholarship.He got himself admitted to R.B.Govt.High School.He was a topper of his batch.He passed S.S.C with golden A+ as a first one of Joypurhat district in grading system.He passed H.S.C with another golden A+.He secured a position in merit list in medical admission test & got chance to admit as a student of 36th batch of Sir Salimullah Medical College & Mitford Hospital,Dhaka.After passing his MBBS from SSMC,he joined as a health cadre on 36th BCS.He was one of only 180 health cadres in his BCS.He served Kalai upazilla Health Complex as RMO.With his skill & sincerity he helped Kalai UHC to be one of the best hospitals in Upazilla level of Bangladesh which got prestigious "Health Minister award".During Covid pandemic he lead from the front & his initiatives were praised on national dailies.He also served as EMO on Modernized District Hospital,Joypurhat with good will.He is now in course of Diploma in Orthopaedics in Bangabandhu Sheikh Mujib Medical University,Dhaka (then PG Hospital).',
            image: doctor2
        },
        {
            id: 5,
            name: 'Dr. Md. Mizanur Rahman',
            designation: 'MBBS (Dhaka), BCS(H), PGT(Surgery)',
            details: 'MBBS (Sir Salimullah Medical College Mitford Hospital, Dhaka), BCS (Health), PGT (Surgery), MS Resident (Phase-B) (Nose Ear Throat and Head-Neck Surgery), Dhaka Medical College Hospital, Dhaka. Dr Md Mizanur Rahman passed MBBS with honors in 2014 from Sir Salimullah Medical College and Mitford Hospital.He Joined government service in 2018 through 35th BCS.He Passed the MS(Otolaryngology) course in the MS/ MD Residency Examination held by Bangabandhu Sheikh Mujib Medical University in 2020. He Passed the MS Phase - A examination in 2022 with merit and is currently working as a MS Phase - B resident in the Department of Otorhinolaryngology and Head - Neck Surgery, Dhaka Medical College Hospital.',
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
                    id={doctor.id}
                    details={doctor.details}
                    name={doctor.name}
                    designation={doctor.designation}
                    image={doctor.image}
                />)}
            </div>
        </div>
    );
};

export default MeetOurDoctors;