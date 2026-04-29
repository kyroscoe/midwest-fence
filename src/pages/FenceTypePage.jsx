import { Link } from 'react-router-dom';
import CTA from '../components/CTA.jsx';
import { FenceImage } from '../assets/fencePhotos.jsx';

const imageMap = { 'Wood Fencing': 'wood', 'Vinyl Fencing': 'vinyl', 'Chain Link Fencing': 'chain', 'Aluminum Fencing': 'commercial' };

export default function FenceTypePage({ type }) {
  return (
    <main>
      <section className="page-hero service-detail"><div className="container two-col"><div><span className="eyebrow">Residential Fence Type</span><h1>{type.title}</h1><p>{type.short}</p><div className="hero-actions"><Link to="/contact" className="btn">Request Estimate</Link><Link to="/services" className="btn btn-outline">All Services</Link></div></div><FenceImage type={imageMap[type.title]} label={type.title}/></div></section>
      <section className="section"><div className="container two-col"><div><h2>Is {type.title.toLowerCase()} right for your property?</h2><p>This page should help customers compare cost, maintenance, privacy, durability, appearance, and common use cases. Strong content here improves local search visibility while making the buyer feel informed instead of overwhelmed.</p></div><div className="info-panel"><h3>Page content to add:</h3><ul className="check-list"><li>Pros and common applications</li><li>Maintenance and lifespan considerations</li><li>Project photos using this material</li><li>FAQ section specific to this fence type</li></ul></div></div></section>
      <CTA />
    </main>
  );
}
