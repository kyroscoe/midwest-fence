import { gallery } from '../data/siteData.js';
import { FenceImage } from '../assets/fencePhotos.jsx';
import CTA from '../components/CTA.jsx';
export default function Gallery(){return <main><section className="page-hero"><div className="container"><span className="eyebrow">Gallery</span><h1>Project proof matters.</h1><p>Replace these placeholders with real Midwest Fence project photos, organized by material, service, and property type.</p></div></section><section className="section"><div className="container gallery-grid">{gallery.map(([label,type])=><div className="gallery-card" key={label}><FenceImage type={type} label={label}/><h3>{label}</h3><p>Short caption, city/service area, material, and project type.</p></div>)}</div></section><CTA /></main>}
