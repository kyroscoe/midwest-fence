import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Clock, MapPin, Menu, Phone, X } from 'lucide-react';
import logo from '../assets/midwest-logo.png';
import { email, phone, serviceArea, serviceAreaShort } from '../data/siteData.js';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navClass = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link';
  const fenceNavClass = ({ isActive }) => isActive ? 'nav-link dropdown-toggle active' : 'nav-link dropdown-toggle';
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="top-bar">
        <div><MapPin size={16} /> Proudly Serving {serviceAreaShort}</div>
        <div className="top-right"><Clock size={16} /> Mon - Fri: 7AM - 5PM <Phone size={16} /> <a href="tel:+19377176150">{phone}</a></div>
      </div>
      <header className="main-header">
        <Link to="/" className="brand" onClick={closeMenu}><img src={logo} alt="Midwest Fence LLC" /></Link>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={isMenuOpen} aria-controls="site-nav" onClick={() => setIsMenuOpen((open) => !open)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav id="site-nav" className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <NavLink to="/" className={navClass} onClick={closeMenu}>Home</NavLink>
          <div className="nav-dropdown">
            <NavLink to="/fence-types/wood-fencing" className={fenceNavClass} onClick={closeMenu}>Fence Types <ChevronDown size={14} /></NavLink>
            <div className="dropdown-menu">
              <Link to="/fence-types/wood-fencing" onClick={closeMenu}>Wood Fencing</Link>
              <Link to="/fence-types/vinyl-fencing" onClick={closeMenu}>Vinyl Fencing</Link>
              <Link to="/fence-types/chain-link-fencing" onClick={closeMenu}>Chain Link Fencing</Link>
              <Link to="/fence-types/aluminum-fencing" onClick={closeMenu}>Aluminum Fencing</Link>
            </div>
          </div>
          <NavLink to="/gallery" className={navClass} onClick={closeMenu}>Gallery</NavLink>
          <NavLink to="/faq" className={navClass} onClick={closeMenu}>FAQ</NavLink>
          <NavLink to="/contact" className={navClass} onClick={closeMenu}>Contact</NavLink>
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
          <div><h4>Contact</h4><p><a href="tel:+19377176150">{phone}</a></p><p><a href={`mailto:${email}`}>{email}</a></p><p>{serviceArea}</p><Link to="/contact" className="footer-cta">Request an Estimate</Link></div>
        </div>
        <div className="footer-bottom">&copy; {new Date().getFullYear()} Midwest Fence LLC. All rights reserved.</div>
      </footer>
    </div>
  );
}
