import React, { useState, useEffect } from "react";
import Hero1 from "../assets/hero1.jpg";
import Hero2 from "../assets/hero2.jpg";
import Hero3 from "../assets/hero3.jpg";

import gsap from "gsap";

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [Hero1, Hero2, Hero3];

    const texts = [
        {
            title: "Welcome to Our Medical Aesthetic Clinic",
            subtitle: "Transforming Lives, One Treatment at a Time",
            motto: <>&quot;Every sculpture needs an Artist.&quot;</>
        },
        {
            title: "Your Path to Timeless Beauty",
            subtitle: "Rejuvenate your skin and feel confident",
            motto: (
                <>
                    &quot;We are aligned with being Africa's Best and Truest
                    representative on the international stage.&quot;
                </>
            )
        },
        {
            title: "Excellence in Aesthetic Care",
            subtitle: "Personalized treatments for glowing skin",
            motto: <>&quot;We don't change bodies, we change lives.&quot;</>
        }
    ];

    useEffect(() => {
        gsap.from(".hero-title", {
            opacity: 1,
            y: -50,
            duration: 1.5,
            delay: 0.5
        });
        gsap.from(".hero-subtitle", {
            opacity: 1,
            y: 30,
            duration: 3,
            delay: 2
        });
        gsap.from(".cta-button", {
            opacity: 1,
            y: 30,
            duration: 2,
            delay: 2
        });
        gsap.from(".hero-motto", {
            opacity: 1,
            y: 30,
            duration: 2,
            delay: 2
        });

        const interval = setInterval(() => {
            gsap.to(".hero-section", {
                opacity: 0,
                duration: 1,
                onComplete: () => {
                    setCurrentImage(prev => (prev + 1) % images.length);
                    gsap.to(".hero-section", { opacity: 1, duration: 1 });
                }
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [currentImage]);

    return (
        <section
            className="relative w-full h-screen md:h-[80vh] sm:h-[70vh] xs:h-[60vh] bg-cover bg-center bg-no-repeat transition-all ease-in-out hero-section"
            style={{
                backgroundImage: `url(${images[currentImage]})`
            }}
        >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 px-4 sm:px-8 flex justify-center items-center flex-col">
                <h1 className="hero-title text-5xl md:text-5xl lg:text-6xl font-bold text-white text-shadow-md">
                    {texts[currentImage].title}
                </h1>
                <p className="hero-subtitle mt-4 text-3xl sm:text-4xl md:text-4xl opacity-90 max-w-3xl mx-auto text-gray-200">
                    {texts[currentImage].subtitle}
                </p>
                <p className="hero-motto mt-4 text-lg sm:text-3xl md:text-4xl opacity-85 font-italic max-w-3xl mx-auto text-gray-200">
                    {texts[currentImage].motto}
                </p>

        
                <div className="mt-10 flex justify-center">
                    <a
                        href="/services"
                        className="cta-button px-[2rem] py-2 bg-blue-500 text-slate-900 rounded-lg font-semibold hover:bg-yellow-600 transition ease-in-out duration-300"
                    >
                        Explore Our Services
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
