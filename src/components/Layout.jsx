import { Link, NavLink } from 'react-router-dom';
import { Clock, MapPin, Phone, ChevronDown } from 'lucide-react';
import logo from '../assets/midwest-logo.png';
import { phone, serviceArea } from '../data/siteData.js';

export default function Layout({ children }) {
  const navClass = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link';
  const fenceNavClass = ({ isActive }) => isActive ? 'nav-link dropdown-toggle active' : 'nav-link dropdown-toggle';
  return (
    <div className="site-shell">
      <div className="top-bar">
        <div><MapPin size={16} /> Proudly Serving {serviceArea}</div>
        <div className="top-right"><Clock size={16} /> Mon - Fri: 7AM - 5PM <Phone size={16} /> {phone}</div>
      </div>
      <header className="main-header">
        <Link to="/" className="brand"><img src={logo} alt="Midwest Fence LLC" /></Link>
        <nav className="nav">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <div className="nav-dropdown">
            <NavLink to="/fence-types/wood-fencing" className={fenceNavClass}>Fence Types <ChevronDown size={14} /></NavLink>
            <div className="dropdown-menu">
              <Link to="/fence-types/wood-fencing">Wood Fencing</Link>
              <Link to="/fence-types/vinyl-fencing">Vinyl Fencing</Link>
              <Link to="/fence-types/chain-link-fencing">Chain Link Fencing</Link>
              <Link to="/fence-types/aluminum-fencing">Aluminum Fencing</Link>
            </div>
          </div>
          <NavLink to="/gallery" className={navClass}>Gallery</NavLink>
          <NavLink to="/about" className={navClass}>About Us</NavLink>
          <NavLink to="/resources" className={navClass}>Resources <ChevronDown size={14} /></NavLink>
          <NavLink to="/faq" className={navClass}>FAQ</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>
        </nav>
        <Link to="/contact" className="btn estimate-btn">Get a Free Estimate</Link>
      </header>
      {children}
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <img src={logo} alt="Midwest Fence LLC" className="footer-logo" />
            <p>High-quality fence installation, repairs, custom gates, rental fence, and land clearing for homes and businesses.</p>
          </div>
          <div><h4>Services</h4><Link to="/services/residential-fencing">Residential Fencing</Link><Link to="/services/commercial-fencing">Commercial Fencing</Link><Link to="/services/gate-rebuilds-fabrication">Gate Rebuilds & Fabrication</Link><Link to="/services/rental-fence">Rental Fence</Link></div>
          <div><h4>Fence Types</h4><Link to="/fence-types/wood-fencing">Wood</Link><Link to="/fence-types/vinyl-fencing">Vinyl</Link><Link to="/fence-types/chain-link-fencing">Chain Link</Link><Link to="/fence-types/aluminum-fencing">Aluminum</Link></div>
          <div><h4>Contact</h4><p>{phone}</p><p>{serviceArea}</p><Link to="/contact" className="footer-cta">Request an Estimate</Link></div>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} Midwest Fence LLC. All rights reserved.</div>
      </footer>
    </div>
  );
}
