import { email, phone, serviceArea } from '../data/siteData.js';

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const details = [
      `Name: ${formData.get('name') || ''}`,
      `Phone: ${formData.get('phone') || ''}`,
      `Email: ${formData.get('email') || ''}`,
      `Project Type: ${formData.get('projectType') || ''}`,
      '',
      'Project Details:',
      formData.get('message') || '',
    ].join('\n');

    window.location.href = `mailto:${email}?subject=${encodeURIComponent('Fence estimate request')}&body=${encodeURIComponent(details)}`;
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Request a free fence estimate.</h1>
          <p>Tell Midwest Fence what you need and start with a clear, professional conversation.</p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" autoComplete="name" required />
            <input name="phone" placeholder="Phone" autoComplete="tel" required />
            <input name="email" type="email" placeholder="Email" autoComplete="email" />
            <select name="projectType" defaultValue="" required>
              <option value="" disabled>Project Type</option>
              <option>Fence Installation</option>
              <option>Fence Repair</option>
              <option>Gate Rebuilds & Fabrication</option>
              <option>Rental Fence</option>
              <option>Land Clearing</option>
            </select>
            <textarea name="message" placeholder="Tell us about your project" required />
            <button className="btn" type="submit">Submit Request</button>
            <p className="form-note">Submitting opens your email app with the estimate request filled in.</p>
          </form>
          <div className="info-panel">
            <h2>Contact Midwest Fence LLC</h2>
            <p><strong>Phone:</strong> <a href="tel:+19377176150">{phone}</a></p>
            <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
            <p><strong>Service Area:</strong> {serviceArea}</p>
            <p className="muted">Serving homes, businesses, farms, and job sites across the Dayton, Springfield, Columbus, and surrounding Ohio communities.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
