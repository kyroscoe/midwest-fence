import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, Clock3, Handshake, Medal, PencilRuler, ShieldCheck, Users } from 'lucide-react';
import { services, trustPoints } from '../data/siteData.js';
import { FenceImage } from '../assets/fencePhotos.jsx';
import CTA from '../components/CTA.jsx';

const icons = [ShieldCheck, Users, Medal, PencilRuler, Handshake, Clock3];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-bg"><FenceImage type="vinyl" label="White vinyl privacy fence" /></div>
        <div className="container hero-content">
          <div className="hero-copy">
            <h1>Strong Fences.<br /><span>Lasting Impressions.</span></h1>
            <p>Midwest Fence LLC provides high-quality fence installation, repairs, and custom solutions for homes and businesses. Built with integrity. Built to last.</p>
            <div className="hero-actions"><Link to="/contact" className="btn">Get a Free Estimate</Link><Link to="/fence-types/wood-fencing" className="btn btn-outline">Fence Types <ArrowRight size={18} /></Link></div>
          </div>
        </div>
      </section>
      <section className="trust-card-wrap">
        <div className="container trust-card">
          {trustPoints.map(([title, text], index) => {
            const Icon = icons[index];
            return <div className="trust-item" key={title}><Icon /><h3>{title}</h3><p>{text}</p></div>;
          })}
        </div>
      </section>
      <section className="section services-preview">
        <div className="container split-heading">
          <div><span className="eyebrow">Our Services</span><h2>Fencing Solutions for Every Need</h2><p>From classic wood to maintenance-free vinyl, we offer a wide range of fencing options and services to protect what matters most.</p><Link to="/fence-types/wood-fencing" className="btn">View Fence Types <ArrowRight size={18} /></Link></div>
          <div className="service-card-grid">
            {services.slice(0,4).map((service) => <Link to={`/services/${service.slug}`} className="service-card" key={service.slug}><FenceImage type={service.image} label={service.title} /><div className="service-body"><span className="round-icon"><BadgeCheck size={24} /></span><h3>{service.title}</h3><p>{service.short}</p></div></Link>)}
          </div>
        </div>
      </section>
      <section className="section light-band">
        <div className="container two-col">
          <div><span className="eyebrow">Why Customers Choose Us</span><h2>A fence is a real investment. We treat it that way.</h2><p>Customers should feel confident before they ever call. Midwest Fence focuses on clear communication, professional service, quality installation, and recommendations that fit the property instead of pushing a one-size-fits-all answer.</p><ul className="check-list"><li>Clear recommendations before work begins</li><li>Residential and commercial experience</li><li>Custom gate and fabrication capability</li><li>Repair-first guidance when replacement is not necessary</li></ul></div>
          <div className="photo-stack"><FenceImage type="wood" label="Wood fence" /><div className="stat-card"><strong>Built around trust.</strong><span>Clean process. Quality work. Honest guidance.</span></div></div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
