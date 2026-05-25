import { gallery } from '../data/siteData.js';
import { FenceImage } from '../assets/fencePhotos.jsx';
import CTA from '../components/CTA.jsx';
export default function Gallery(){return <main><section className="page-hero"><div className="container"><span className="eyebrow">Gallery</span><h1>Project proof matters.</h1><p>Real Midwest Fence project photos organized by material, service, and property type.</p></div></section><section className="section"><div className="container gallery-grid">{gallery.map((item)=><div className="gallery-card" key={item.label}><FenceImage type={item.type} label={item.label} src={item.src}/><h3>{item.label}</h3><p>{item.caption}</p></div>)}</div></section><CTA /></main>}
