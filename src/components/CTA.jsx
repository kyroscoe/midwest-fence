import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-card">
        <div>
          <span className="eyebrow">Ready to talk?</span>
          <h2>Get a fence quote from a company that treats your property like it matters.</h2>
          <p>Tell us what you need, and we’ll help you make a smart decision for your home, business, or jobsite.</p>
        </div>
        <Link to="/contact" className="btn btn-dark">Request a Free Estimate</Link>
      </div>
    </section>
  );
}
