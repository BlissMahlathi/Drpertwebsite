import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx"
import IVDripsPage from "./pages/IvDripsPage.jsx"
import RegenerativePage from "./pages/RegenerativePage.jsx"
import BodySculptingPage from "./pages/BodySculptingPage.jsx"
import RecoverHousePage from "./pages/RecoverHousePage.jsx"
import ServicePage from "./pages/ServicePage.jsx"


import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import InDemand from "./components/MostDemandedServices.jsx";
import WhyUs from "./components/WhyUs.jsx";
import Recovery from "./components/Recovery.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";
import { Hero1 } from "./constants/index.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero heroImage={Hero1} />
            <InDemand />
            <WhyUs />
            <Recovery />
            <Testimonials />
          </>
        } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/iv-drips" element={<IVDripsPage/>} />
        <Route path="/services/regenerative" element={<RegenerativePage />} />
        <Route path="/services/body-sculpting" element={<BodySculptingPage />} />
        <Route path="/recovery-house" element={<RecoverHousePage/>} />
        <Route path="/services" element={<ServicePage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;