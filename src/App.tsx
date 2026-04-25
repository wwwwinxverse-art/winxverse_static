import Navbar from './components/Navbar';
import SoftBackdrop from './components/SoftBackdrop';
import Footer from './components/Footer';
import LenisScroll from './components/lenis';
import Share from './components/Share';

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Pages
import Home from './pages/Home';
import About from "./pages/About";
import Services from './pages/Services';
import Contact from './pages/Contact';
import WebDevelopmentBlog from './components/Blog/Blog1';
import AIBlog from './components/Blog/Blog2';

// ✅ SCROLL TO TOP COMPONENT
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      {/* BACKGROUND + SMOOTH SCROLL */}
      <SoftBackdrop />
      <LenisScroll />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/webdevelopment" element={<WebDevelopmentBlog />} />
        <Route path="/artificial-intelligence-future" element={<AIBlog />} />
      </Routes>

      {/* FLOAT BUTTON */}
      <Share />

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;