import './Donate.css';
import qr from './images/QR-Codes.jpg';
import img1 from './images/Suvidha-event.jpg';
import img2 from './images/Donation.jpg'
import img3 from './images/img3.jpg'

function Donate() {
    return (
        <div className="container con pb-5">
            <h1 className='fw-bold text-center he' style={{ color: '#9f2176' }}>Help Us</h1>
            <div className="row mt-5">
        
                
                <div className="col-md-6">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" style={{borderRadius:'10%'}}>
                                <img src={img1} className="d-block " width={900} height={530}  alt="Slide 1" />
                            </div>
                            <div className="carousel-item">
                                <img src={img2} className="d-block " width={900} height={530}  alt="Slide 2" />
                            </div>
                            <div className="carousel-item">
                                <img src={img3} className="d-block " width={900} height={530}  alt="Slide 3" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card" style={{ width: '100%',boxShadow:'0 20px 40px #f09cef' }}>
                        <div className="card-body">
                            <h1 className='fw-bold text-center he1' style={{ color: '#E87F37' }}>Account Details</h1>
                            <hr />
                            <div className="row justify-content-center align-items-center">
                                <div className="col">
                                    <h3 className="card-title mb-4 " style={{color:'#512A74'}}>For Indian Donors</h3>
                                    <p>Bank Of Baroda</p>
                                    <p>City: Nagpur</p>
                                    <p>Contact No: +91 8010996763</p>
                                    <p>Account Name: Suvidha Mahila Mandal</p>
                                    <p>Account No: 97840100027609</p>
                                    <p>IFSC Code: BARB0DBKPAR</p>
                                </div>
                                <div className="col">
                                    <h3 className="card-title ms-5  mt-5" style={{color:'#512A74'}}>QR Code</h3>
                                    <img className='rounded-circle mb-4' height={300} src={qr} alt="" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Donate;
