
import { Link } from 'react-router-dom'
import './footer.css'
import eg from './pdfs/80G_APROVAL.pdf'
import a from './pdfs/12A_APPROVAL.pdf'
import t from './pdfs/3.pdf'
import p from './pdfs/suvidha_darpan_portal_registration.pdf'
import pan from './pdfs/suvidha_pan_card.pdf'


function Footer() {
    return (
        <>
            <footer className="text-muted py-5 border-top  " style={{ backgroundImage: 'linear-gradient(180deg, #3c1164 0%, #761b89 50%)', color: 'white' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="footer-contact">
                                <h2 className='fs-3  mb-4 fw-bold' style={{ color: '#E87F37' }}> Suvidha Foundation (Suvidha Mahila Mandal)</h2>
                                <p className='text-light '>Suvidha Mahila Mandal, Walni Ward No. 1, Jai Bhole Nagar, Walni, Saoner Nagpur, Maharashtra 441102</p>
                                <p className='text-light '>Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad</p>
                                <div className="footer-social">
                                    <Link to="https://www.facebook.com/suvidhamahilamandal/" target='_blank'><i className="bi bi-facebook fs-2 me-3 text-dark so"></i></Link>
                                    <Link to="https://www.instagram.com/suvidha_mahila_mandal/?igshid=YmMyMTA2M2Y%3D" target='_blank'><i className="bi bi-instagram fs-2 me-3 text-dark so"></i></Link>
                                    <Link to="https://www.linkedin.com/company/suvidha-foundation/" target='_blank'><i className="bi bi-twitter fs-2 me-3 text-dark so"></i></Link>
                    

                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <div className='footer-link'>
                                <h2 className='fs-3  fw-bold' style={{ color: '#E87F37' }}>Certificates</h2>
                                <Link to={eg} className='fw-bold lk' style={{ textDecoration: 'none' }} target='_blank'><i class="bi bi-arrow-right " style={{ color: '#E87F37', fontSize: '20px', fontWeight: '1000' }}></i>
                                    <span className=' ms-3 fw-bold text-light lk' >80G Certificate</span></Link><br />
                                <Link to={a} className='fw-bold lk' style={{ textDecoration: 'none' }} target='_blank'><i class="bi bi-arrow-right " style={{ color: '#E87F37', fontSize: '20px', fontWeight: '1000' }}></i>
                                    <span className=' ms-3 fw-bold text-light lk' >12A Certificate</span></Link><br />
                                <Link to={t} className='fw-bold lk' style={{ textDecoration: 'none' }} target='_blank'><i class="bi bi-arrow-right " style={{ color: '#E87F37', fontSize: '20px', fontWeight: '1000' }}></i>
                                    <span className=' ms-3 fw-bold text-light lk' >CSR Certificate</span></Link><br />
                                <Link to={p} className='fw-bold lk' style={{ textDecoration: 'none' }} target='_blank'><i class="bi bi-arrow-right " style={{ color: '#E87F37', fontSize: '20px', fontWeight: '1000' }}></i>
                                    <span className=' ms-3 fw-bold text-light lk' >Suvidha Darpan Registration</span></Link><br />
                                <Link to={pan} className='fw-bold lk' style={{ textDecoration: 'none' }} target='_blank'><i class="bi bi-arrow-right " style={{ color: '#E87F37', fontSize: '20px', fontWeight: '1000' }}></i>
                                    <span className=' ms-3 fw-bold text-light lk' >Suvidha Pan Card</span></Link><br />
                          
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <div className='footer-link'>
                                <h2 className='fs-3  fw-bold' style={{ color: '#E87F37' }}>Useful Links</h2>
                                <Link to="https://suvidhafoundationedutech.org/verify.php" className='fw-bold lk' style={{ textDecoration: 'none' }} target='_blank'><i className="bi bi-arrow-right fw-bold " style={{ color: '#E87F37', fontSize: '20px', fontWeight: '1000' }}></i>
                                    <span className=' ms-3 fw-bold text-light lk' >Verify Your Certificate</span></Link><br />
                                <Link to="/privacypolicy" className='fw-bold lk' style={{ textDecoration: 'none' }} ><i class="bi bi-arrow-right " style={{ color: '#E87F37', fontSize: '20px', fontWeight: '1000' }}></i>
                                    <span className=' ms-3 fw-bold text-light lk' >Privacy Policy</span></Link><br />
                              
                            </div>
                        </div>
                    </div>
                </div>

             
                <div className="container">
                    <hr style={{ color: 'white' }} />
                    <p className="float-end mb-1 text-light" style={{ color: '#bababa' }}>
                        Develop By <span className="fw-bold text-light"> Diptish-World</span>
                    </p>
                    <p className="mb-1 text-light mt-3"><i className="bi bi-c-circle text-light me-1" style={{ color: '#bababa' }}></i><span className="fw-bold">Suvidha Foundation (Suvidha Mahila Mandal),</span><span style={{ color: '#bababa' }}> All Right Reserved</span></p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
