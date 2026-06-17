import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Page Not Found</span>
          <h1>We could not find that page.</h1>
          <p>The page may have moved, or the address may be typed incorrectly. Start from the home page or request a fence estimate.</p>
          <div className="hero-actions">
            <Link to="/" className="btn">Go Home</Link>
            <Link to="/contact" className="btn btn-outline">Request Estimate</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
