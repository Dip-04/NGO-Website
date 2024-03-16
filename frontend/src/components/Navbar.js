import './Nav.css'
import {Link} from 'react-router-dom'
import logo from './images/logo.png'
function NavBar() {
  return (
    <>
 
 <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundImage: 'linear-gradient(180deg, #3c1164 0%, #761b89 50%)', color: 'white' }}>

  <Link className="navbar-brand" to="/"><img src={logo} width="350" height="80" alt="" loading="lazy"/>
</Link>
  <button className="navbar-toggler text-dark b-1 bg-light me-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse  justify-content-end me-5" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto  ">
      <li className="nav-item active me-2 ms-2">
    <Link className="nav-link text-light fs-5" to="/">Home </Link>
      </li>
      <li className="nav-item ms-2">
        <Link className="nav-link text-light fs-5" to="/aboutus">About Us</Link>
      </li>
      <li className="nav-item ms-2">
        <Link className="nav-link text-light fs-5" to="/events">Event</Link>
      </li>
      <li className="nav-item ms-2">
        <Link className="nav-link text-light fs-5" to="/gallary">Gallary</Link>
      </li>
      
      <li className="nav-item ms-2">
        <Link className="nav-link text-light fs-5" to="/contactus">Contact</Link>
      </li>
      <li className="nav-item ms-2">
        <Link className="nav-link  " to="https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform" target="_blank"><span className='btn text-light  bt ' style={{backgroundColor:'#9f2176',fontSize:'18px',border:'2px solid yellow'}}>Apply For Internship</span></Link>
      </li>
      <li className="nav-item ms-2">
        <Link className="nav-link " to="/donate"><span className='btn btn-warning text-light  bt1' style={{fontSize:'18px',border:'2px solid #9f2176'}}>Help Now</span></Link>
      </li>
    
    </ul>
    
  </div>
</nav>
    </>
  );
}

export default NavBar;
