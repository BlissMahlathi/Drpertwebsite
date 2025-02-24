import React from 'react';
import WhyUs from "../../public/whyusimage.jpg"
const WhyUsSection = () => {
  return (
    <section className="why-us-section bg-gradient-to-r from-purple-300 via-purple-100 to-white py-16 px-5 sm:px-10">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0">
        
        <div className="content sm:w-1/2 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-purple-700 mb-5">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
            At the heart of our approach is the spirit of <em className="italic text-purple-500">Ubuntu</em>—humanity towards others—reflected in the exceptional treatment and care we provide. Our <span className="highlight text-cyan-500 font-semibold">recovery house</span> is a central part of this philosophy, offering a warm and welcoming environment where every client is treated with the utmost respect and attention.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Healing goes beyond just the surgery; it’s about ongoing support, compassion, and guidance. At our <span className="highlight text-cyan-500 font-semibold">recovery house</span>, you will experience personalized care that helps you continue your journey with confidence and peace of mind.
          </p>
        </div>

        
        <div className="image sm:w-1/2 flex justify-center sm:justify-end">
          <img 
            src={WhyUs} 
            alt="Clinic Image" 
            className="w-full sm:w-4/5 h-auto rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105" 
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;