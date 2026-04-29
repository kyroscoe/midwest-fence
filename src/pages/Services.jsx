import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services, fenceTypes } from '../data/siteData.js';
import { FenceImage } from '../assets/fencePhotos.jsx';
import CTA from '../components/CTA.jsx';

export default function Services() {
  return (
    <main>
      <section className="page-hero"><div className="container"><span className="eyebrow">Services</span><h1>Fence services built for homes, businesses, gates, and jobsites.</h1><p>Midwest Fence LLC provides installation, repair, custom fence design, gate rebuilds, gate fabrication, rental fence, and land clearing.</p></div></section>
      <section className="section"><div className="container cards-grid">{services.map(service => <Link to={`/services/${service.slug}`} className="service-card large" key={service.slug}><FenceImage type={service.image} label={service.title}/><div className="service-body"><h3>{service.title}</h3><p>{service.short}</p><span className="text-link">Learn more <ArrowRight size={16}/></span></div></Link>)}</div></section>
      <section className="section light-band">
        <div className="container">
          <span className="eyebrow">Fence Types</span>
          <h2>Residential material pages that help customers compare options.</h2>
          <div className="type-grid">
            {fenceTypes.map(type => <Link to={`/fence-types/${type.slug}`} className="type-card" key={type.slug}><h3>{type.title}</h3><p>{type.short}</p><span>View details</span></Link>)}
          </div>
          <div className="featured-fence-types">
            <article className="featured-type">
              <FenceImage type="chain" label="Chain link fence installation" />
              <div>
                <span className="eyebrow">Chain Link Fencing</span>
                <h3>Affordable, dependable perimeter protection.</h3>
                <p>Chain link fencing is a practical option for backyards, pets, commercial lots, equipment areas, and properties that need visibility with reliable boundary control.</p>
                <ul className="check-list compact-list">
                  <li>Cost-effective residential and commercial security</li>
                  <li>Great for pets, yards, jobsites, and utility spaces</li>
                  <li>Available with gate and access options</li>
                </ul>
                <Link to="/fence-types/chain-link-fencing" className="text-link">Chain link details <ArrowRight size={16}/></Link>
              </div>
            </article>
            <article className="featured-type">
              <FenceImage type="vinyl" label="Vinyl privacy fence installation" />
              <div>
                <span className="eyebrow">Vinyl Fencing</span>
                <h3>Clean privacy with low maintenance.</h3>
                <p>Vinyl fencing gives homeowners a polished look without regular staining or painting, making it a strong fit for privacy, curb appeal, and long-term value.</p>
                <ul className="check-list compact-list">
                  <li>Low-maintenance privacy and decorative styles</li>
                  <li>Resists rot, peeling, and routine repainting</li>
                  <li>Clean finished look for homes and backyards</li>
                </ul>
                <Link to="/fence-types/vinyl-fencing" className="text-link">Vinyl details <ArrowRight size={16}/></Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
