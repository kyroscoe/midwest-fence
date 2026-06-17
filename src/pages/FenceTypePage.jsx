import { Link } from 'react-router-dom';
import CTA from '../components/CTA.jsx';
import { FenceImage } from '../assets/fencePhotos.jsx';

export default function FenceTypePage({ type }) {
  return (
    <main>
      <section className="page-hero service-detail"><div className="container two-col"><div><span className="eyebrow">Residential Fence Type</span><h1>{type.title}</h1><p>{type.short}</p><div className="hero-actions"><Link to="/contact" className="btn">Request Estimate</Link><Link to="/services" className="btn btn-outline">All Services</Link></div></div><FenceImage type={type.image} label={type.title} src={type.imageSrc}/></div></section>
      <section className="section"><div className="container two-col"><div><h2>Is {type.title.toLowerCase()} right for your property?</h2><p>Midwest Fence helps homeowners compare privacy, security, maintenance, appearance, and budget before choosing a fence. We will walk the property, talk through gate placement and layout, and recommend an option that fits how the space is actually used.</p></div><div className="info-panel"><h3>Helpful for:</h3><ul className="check-list"><li>Improving privacy, safety, or curb appeal</li><li>Defining yards, pools, pets, and outdoor spaces</li><li>Balancing upfront cost with long-term maintenance</li><li>Choosing gate locations and access points that work day to day</li></ul></div></div></section>
      <CTA />
    </main>
  );
}
