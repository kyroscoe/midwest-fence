import { Link } from 'react-router-dom';
import CTA from '../components/CTA.jsx';

const posts = [
  {
    title: 'How to Choose the Right Fence for Your Property',
    summary: 'Compare privacy, security, maintenance, and budget needs before choosing wood, vinyl, chain link, or aluminum fencing.',
  },
  {
    title: 'Wood vs. Vinyl Fence: What Homeowners Should Know',
    summary: 'Wood offers classic character and flexible styling, while vinyl keeps upkeep simple with a clean, long-lasting finish.',
  },
  {
    title: 'When to Repair a Fence Instead of Replacing It',
    summary: 'A leaning post, damaged gate, or a few broken sections can often be repaired when the rest of the fence is still solid.',
  },
  {
    title: 'What to Expect During a Fence Estimate',
    summary: 'A good estimate covers layout, materials, gates, access, property conditions, timing, and practical options for your goals.',
  },
];

export default function Resources() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Resources</span>
          <h1>Helpful fence guidance without the fluff.</h1>
          <p>Practical answers for homeowners and businesses planning a fence installation, repair, gate rebuild, rental fence, or land clearing project.</p>
        </div>
      </section>
      <section className="section">
        <div className="container cards-grid">
          {posts.map((post) => (
            <article className="article-card" key={post.title}>
              <span className="eyebrow">Guide</span>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <Link className="text-link" to="/contact">Ask Midwest Fence</Link>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
