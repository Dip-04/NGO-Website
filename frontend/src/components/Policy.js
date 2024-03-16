import './Donate.css';
import React, { useEffect, useState } from 'react';

function Policy() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);
    return (
      
        <div className="container con">
            <h1 className='fw-bold text-center he' style={{ color: '#9f2176' }}>Privacy Policy</h1>
            <p className='text-center mt-4 mb-4'>We at Suvidha Mahila Mandal respect your concerns about privacy and value the relationship we have with you. We are committed to the ethical collection, retention and use of information that you provide to us about yourself (“Personal Information”) on our website.
                This policy describes the types of personal information we collect, how we may use that information and with whom we may share it when you visit our site or use our services (collectively the “Services”).
                Our Privacy Policy also describes the measures we take to protect the security of the information.
                In addition, we describe the choices you can make about how we use the information you provide to us. We also tell you how you can reach us to update your contact information, remove your name from our mailing lists, or answer any questions you may have about our privacy practices.
                We maintain full confidentiality of all donors and contributors on our mailing and email lists, which will neither be sold to nor exchanged with any other organization or commercial enterprise, and we honour donors' opt-out choices in our mail, email, phone and other solicitations.</p>
            <div className="row mt-4">
                <div className="col-md-12">
                    <div class={`card mb-4 ${animate ? 'card3' : ''}`} style={{ backgroundImage: 'linear-gradient(200deg, #ff9100 0%, #a30689 100%)' }}>
                        <div class="card-body">
                            <h5 class="card-title text-center" style={{ color: 'black' }}>How Do We Use Your Information?</h5>
                            <p class="card-text text-light">Suvidha Mahila Mandal uses personally identifiable information you provide about yourself:</p>
                            <p class="card-text text-light"><i className='bi bi-circle-fill me-2 ' style={{fontSize:'10px'}}></i>To process your donation</p>
                            <p class="card-text text-light"><i className='bi bi-circle-fill me-2 fs-8'style={{fontSize:'10px'}}></i>To send you a receipt for your donation</p>
                            <p class="card-text text-light"><i className='bi bi-circle-fill me-2'style={{fontSize:'10px'}}></i>To send you a thank you note for your donation or volunteering.</p>
                            <p class="card-text text-light"><i className='bi bi-circle-fill me-2'style={{fontSize:'10px'}}></i>To respond to your questions or comments about Suvidha Mahila Mandal</p>
                            <p class="card-text text-light"><i className='bi bi-circle-fill me-2'style={{fontSize:'10px'}}></i>To send you additional information about Suvidha Mahila Mandal Projects</p>
                            <p class="card-text text-light"><i className='bi bi-circle-fill me-2'style={{fontSize:'10px'}}></i>To send you invitations for upcoming events that may interest you</p>
                        </div>
                    </div>
                    <div class={`card mb-4 ${animate ? 'card3' : ''}`} style={{ backgroundImage: 'linear-gradient(200deg, #ff9100 0%, #a30689 100%)' }}>
                        <div class="card-body">
                            <h5 class="card-title text-center" style={{ color: 'black' }}>Email Communications</h5>
                            <p class="card-text text-light">When you ask us to send you email such as a free email newsletter, you may provide us with certain information such as your email address so we can fulfil your request. You may choose to provide additional information as well, such as your postal address and phone number.</p>
                        </div>
                    </div>
                    <div class={`card mb-4 ${animate ? 'card3' : ''}`} style={{ backgroundImage: 'linear-gradient(200deg, #ff9100 0%, #a30689 100%)' }}>
                        <div class="card-body">
                            <h5 class="card-title text-center" style={{ color: 'black' }}>Donations</h5>
                            <p class="card-text text-light">When you make a donation through our Site, we may ask you to submit certain personal information (such as credit card information) so we can process your donation. We also maintain your contact information in our records so we can contact you to provide ChildFund India's program information and information on additional giving opportunities.</p>
                        </div>
                    </div>
                    <div class={`card mb-4 ${animate ? 'card3' : ''}`} style={{ backgroundImage: 'linear-gradient(200deg, #ff9100 0%, #a30689 100%)' }}>
                        <div class="card-body">
                            <h5 class="card-title text-center" style={{ color: 'black' }}>Is Donation Secure?</h5>
                            <p class="card-text text-light">Absolutely. The security and confidentiality of your information is our highest priority. We use industry-standard SSL (secure socket layer) technology to protect your information and provide a safe and secure environment for online donations.</p>
                        </div>
                    </div>
                    <div class={`card mb-4 ${animate ? 'card3' : ''}`} style={{ backgroundImage: 'linear-gradient(200deg, #ff9100 0%, #a30689 100%)' }}>
                        <div class="card-body">
                            <h5 class="card-title text-center" style={{ color: 'black' }}>Credit / Debit Card Security</h5>
                            <p class="card-text text-light">Suvidha Mahila Mandal is grateful for the donations that help us continue our valuable work. When you donate to Suvidha Mahila Mandal online, your card information is secured; your credit card number is used only for that particular transaction and is not stored. If you allow us to store your credit card or bank information for future use such as recurring donation, such information will be stored by the payment services financial institution. Suvidha Mahila Mandal only uses financial institution that adheres to the industry standards for storing such information.</p>
                        </div>
                    </div>
                    <div class={`card mb-4 ${animate ? 'card3' : ''}`} style={{ backgroundImage: 'linear-gradient(200deg, #ff9100 0%, #a30689 100%)' }}>
                        <div class="card-body">
                            <h5 class="card-title text-center" style={{ color: 'black' }}>Disclosure Of Data</h5>
                            <p class="card-text text-light">Suvidha Mahila Mandal may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                            <p class="card-text text-light"><i className='bi bi-circle-fill me-2 fs-8'style={{fontSize:'10px'}}></i>To comply with a legal obligation</p>
                            <p class="card-text text-light"><i className='bi bi-circle-fill me-2 fs-8'style={{fontSize:'10px'}}></i>To protect and defend the rights or property of Suvidha Mahila Mandal</p>
                            <p class="card-text text-light"><i className='bi bi-circle-fill me-2'style={{fontSize:'10px'}}></i>To prevent or investigate possible wrongdoing in connection with the Service</p>
                            <p class="card-text text-light"><i className='bi bi-circle-fill me-2'style={{fontSize:'10px'}}></i>To protect the personal safety of users of the Service or the public</p>
                            <p class="card-text text-light"><i className='bi bi-circle-fill me-2'style={{fontSize:'10px'}}></i>To protect against legal liability</p>
                        
                        </div>
                    </div>
                    <div class={`card mb-4 ${animate ? 'card3' : ''}`} style={{ backgroundImage: 'linear-gradient(200deg, #ff9100 0%, #a30689 100%)' }}>
                        <div class="card-body">
                            <h5 class="card-title text-center" style={{ color: 'black' }}>Security Of Data</h5>
                            <p class="card-text text-light">Suvidha Mahila Mandal prioritizes the security of personal information through administrative, technical, and physical safeguards. Only designated employees have access to this data. Online transactions are conducted on a secure server using Secure Socket Layer (SSL) technology, ensuring encryption during data transfer. A "lock" icon and "https" in the URL indicate a secure area of the site. While no perfect security exists online, these measures help protect against unauthorized access or disclosure of sensitive information.</p>
                        </div>
                    </div>
                    <div class={`card mb-4 ${animate ? 'card3' : ''}`} style={{ backgroundImage: 'linear-gradient(200deg, #ff9100 0%, #a30689 100%)' }}>
                        <div class="card-body">
                            <h5 class="card-title text-center" style={{ color: 'black' }}>Updates to This Privacy Policy</h5>
                            <p class="card-text text-light">We may change or update portions of this Privacy Policy at any time and without prior notice to you. Please check back from time to time so you are aware of any changes or updates to the Policy. You may reach out to us if you have any queries about any changes made to our practices.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Policy;
