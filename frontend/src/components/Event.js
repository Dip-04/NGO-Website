import './Event.css';
import tree from './images/tree.jpg'
import fu from './images/Fundraising.jpg'
import cloth from './images/Cloths-Distribution.jpg'
import women from './images/Womens.jpg'
import food from './images/food.jpg'
import feed from './images/feed.jpg'
import pad from './images/pad.jpg'
import shop from './images/shop.jpg'
import React, { useEffect, useState } from 'react';

function Event() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);
    return (
        <div class="wrapper">

            <div className="container con">
                <h1 className='fw-bold text-center he' style={{ color: '#9f2176' }}>Events</h1>
                <h3 className="text-center mt-4 fw-bold" style={{ color: 'rgb(81, 42, 116)' }}>Our Charity Events: Celebrating Our Impact Together</h3>

                <div className="row mt-4">
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class={`image-flip ${animate ? 'card3' : ''}`} >
                            <div class="mainflip flip-0">
                                <div class="frontside">
                                    <div class="card" style={{ width: '22rem', border: '15px solid white', boxShadow: ' 0 0px 40px #f09cef' }}>
                                        <div className="card-face front">
                                            <img src={tree} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h4 className="card-title fw-bold" style={{ color: '#9f2176' }}>
                                                    <i className="bi bi-tree-fill me-3 " style={{ color: '#D15D0E' }}></i>Tree Plantation
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="backside">
                                    <div class="card" style={{ width: '22rem', boxShadow: ' 0 0px 40px #f09cef', backgroundColor: '#D15D0E' }}>
                                        <div class="card-body text-center mt-4">
                                            <h4 className="card-title fw-bold text-light" >
                                                <i className="bi bi-tree-fill me-3 " ></i>Tree Plantation
                                            </h4>                                                               <p className='text-light mt-5'>Join us in nurturing the Earth's embrace, one tree at a time. Together, let's create a greener tomorrow and breathe life into our planet.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class={`image-flip ${animate ? 'card3' : ''}`} >
                            <div class="mainflip flip-0">
                                <div class="frontside">
                                    <div class="card" style={{ width: '22rem', border: '15px solid white', boxShadow: ' 0 0px 40px #f09cef' }}>
                                        <div className="card-face front">
                                            <img src={fu} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                            <h4 className="card-title fw-bold" style={{ color: '#9f2176' }}>
                                        <i className="bi bi-cash-stack me-3 me-3 " style={{ color: '#D15D0E' }}></i>Fundraising Events
                                    </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="backside">
                                    <div class="card" style={{ width: '22rem', boxShadow: ' 0 0px 40px #f09cef', backgroundColor: '#D15D0E' }}>
                                        <div class="card-body text-center mt-4">
                                            <h4 className="card-title fw-bold text-light" >
                                                <i className="bi bi-cash-stack me-3 " ></i>Fundraising Events
                                            </h4>                                                               <p className='text-light mt-5'>Unlock the power of generosity at our Fundraising Event. Your support will ignite positive change and uplift lives in our community.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class={`image-flip ${animate ? 'card3' : ''}`} >
                            <div class="mainflip flip-0">
                                <div class="frontside">
                                    <div class="card" style={{ width: '22rem', border: '15px solid white', boxShadow: ' 0 0px 40px #f09cef' }}>
                                        <div className="card-face front">
                                            <img src={cloth} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                            <h4 className="card-title fw-bold" style={{ color: '#9f2176' }}>
                                        <i className="bi bi-person-arms-up me-3 " style={{ color: '#D15D0E' }}></i>Cloths Distribution
                                    </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="backside">
                                    <div class="card" style={{ width: '22rem', boxShadow: ' 0 0px 40px #f09cef', backgroundColor: '#D15D0E' }}>
                                        <div class="card-body text-center mt-4">
                                            <h4 className="card-title fw-bold text-light" >
                                                <i className="bi bi-person-arms-up me-3 " ></i>Cloths Distribution
                                            </h4>                                                               <p className='text-light mt-5'>Unlock the power of generosity at our Fundraising Event. Your support will ignite positive change and uplift lives in our community.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class={`image-flip ${animate ? 'card3' : ''}`} >
                            <div class="mainflip flip-0">
                                <div class="frontside">
                                    <div class="card" style={{ width: '22rem', border: '15px solid white', boxShadow: ' 0 0px 40px #f09cef' }}>
                                        <div className="card-face front">
                                            <img src={women} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                            <h4 className="card-title fw-bold" style={{ color: '#9f2176' }}>
                                        <i className="bi bi-gender-female me-3 " style={{ color: '#D15D0E' }}></i>Women's Day
                                    </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="backside">
                                    <div class="card" style={{ width: '22rem', boxShadow: ' 0 0px 40px #f09cef', backgroundColor: '#D15D0E' }}>
                                        <div class="card-body text-center mt-4">
                                            <h4 className="card-title fw-bold text-light" >
                                                <i className="bi bi-gender-female me-3 " ></i>Women's Day
                                            </h4>                                                               <p className='text-light mt-5'>Celebrating the strength, resilience, and achievements of women worldwide on this special Women's Day. Together, let's honor their contributions.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>        
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class={`image-flip ${animate ? 'card3' : ''}`} >
                            <div class="mainflip flip-0">
                                <div class="frontside">
                                    <div class="card" style={{ width: '22rem', border: '15px solid white', boxShadow: ' 0 0px 40px #f09cef' }}>
                                        <div className="card-face front">
                                            <img src={food} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                            <h4 className="card-title fw-bold" style={{ color: '#9f2176' }}>
                                        <i className="bi bi-egg-fill me-3 me-3 " style={{ color: '#D15D0E' }}></i>Food Donation
                                    </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="backside">
                                    <div class="card" style={{ width: '22rem', boxShadow: ' 0 0px 40px #f09cef', backgroundColor: '#D15D0E' }}>
                                        <div class="card-body text-center mt-4">
                                            <h4 className="card-title fw-bold text-light" >
                                                <i className="bi bi-egg-fill me-3 " ></i>Food Donation
                                            </h4>                                                               <p className='text-light mt-5'>Your generous contributions can fill empty plates and bring smiles to those in need. Together, we can create a world where everyone has access to nutritious meals.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class={`image-flip ${animate ? 'card3' : ''}`} >
                            <div class="mainflip flip-0">
                                <div class="frontside">
                                    <div class="card" style={{ width: '22rem', border: '15px solid white', boxShadow: ' 0 0px 40px #f09cef' }}>
                                        <div className="card-face front">
                                            <img src={feed} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                            <h4 className="card-title fw-bold" style={{ color: '#9f2176' }}>
                                        <i className="bi bi-egg-fill me-3 " style={{ color: '#D15D0E' }}></i> Feeding Programs
                                    </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="backside">
                                    <div class="card" style={{ width: '22rem', boxShadow: ' 0 0px 40px #f09cef', backgroundColor: '#D15D0E' }}>
                                        <div class="card-body text-center mt-4">
                                            <h4 className="card-title fw-bold text-light" >
                                                <i className="bi bi-egg-fill me-3 " ></i>Feeding Programs
                                            </h4>                                                               <p className='text-light mt-5'>Join us in providing sustenance and compassion to our furry companions. Together, let's make a positive impact on their lives through our Animal Feeding event.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                  
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class={`image-flip ${animate ? 'card3' : ''}`} >
                            <div class="mainflip flip-0">
                                <div class="frontside">
                                    <div class="card" style={{ width: '22rem', border: '15px solid white', boxShadow: ' 0 0px 40px #f09cef' }}>
                                        <div className="card-face front">
                                            <img src={pad} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                            <h4 className="card-title fw-bold" style={{ color: '#9f2176' }}>
                                        <i className="bi bi-cash-stack me-3 me-3 " style={{ color: '#D15D0E' }}></i>Sanitary Pads Distribution
                                    </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="backside">
                                    <div class="card" style={{ width: '22rem', boxShadow: ' 0 0px 40px #f09cef', backgroundColor: '#D15D0E' }}>
                                        <div class="card-body text-center mt-4">
                                            <h4 className="card-title fw-bold text-light" >  <i className="bi bi-cash-stack me-3 " ></i>Sanitary Pads Distribution
                                            </h4>                                                               <p className='text-light mt-5'>Breaking barriers and promoting menstrual health with our Sanitary Pad Initiative. Together, let's empower women and ensure access to safe and dignified hygiene.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                    
                   
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class={`image-flip ${animate ? 'card3' : ''}`} >
                            <div class="mainflip flip-0">
                                <div class="frontside">
                                    <div class="card" style={{ width: '22rem', border: '15px solid white', boxShadow: ' 0 0px 40px #f09cef' }}>
                                        <div className="card-face front">
                                            <img src={shop} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                            <h4 className="card-title fw-bold" style={{ color: '#9f2176' }}>
                                        <i className="bi bi-shop me-3 " style={{ color: '#D15D0E' }}></i>Free Workshops
                                    </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="backside">
                                    <div class="card" style={{ width: '22rem', boxShadow: ' 0 0px 40px #f09cef', backgroundColor: '#D15D0E' }}>
                                        <div class="card-body text-center mt-4">
                                            <h4 className="card-title fw-bold text-light" >  <i className="bi bi-shop me-3 " ></i>Free Workshops
                                            </h4>                                                               <p className='text-light mt-5'>Discover new skills, ignite your passions, and embrace lifelong learning with our engaging and enriching free workshops.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                    

           
                </div>
            </div>        </div>


    );
}

export default Event;
