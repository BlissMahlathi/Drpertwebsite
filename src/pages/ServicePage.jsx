import React from "react";
import ServiceBg from "../../public/serv hero.jpg"

const ServicePage = () => {
  return (
    <div>
      
      <section id="hero-section" className="w-full h-[50vh] bg-cover bg-center relative py-36" style={{ backgroundImage: `url(${ServiceBg})` }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-semibold">Our Services</h1>
          <p className="text-xl mt-4">Transform your health and wellbeing with our cutting-edge treatments.</p>
        </div>
      </section>

  
      <section id="intro-section" className="py-16 px-4 text-center bg-gray-100">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl text-gray-800 mb-6">About Our Services</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            At our medical center, we provide a wide range of advanced treatments designed to improve your overall health, beauty, and wellness. Our medical professionals are dedicated to providing personalized care that is tailored to your needs, ensuring the best outcomes for your body, mind, and soul.
          </p>
        </div>
      </section>

    
      <section id="services-section" className="py-16 px-4 bg-white">
        
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl text-gray-800 mb-12">Our Specializations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      
            <div className="service-card bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img src="Health.png" alt="Body Sculpting" className="w-full h-64 object-cover rounded-md mb-4" />
              <h3 className="text-2xl text-indigo-600 mb-4">Body Sculpting</h3>
              <p className="text-lg text-gray-600 mb-4">
                Sculpt and shape your body with our non-invasive body sculpting treatments. We offer advanced techniques that help eliminate stubborn fat and contour your body for a more toned appearance.
              </p>
              <a href="#body-sculpting" className="text-indigo-600 hover:text-indigo-800">Learn More</a>
            </div>

            
            <div className="service-card bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img src="DripD.jpeg" alt="Regenerative IV Drips" className="w-full h-64 object-cover rounded-md mb-4" />
              <h3 className="text-2xl text-indigo-600 mb-4">Regenerative IV Drips</h3>
              <p className="text-lg text-gray-600 mb-4">
                Restore vitality and accelerate recovery with our regenerative IV drips. Packed with essential vitamins and nutrients, these treatments support healing, reduce inflammation, and rejuvenate your body.
              </p>
              <a href="#regenerative-iv-drips" className="text-indigo-600 hover:text-indigo-800">Learn More</a>
            </div>

            
            <div className="service-card bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img src="Wellbeing.jpg" alt="Wellbeing IV Drips" className="w-full h-64 object-cover rounded-md mb-4" />
              <h3 className="text-2xl text-indigo-600 mb-4">Wellbeing IV Drips</h3>
              <p className="text-lg text-gray-600 mb-4">
                Improve your overall health with our wellbeing IV drips. These customized treatments provide hydration, boost energy, enhance immunity, and improve mental clarity to keep you feeling your best.
              </p>
              <a href="#wellbeing-iv-drips" className="text-indigo-600 hover:text-indigo-800">Learn More</a>
            </div>
          </div>
        </div>
      </section>

    
      <section id="service-details" className="py-16 px-4 bg-gray-100">
        <div className="max-w-screen-xl mx-auto">
          <div id="body-sculpting" className="service-detail mb-16">
            <h2 className="text-3xl text-gray-800 mb-6">Body Sculpting</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our body sculpting services help you achieve your desired body shape without the need for invasive surgery. Using the latest technologies, our expert professionals target and reduce fat cells, contouring the body for a sleek, toned appearance.
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>Non-invasive, safe, and effective</li>
              <li>Personalized treatment plans for optimal results</li>
              <li>Helps reduce stubborn fat in areas like the abdomen, thighs, and arms</li>
              <li>Quick recovery with minimal downtime</li>
            </ul>
          </div>

          <div id="regenerative-iv-drips" className="service-detail mb-16">
            <h2 className="text-3xl text-gray-800 mb-6">Regenerative IV Drips</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Regenerative IV drips are designed to accelerate healing, reduce inflammation, and rejuvenate the body from within. Our treatments use high-quality vitamins and minerals to promote recovery and overall wellness.
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>Supports recovery from injury or surgery</li>
              <li>Reduces inflammation and accelerates tissue repair</li>
              <li>Boosts immune system function</li>
              <li>Rehydrates and nourishes the body</li>
            </ul>
          </div>

          <div id="wellbeing-iv-drips" className="service-detail">
            <h2 className="text-3xl text-gray-800 mb-6">Wellbeing IV Drips</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our wellbeing IV drips are tailored to improve your overall health and energy levels. Whether you're looking to boost your immune system, enhance hydration, or improve mental clarity, these drips are customized to meet your unique needs.
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>Improves hydration and overall energy</li>
              <li>Enhances immune system function</li>
              <li>Promotes mental clarity and focus</li>
              <li>Customizable to address your specific health goals</li>
            </ul>
          </div>
        </div>
      </section>

      
      <section id="cta-section" className="py-16 px-4 text-center bg-indigo-600 text-white">
        <h2 className="text-3xl mb-6">Ready to Begin Your Treatment?</h2>
        <p className="text-lg mb-8">
          Our team is here to help you achieve your health and wellness goals. Contact us today to schedule a consultation or learn more about our services.
        </p>
        <a href="tel:+27129925025" className="text-xl bg-white text-indigo-600 px-8 py-3 rounded-full inline-block hover:bg-indigo-100">
          Call Now to Schedule
        </a>
      </section>
    </div>
  );
};

export default ServicePage;