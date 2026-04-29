import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import ServicePage from './pages/ServicePage.jsx';
import FenceTypePage from './pages/FenceTypePage.jsx';
import Gallery from './pages/Gallery.jsx';
import About from './pages/About.jsx';
import Resources from './pages/Resources.jsx';
import FAQ from './pages/FAQ.jsx';
import Contact from './pages/Contact.jsx';
import { services, fenceTypes } from './data/siteData.js';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        {services.map((service) => (
          <Route key={service.slug} path={`/services/${service.slug}`} element={<ServicePage service={service} />} />
        ))}
        {fenceTypes.map((type) => (
          <Route key={type.slug} path={`/fence-types/${type.slug}`} element={<FenceTypePage type={type} />} />
        ))}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
