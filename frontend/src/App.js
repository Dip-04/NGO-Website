import React from 'react';
import { BrowserRouter as Router, Route ,Routes,useLocation} from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Policy from './components/Policy';
import Donate from './components/Donate';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Event from './components/Event';
import Gallary from './components/Gallary';
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <>
    <Router>
    <ScrollToTop />

        <NavBar /> 
        <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/donate" element={<Donate />} /> 
        <Route  path="/aboutus" element={<About/>} /> 
        <Route  path="/privacypolicy" element={<Policy />} />
        <Route  path="/contactus" element={<Contact />} />
        <Route  path="/events" element={<Event />} />
        <Route  path="/gallary" element={<Gallary />} />

        </Routes>
        <Footer />
     
    </Router></>
  );
}

export default App;
