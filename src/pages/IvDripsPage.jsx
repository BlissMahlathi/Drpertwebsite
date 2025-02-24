import { useEffect } from "react"; import { gsap } from "gsap"; import { ScrollTrigger } from "gsap/ScrollTrigger"; gsap.registerPlugin(ScrollTrigger);
import Hero3 from "../assets/hero3.jpg"

import WhatAreIv from "../../public/what-are-iv.jpg"
const HeroSection = () => { useEffect(() => { gsap.from(".hero-content", { opacity: 0, y: 50, duration: 1.5, ease: "power3.out" }); }, []);

return (
    <section className="relative flex items-center justify-center h-screen bg-cover bg-center text-white text-center" style={{ backgroundImage: `url(${Hero3})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative hero-content">
            <h1 className="text-5xl font-bold">IV DRIPS</h1>
            <p className="text-xl mt-2">Revive, Rejuvenate, and Restore.</p>
        </div>
    </section>
);

};

const WhatAreIVDrips = () => { return ( <section className="py-16 px-6 md:px-12 bg-gray-100 text-gray-900"> <div className="max-w-5xl mx-auto text-center"> <h2 className="text-3xl font-semibold mb-4">What Are IV Drips?</h2> <p className="text-lg">IV Drips are for <strong>everyone</strong>. Whether you need an energy boost, hydration, or rejuvenation, IV therapy is a quick and effective solution.</p> </div> <div className="flex flex-col md:flex-row items-center mt-8 gap-8"> 

<img src={WhatAreIv} alt="whatare" className="w-full md:w-1/2 rounded-lg shadow-lg" /> <div className="md:w-1/2"> <h3 className="text-2xl font-semibold">Purpose of IV Drips</h3> <p className="text-lg mt-2">IV Drip therapy delivers essential vitamins, minerals, and fluids directly into the bloodstream, hydrating, rejuvenating, and improving overall health.</p> </div> </div> </section> ); };

const OurIVDrips = () => { 
  return ( 
    <section className="py-16 px-6 text-center"> 
    <h2 className="text-3xl font-semibold mb-6">Our IV Drips
    </h2> 
    <p className="text-lg mb-6">Explore our specially curated IV drips designed to rejuvenate your body and soul.</p> 
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> {["Glow Drip", "Pain Relief Drip", "Detox Drip", "Iron Drip"].map((drip, index) => ( <div key={index} className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition"> 
    <h3 className="text-xl font-semibold">{drip}</h3> 
    <p className="mt-2 text-gray-700">Experience the benefits of our {drip} to enhance your well-being.
    </p> 
    </div> ))} 
    </div> 
    </section> ); 
  
};

const TheProcess = () => { 
  return ( 
    <section className="py-16 px-6 bg-gray-100 text-center"> 
    <h2 className="text-3xl font-semibold mb-6">The Process
    </h2> 
    <p className="text-lg mb-6">
      Dr. Pert's IV drip therapy is simple and designed to help you feel your best.
    </p>
    <div className="max-w-3xl mx-auto text-left"> 
    <ol className="list-decimal list-inside space-y-4 text-lg"> 
    <li><strong>Consultation:</strong> We assess your health and recommend the best IV drip.
    </li> 
    <li><strong>IV Drip Administered:</strong> Our experts ensure a safe and comfortable process.
    </li> 
    <li><strong>Relax & Rejuvenate:</strong> Enjoy the treatment while your body absorbs nutrients.
    </li> 
    <li><strong>Aftercare:</strong> Get post-treatment tips for continued wellness.</li>
    </ol> 
    </div> 
    </section> ); 
  
};

export default function IVDripsPage() { 
  return ( 
    <div> 
    <HeroSection /> 
    <WhatAreIVDrips /> 
    <OurIVDrips /> 
    <TheProcess /> 
    </div> );
    }

