import './Donate.css';
import React, { useEffect, useState } from 'react';
function Contact() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);
    return (
        <div className="container con">
            <h1 className='fw-bold text-center he' style={{ color: '#9f2176' }}>Contact Us</h1>
            <h3 className="text-center mt-4 fw-bold" style={{ color: '#e87f37' }}>Get in Touch</h3>

            <div className="row mt-4">
                <div className="col-md-6">
                    <h2 className='fw-bold ' style={{color:"#512a74"}}>Contact Us</h2>
                    <div class="card mb-4" style={{ boxShadow: ' 0 0px 40px #f09cef' }}>
                        <div class="card-body fw-bold">
                        <form action="https://docs.google.com/forms/d/e/1FAIpQLSfAaaHU-k256CY6_83JPBOYeVFtKuKBvqMJb7oBIsDLKRmwNg/formResponse" method="POST" target="_blank">
    <div className="form-group">
        <label htmlFor="fullName" style={{color:'#9f2176'}}>Full Name:</label>
        <input type="text" className="form-control" id="fullName" name="YPqjbf" placeholder="Enter your full name" required />
    </div>
    <div className="form-group">
        <label htmlFor="email" className='mt-3' style={{color:'#9f2176'}}>Email Address:</label>
        <input type="email" className="form-control" id="email" name="entry.0987654321" placeholder="Enter your email address" required />
    </div>
    <div className="form-group">
        <label htmlFor="phone" className='mt-3' style={{color:'#9f2176'}}>Phone Number:</label>
        <input type="tel" className="form-control" id="phone" name="entry.1357902468" placeholder="Enter your phone number" required />
    </div>
    <div className="form-group">
        <label htmlFor="message" className='mt-3' style={{color:'#9f2176'}}>Message:</label>
        <textarea className="form-control" id="message" name="entry.2468013579" rows="5" placeholder="Enter your message" required></textarea>
    </div>
    <button type="submit" className="btn text-light mt-3" style={{ backgroundColor: '#512a74', fontSize: '18px' }}>Submit</button>
</form>
                </div>  </div>  </div>

                <div className="col-md-6">

                    <h2 className='fw-bold ' style={{color:"#512a74"}}>Contact Information</h2>
                    <div class={`card mb-4 ${animate ? 'card3' : ''}`} style={{ backgroundImage: 'linear-gradient(200deg, #ff9100 0%, #a30689 100%)' }}>
                        <div class="card-body fw-bold">
                            <p class="card-text text-light text-center ms-1"> <i class="bi bi-geo-alt-fill me-4"></i>Suvidha Mahila Mandal, Walni Ward No. 1, Jai Bhole Nagar, Walni, Saoner Nagpur, Maharashtra 441102
                            </p>

                            <p class="card-text text-light ms-2"><i class="bi bi-geo-alt-fill me-4"></i>Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad</p>
                        </div>
                    </div>
                    <div class={`card mb-4 ${animate ? 'card3' : ''}`} style={{ backgroundImage: 'linear-gradient(200deg, #ff9100 0%, #a30689 100%)' }}>
                        <div class="card-body fw-bold">
                            <p class="card-text text-light  ms-1"> <i class="bi bi-telephone-outbound-fill me-4"></i>+91 7020044091
                            </p>

                        </div>
                    </div>
                    <div class={`card mb-4 ${animate ? 'card3' : ''}`} style={{ backgroundImage: 'linear-gradient(200deg, #ff9100 0%, #a30689 100%)' }}>
                        <div class="card-body fw-bold">
                            <p class="card-text text-light  ms-1"><i class="bi bi-envelope-at-fill me-4"></i>info@suvidhafoundationedutech.org
                            </p>

                        </div>
                    </div>
                    <div class={`card mb-4 ${animate ? 'card3' : ''}`} style={{ backgroundImage: 'linear-gradient(200deg, #ff9100 0%, #a30689 100%)' }}>
                        <div class="card-body fw-bold">
                            <p class="card-text text-light  ms-1"><i class="bi bi-clock-fill me-4"></i>Office hours: 9:00 am to 4.30pm
                            </p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Contact;
