import React, { useEffect, useState } from 'react';
import './Donate.css';
import img1 from './images/avllssui.png';
import img2 from './images/mission.png';
import img3 from './images/women.jpg';

function About() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div className="container con pb-5">
            <h1 className='fw-bold text-center he' style={{ color: '#9f2176' }}>About us</h1>
            <p className='text-center mt-4 mb-4'>Suvidha Mahila Mandal is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future. The organization has provisions of student internships, student mentorship and the scope to volunteer. Through these programmes, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equip them for the unforeseen future.</p>
            <hr style={{ color: '#fdcf46', fontWeight: '500' }} />
            <div className="container" style={{ backgroundColor: '#911a85' }}>
                <div className={`card-body ${animate ? 'card2' : ''}`}>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <img src={img1} width={500} height={300} alt="Slide 1" />
                        </div>
                        <div className="col-md-6">
                            <h1 className="text-start fw-bold mb-3" style={{ color: '#fdcf46' }}>VISION</h1>
                            <p className='text-light'><i className='bi bi-circle-fill me-2' style={{ fontSize: '10px' }}></i>To build Next Generation Entrepreneur, by providing them a Skill-Based Education.</p>
                            <p className='text-light'><i className='bi bi-circle-fill me-2' style={{ fontSize: '10px' }}></i>To Provide Internship, Training And Workshops and Quality Education All Over The World.</p>
                            <p className='text-light'><i className='bi bi-circle-fill me-2' style={{ fontSize: '10px' }}></i>Emphasize practical skills development, critical thinking, problem-solving, and adaptability to prepare entrepreneurs for the challenges of the modern business landscape.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{ backgroundColor: '#582c7f' }}>
                <div className={`card-body ${animate ? 'card2' : ''}`}>
                    <div className="row ">
                        <div className="col-md-6 ">
                            <h1 className="text-start fw-bold mb-3" style={{ color: '#fdcf46' }}>MISSION</h1>
                            <p className='text-light'><i className='bi bi-circle-fill me-2' style={{ fontSize: '10px' }}></i>To Inspire Students, help them Innovate and let them Integrate to build the next generation humankind.</p>
                            <p className='text-light'><i className='bi bi-circle-fill me-2' style={{ fontSize: '10px' }}></i>To Run Food Donation And Awareness Campaign In Rural Region.</p>
                            <p className='text-light'><i className='bi bi-circle-fill me-2' style={{ fontSize: '10px' }}></i>Empower students with the necessary skills, knowledge, and mindset to become catalysts for positive change in their communities and beyond.</p>
                        </div>
                        <div className="col-md-6">
                            <img src={img2} width={400} height={300} alt="Slide 1" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`mt-4 d-flex justify-content-center ${animate ? 'card2' : ''}`}>
                <img src={img3} width={700} height={400} alt="Slide 1" />
            </div>
        </div>
    );
}

export default About;
