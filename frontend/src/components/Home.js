import React, { useEffect, useState, useRef } from 'react';
import './Home.css'; 
import { Link } from 'react-router-dom';
import food from './images/food.png';
import home from './images/home.png';
import hel from './images/hel.png';
import edu from './images/edu.png';
import soc from './images/soc.png';
import co1 from './images/co1.jpg';
import co2 from './images/co2.jpg';
import t1 from './images/t1.jpeg';
import t2 from './images/t2.jpg';
import t3 from './images/t3.jpg';
import t4 from './images/t4.jpg';
import i1 from './images/i1.jpg';
import i2 from './images/i2.jpg';
import i3 from './images/i3.jpg';

import {
  MDBCard,
  MDBCardBody,
  MDBCarousel,
  
  MDBCarouselItem,
  MDBCol,
  MDBContainer,

  MDBRow,
} from "mdb-react-ui-kit";
const teamMembers = [
  {
    name: 'Shobha Motghare',
    position: 'Secretary',
    img:t1,

    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/shobha-motghare-0a6a57238/',
    }
  }, {
    name: 'Payal Badhe',
    position: 'President',
    img:t2,
    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/payal-badhe-531756aa/',
    
    }
  },
  {
    name: 'Bharti Shendre',
    position: 'Treasurer',
    img:t3,

    socialMedia: {
      linkedin: 'https://linkedin.com/in/johndoe',
    
    }
  }, {
    name: 'Nilima Kalambe',
    position: 'Advisor',
    img:t4,

    socialMedia: {
      linkedin: 'https://linkedin.com/in/johndoe',
    
    }
  }
 
];
function Home() {
  const [count, setCount] = useState({ countries: 0, volunteers: 0, internship: 0, treesPlanted: 0 });
  const sectionRef = useRef(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeIn1, setFadeIn1] = useState(false);

  const [changeBackground, setChangeBackground] = useState(false);

  useEffect(() => {
    setFadeIn(true);
    const handleScroll = () => {
        const card = document.querySelector('.card1');
        if (!fadeIn1 && isInViewport(card)) {
            setFadeIn1(true);
        }
    };
    window.addEventListener('scroll', handleScroll);

    const meoElement = document.querySelector('section.meo');
    meoElement.scrollIntoView({ behavior: 'smooth' });

    const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
            startAnimation();
            observer.unobserve(entry.target);
        }
    }, { threshold: 0.5 });

    if (sectionRef.current) {
        observer.observe(sectionRef.current);
    }

    // Start background image animation
    const backgroundAnimationInterval = setInterval(() => {
        setChangeBackground((prevChangeBackground) => !prevChangeBackground);
    }, 3000);

    return () => {
        clearInterval(backgroundAnimationInterval);
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  
  const isMobileDevice = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };
  
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };


const startAnimation = () => {
    animateCounter('countries', 15);
    animateCounter('volunteers', 3);
    animateCounter('internship', 1);
    animateCounter('treesPlanted', 54);
  };

  const animateCounter = (key, target) => {
    const increment = target / 30; 

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount[key] < target) {
          return { ...prevCount, [key]: Math.min(prevCount[key] + increment, target) };
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 100);
  };

  return (
    <section className='pb-0 meo' >
  <div className="diagonal-container meow" style={{ backgroundColor: '#c8bbbb', minHeight: '100vh', position: 'relative' }} ref={sectionRef} >
    <div className="diagonal-background black"></div>
    <div className={`diagonal-background image ${changeBackground ? 'change' : ''}`}></div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className={`card mb-4 ${fadeIn ? 'fade-in' : ''}`} style={{ backgroundImage: 'linear-gradient(200deg, #ff9100 0%, #a30689 100%)', boxShadow: ' 0 0px 40px #f09cef', width: '750px' }}>
                  <div className="card-body">
                    <h1 className='fw-bold text-light' style={{ fontSize: '2.3125rem' }}>Welcome to </h1>
                    <h1 className='fw-bold text-light' style={{ fontSize: '4rem' }}>Suvidha Mahila Mandal</h1>
                    <p className='fw-bold'>
                      We are a non-profit organization dedicated to providing quality
                      education and empowerment to the financially challenged sections of society.
                    </p>
                    <Link to="/donate" className="btn fw-bold text-light " style={{ backgroundColor: '#512a74', fontSize: '20px' }}>Donate Now</Link>
                    <Link to="/aboutus" className="btn fw-bold text-light ms-4" style={{ backgroundColor: '#512a74', fontSize: '20px' }}>Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="internship-strip" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', color: 'white', marginBottom: '60px' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="content-moving">
                  <p className='me-3'>Bringing Smile To Millions</p>
                  <p className='me-3'>Get Your Donations Tax Exempted</p>
                  <p className='me-3'>Student Internship Mentorship Program</p>
                  <p className='me-3'>Ensuring Happy and Healthy Animals through Feeding Programs</p>
                  <p className='me-3'><i className='bi bi-phone me-2'></i>+91 7020044091 </p>
                  <p className='me-3'><i className='bi bi-chat-fill me-2'></i>info@suvidhafoundationedutech.org </p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div className="jumbotron">
        <div className="container text-center">
          <h1 className="display-4 fw-bold pt-5 ms-5 me-5 ps-5 pe-5" style={{ color: 'rgb(232, 127, 55)', fontSize: '' }}>Apply For Internship and Mentorship Programs</h1>
          <h3 className="mt-3 ms-5 me-5 ps-5 pe-5" style={{ color: '' }}>Seize the opportunity to gain invaluable experience and jumpstart your career with an internship that propels you towards success.</h3>
          <p className="mt-3 ms-5 me-5 ps-5 pe-5">The Suvidha Foundation Internship Program is a unique opportunity for students and recent graduates to gain experience and contribute to the work of Suvidha Foundation. Along with undertaking tasks related to their specific skills, we encourage interns to develop a reputable professional portfolio.</p>
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform" target='_blank' className="btn text-light fw-bold fs-5 mt-3 mb-4" style={{ backgroundColor: '#9f2176' }}>Apply Here</Link>
        </div>
      </div>

      <div className="container-fluid con1 mt-5 d-flex align-items-stretch" >
        <div style={{ backgroundColor: '' }}>
          <h1 className='fw-bold text-center he pt-4 mt-4' style={{ color: 'white' }}>What We Do?</h1>
          <div className="row mt-4 ms-5">
            <div className="col-12 col-md-6 col-lg-4 ">
              <div className={`card card1 mb-4 mt-5 ${fadeIn1 ? 'fade-in1' : ''}`} style={{ width: '22rem', transition: 'all .2s linear' }}>
                <div className="card-body">
                  <div className='container'>
                    <div className="row align-items-start">
                      <div className="col" style={{ width: '60px' }}>
                        <img src={food} width={60} height={60} alt="" style={{ transition: 'all .2s linear' }} />
                      </div>
                      <div className="col mb-4" style={{ width: '200px' }}>
                        <h5 className="card-title mt-3 me-5 fw-bold pe-" style={{ color: '#512a74', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', transition: 'all .2s linear' }}>
                          Healthy Food</h5>
                      </div>
                      <p className='ms-3 me-2' style={{ transition: 'all .2s linear' }}>By focusing on healthy food donations, our NGO aims to improve the well-being and quality of life for individuals and communities in need.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-12 col-md-6 col-lg-4 ">
              <div className={`card card1 mb-4 mt-5 ${fadeIn1 ? 'fade-in1' : ''}`} style={{ width: '22rem', transition: 'all .2s linear' }}>
                <div className="card-body">
                  <div className='container'>
                    <div className="row align-items-start">
                      <div className="col" style={{ width: '60px' }}>
                        <img src={home} width={60} height={60} alt="" style={{ transition: 'all .2s linear' }} />
                      </div>
                      <div className="col mb-4" style={{ width: '200px' }}>
                        <h5 className="card-title mt-3 me-2 fw-bold pe-" style={{ color: '#512a74', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', transition: 'all .2s linear' }}>Social Awareness</h5>
                      </div>
                      <p className='ms-3 me-2' style={{ transition: 'all .2s linear' }}>We provide resources, conduct awareness campaigns, and facilitate access to hygiene facilities, aiming to create a healthier environment and prevent the spread of diseases.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-12 col-md-6 col-lg-4 ">
              <div className={`card card1 mb-4 mt-5 ${fadeIn1 ? 'fade-in1' : ''}`} style={{ width: '22rem', transition: 'all .2s linear' }}>
                <div className="card-body">
                  <div className='container'>
                    <div className="row align-items-start">
                      <div className="col" style={{ width: '60px' }}>
                        <img src={food} width={60} height={60} alt="" style={{ transition: 'all .2s linear' }} />
                      </div>
                      <div className="col mb-4" style={{ width: '200px' }}>
                        <h5 className="card-title mt-3 me-3 fw-bold pe-" style={{ color: '#512a74', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', transition: 'all .2s linear' }}>
                          Tree Plantation</h5>
                      </div>
                      <p className='ms-3 me-2' style={{ transition: 'all .2s linear' }}>Through community engagement and active participation, we successfully planted thousands of trees, fostering a greener and healthier ecosystem for future generations.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-12 col-md-6 col-lg-4 ">
              <div className={`card card1 mb-4 mt-5 ${fadeIn1 ? 'fade-in1' : ''}`} style={{ width: '22rem', transition: 'all .2s linear' }}>
                <div className="card-body">
                  <div className='container'>
                    <div className="row align-items-start">
                      <div className="col" style={{ width: '60px' }}>
                        <img src={hel} width={60} height={60} alt="" style={{ transition: 'all .2s linear' }} />
                      </div>
                      <div className="col mb-4" style={{ width: '200px' }}>
                        <h5 className="card-title mt-3 me-2 fw-bold pe-" style={{ color: '#512a74', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', transition: 'all .2s linear' }}>Health Care</h5>
                      </div>
                      <p className='ms-3 me-2' style={{ transition: 'all .2s linear' }}>We believe that access to healthcare is a fundamental right, and we work tirelessly to ensure that healthcare services are accessible, affordable, and of high quality for those in need</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className={`card card1 mb-4 mt-5 ${fadeIn1 ? 'fade-in1' : ''}`} style={{ width: '22rem', transition: 'all .2s linear' }}>
                <div className="card-body">
                  <div className='container'>
                    <div className="row align-items-start">
                      <div className="col" style={{ width: '60px' }}>
                        <img src={edu} width={60} height={60} alt="" style={{ transition: 'all .2s linear' }} />
                      </div>
                      <div className="col mb-4" style={{ width: '200px' }}>
                        <h5 className="card-title mt-3 me-0 fw-bold pe-" style={{ color: '#512a74', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', transition: 'all .2s linear' }}>Primary Education</h5>
                      </div>
                      <p className='ms-3 me-2' style={{ transition: 'all .2s linear' }}>By collaborating with local communities and educators, we aim to empower children with the knowledge and skills they need for a brighter future.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div> <div className="col-12 col-md-6 col-lg-4 ">
              <div className={`card card1 mb-4 mt-5 ${fadeIn1 ? 'fade-in1' : ''}`} style={{ width: '22rem', transition: 'all .2s linear' }}>
                <div className="card-body">
                  <div className='container'>
                    <div className="row align-items-start">
                      <div className="col" style={{ width: '60px' }}>
                        <img src={soc} width={60} height={60} alt="" style={{ transition: 'all .2s linear' }} />
                      </div>
                      <div className="col mb-4" style={{ width: '200px' }}>
                        <h5 className="card-title mt-3 me-5 fw-bold pe-" style={{ color: '#512a74', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', transition: 'all .2s linear' }}>Social Care</h5>
                      </div>
                      <p className='ms-3 me-2' style={{ transition: 'all .2s linear' }}>Our programs encompass a range of support services, including counseling, vocational training, and advocacy, with the goal of empowering individuals</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron2 mt-5" >
        <div className="container text-center">
          <h1 className='fw-bold text-center ' style={{ color: '#512A74' }}>Empowering Change Together: Our Collaborative Initiatives</h1>

          <div className="row mt-4">
            <div className="col">
              <img src={co1} width={305} height={169} alt="" />
            </div>

            <div className="col">
              <img src={co2} width={305} height={169} alt="" />
            </div>

            <div className="col">
              <img src={co1} width={305} height={169} alt="" />
            </div>


          </div>
        </div>
      </div>
      <div className="jumbotron1" ref={sectionRef}>
        <div className="container text-center">
          <div className="row mt-4">
            <div className="col">
              <div className="card mb-4 mt-5" style={{ width: '18rem' }}>
                <div className="card-body">
                  <div className='container'>
                    <i className="bi bi-globe-americas" style={{ fontSize: '80px', color: '#512A74' }}></i>
                    <div className="col mb-4" style={{ width: '200px' }}>
                      <h1 className="card-title mt-3 ms-5 fw-bold text-center" style={{ color: '#9f2176', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '45px' }}>
                        {count.countries.toFixed(0)}+</h1>
                    </div>
                    <p className='ms-3 me-2 fw-bold' style={{ fontSize: '25px', color: '#DD7228' }}>Countries</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card mb-4 mt-5" style={{ width: '18rem', transition: 'all .2s linear' }}>
                <div className="card-body">
                  <div className='container'>
                    <i className="bi bi-people-fill" style={{ fontSize: '80px', color: '#512A74' }}></i>
                    <div className="col mb-4" style={{ width: '200px' }}>
                      <h1 className="card-title mt-3 ms-5 fw-bold text-center" style={{ color: '#9f2176', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '45px' }}>
                        {count.volunteers.toFixed(0)} L+</h1>
                    </div>
                    <p className='ms-3 me-2 fw-bold' style={{ fontSize: '25px', color: '#DD7228' }}>Volunteers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card mb-4 mt-5" style={{ width: '18rem', transition: 'all .2s linear' }}>
                <div className="card-body">
                  <div className='container'>
                    <i className="bi bi-pc-display" style={{ fontSize: '80px', color: '#512A74' }}></i>
                    <div className="col mb-4" style={{ width: '200px' }}>
                      <h1 className="card-title mt-3 ms-5 fw-bold text-center" style={{ color: '#9f2176', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '45px' }}>
                        {count.internship.toFixed(0)} Cr+</h1>
                    </div>
                    <p className='ms-3 me-2 fw-bold' style={{ fontSize: '25px', color: '#DD7228' }}>Internship Goal</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card mb-4 mt-5" style={{ width: '18rem', transition: 'all .2s linear' }}>
                <div className="card-body">
                  <div className='container'>
                    <i className="bi bi-tree" style={{ fontSize: '80px', color: '#512A74' }}></i>
                    <div className="col mb-4" style={{ width: '200px' }}>
                      <h1 className="card-title mt-3 ms-5 fw-bold text-center" style={{ color: '#9f2176', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '45px' }}>
                        {count.treesPlanted.toFixed(0)} L+</h1>
                    </div>
                    <p className='ms-3 me-2 fw-bold' style={{ fontSize: '25px', color: '#DD7228' }}>Trees Planted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="meet-our-team-section">
      <h1 className="fw-bold section-heading he">Meet Our Team</h1>
      <h3 className="text-center mt-4 fw-bold" style={{ color: '#DD7228' }}>Guys behind our charity activities</h3>

      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member-card" key={index} style={{boxShadow: 'rgb(240, 156, 239) 0px 0px 40px'}}>
            <div className="member-image">
              <img src={member.img} alt={member.name} />
            </div>
            <div className="member-details">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-position">{member.position}</p>
              <div className="social-links">
                <Link to={member.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin text-primary"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <div className="container-fluid con2 mt-5 d-flex align-items-stretch" >
        <div style={{ backgroundColor: '' }}>
          <h1 className='fw-bold text-center he pt-4 mt-4' style={{ color: 'white' }}>  Testimonial</h1>
          <h3 className="text-center mt-4 fw-bold" style={{ color: 'yellow' }}>What people are talking about our charity activities</h3>

          <MDBContainer fluid className="py-5 ">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="12">
          <div className="text-center mb-4 pb-2">
          <i class="bi bi-quote text-dark fw-bold" style={{fontSize:'50px'}}></i>          </div>
          <MDBCard>
            <MDBCardBody className="px-4 py-5">
              <MDBCarousel showIndicators showControls dark>
                <div>
                  <MDBCarouselItem className="active">
                    <MDBRow className="d-flex justify-content-center">
                      <MDBCol lg="10" xl="8">
                        <MDBRow>
                          <MDBCol
                            lg="4"
                            className="d-flex justify-content-center"
                          >
                            <img
                              src={i1}
                              className="rounded-circle shadow-1 mb-4 mb-lg-0"
                              alt="woman avatar"
                              width="150"
                              height="150"
                            />
                          </MDBCol>
                          <MDBCol
                            md="9"
                            lg="7"
                            xl="8"
                            className="text-center text-lg-start mx-auto mx-lg-0"
                          >
                            <h4 className="mb-4">
                            Manya Sahni
                            </h4>
                            <p className="mb-0 pb-3">
                             
                            It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. 
                            
                            </p>
                          </MDBCol>
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCarouselItem>
                  <MDBCarouselItem>
                    <MDBRow className="d-flex justify-content-center">
                      <MDBCol lg="10" xl="8">
                        <MDBRow>
                          <MDBCol
                            lg="4"
                            className="d-flex justify-content-center"
                          >
                            <img src={i2}
                              className="rounded-circle shadow-1 mb-4 mb-lg-0"
                              alt="woman avatar"
                              width="150"
                              height="150"
                            />
                          </MDBCol>
                          <MDBCol
                            md="9"
                            lg="7"
                            xl="8"
                            className="text-center text-lg-start mx-auto mx-lg-0"
                          >
                            <h4 className="mb-4">
                            Ananya Tripathi
                            </h4>
                            <p className="mb-0 pb-3">
                              
                             Regular meetings really helped in systematic learning as well as working.
                             It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn.
                            </p>
                          </MDBCol>
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCarouselItem>
                  <MDBCarouselItem>
                    <MDBRow className="d-flex justify-content-center">
                      <MDBCol lg="10" xl="8">
                        <MDBRow>
                          <MDBCol
                            lg="4"
                            className="d-flex justify-content-center"
                          >
                            <img
                              src={i3}
                              className="rounded-circle shadow-1 mb-4 mb-lg-0"
                              alt="woman avatar"
                              width="150"
                              height="150"
                            />
                          </MDBCol>
                          <MDBCol
                            md="9"
                            lg="7"
                            xl="8"
                            className="text-center text-lg-start mx-auto mx-lg-0"
                          >
                            <h4 className="mb-4">
                            Divina Malfoy
                            </h4>
                            <p className="mb-0 pb-3">
                            
                            It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. 
                            
                            </p>
                          </MDBCol>
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCarouselItem>
                </div>
              </MDBCarousel>
            </MDBCardBody>
          </MDBCard>
          <div className="text-center mt-4 pt-2">
          <i className="bi bi-quote fw-bold" style={{ fontSize: '50px', transform: 'rotate(360deg)',color:'black' }}></i>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
          </div>
           </div>
    </section>
  );
}

export default Home;
