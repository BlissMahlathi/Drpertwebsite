import React from 'react';
import LogoImg from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#6f4e9f] text-white py-12 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-8">
        
        
        <div className="footer-logo">
          <img src={LogoImg} alt="Clinic Logo" className="w-36 md:w-32" />
        </div>

        
        <div className="footer-motto text-center italic">
          <p className="text-xl md:text-lg">
            We’re not just the best in Africa – we redefine beauty, one treatment at a time!
          </p>
        </div>

        
        <div className="footer-contact text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4">
            <li><strong>Phone:</strong> <a href="tel:+27129925025" className="text-[#ADD8E6] hover:underline">+27 12 9925 025</a></li>
            <li><strong>WhatsApp:</strong> <a href="https://wa.me/27763475725" target="_blank" className="text-[#ADD8E6] hover:underline">+27 76 347 5725</a></li>
            <li><strong>Instagram:</strong> <a href="https://www.instagram.com/drpert_centre4bodysculping" target="_blank" className="text-[#ADD8E6] hover:underline">drpert_centre4bodysculping</a></li>
            <li><strong>Email:</strong> <a href="mailto:drpertmac@gmail.com" className="text-[#ADD8E6] hover:underline">drpertmac@gmail.com</a></li>
            <li><strong>Address:</strong> 521 Jaqueline Drive, Garsfontein, Pretoria</li>
            <li><strong>Recovery House:</strong> 66 Wild Avenue, Newlands</li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright bg-[#5a3d73] py-4 mt-8 text-center">
        <p>&copy; 2025 Dripert Medical Aesthetics Center. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;