import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FenceImage } from '../assets/fencePhotos.jsx';
import CTA from '../components/CTA.jsx';

export default function ServicePage({ service }) {
  return (
    <main>
      <section className="page-hero service-detail"><div className="container two-col"><div><span className="eyebrow">Midwest Fence Service</span><h1>{service.title}</h1><p>{service.short}</p><div className="hero-actions"><Link to="/contact" className="btn">Get a Free Estimate</Link><Link to="/gallery" className="btn btn-outline">View Gallery <ArrowRight size={18}/></Link></div></div><FenceImage type={service.image} label={service.title}/></div></section>
      <section className="section"><div className="container two-col"><div><h2>Professional service from first call to final walkthrough.</h2><p>Customers need more than a fence. They need a contractor who communicates clearly, protects the property, explains the options, and completes the job with care. This page can be expanded with real project photos, service-area copy, warranty information, and FAQs specific to {service.title.toLowerCase()}.</p></div><div className="info-panel"><h3>Good fit for:</h3><ul className="check-list"><li>Homeowners improving privacy, security, or curb appeal</li><li>Businesses needing professional perimeter solutions</li><li>Property managers handling repairs or upgrades</li><li>Customers who want honest recommendations before committing</li></ul></div></div></section>
      <CTA />
    </main>
  );
}
