import React from "react";
import ServiceHero from "../../public/images-drip-hero.jpg";
const ServicePage = () => {
    return (
        <div className="pt-8">
            <section
                id="hero"
                className="bg-cover bg-center h-[400px] flex justify-center items-center text-center text-white relative mt-20 px-5"
                style={{
                    backgroundImage: `url(${ServiceHero})`
                }}
            >
                <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
                <div className="z-10 max-w-4xl">
                    <h1 className="text-5xl font-semibold mb-5">
                        Our Expertise, Your Transformation
                    </h1>
                    <p className="text-xl italic text-gray-100 opacity-85">
                        Experience tailored treatments that prioritize your
                        health and beauty. Unlock your potential and take the
                        first step toward a new you.
                    </p>
                </div>
            </section>

            <section
                id="table-of-contents"
                className="bg-gradient-to-br from-purple-600/60 to-blue-600/60 py-16 px-5 text-center text-white"
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-semibold mb-4">
                        Explore Our Services
                    </h2>
                    <p className="text-lg italic text-gray-100 mb-8">
                        Discover the treatments tailored to enhance your
                        well-being and beauty.
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                            {
                                id: "hormonal-therapy",
                                text: "Hormonal Therapy"
                            },
                            {
                                id: "hyperhidrosis",
                                text: "Hyperhidrosis (Excessive Sweating)"
                            },
                            {
                                id: "stretch-marks",
                                text: "Stretch Mark Treatment"
                            },
                            { id: "scar-treatment", text: "Scar Treatment" },
                            {
                                id: "laser-hair-removal",
                                text: "Laser Hair Removal"
                            },
                            {
                                id: "skin-tightening",
                                text: "Skin Tightening – J Plasma"
                            },
                            {
                                id: "sexual-rejuvenation",
                                text: "Sexual Rejuvenation O-Shot + P-Shot"
                            },
                            {
                                id: "lymphatic-massage",
                                text: "Lymphatic Drainage Massage"
                            }
                        ].map(service => (
                            <li key={service.id}>
                                <a
                                    href={`#${service.id}`}
                                    className="block bg-blue-500 text-white py-3 px-6 rounded-lg transition-all duration-300 hover:bg-purple-600 hover:scale-105 hover:shadow-lg active:scale-110"
                                >
                                    {service.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {[
                {
                    id: "hormonal-therapy",
                    title: "Hormonal Therapy",
                    description:
                        "Hormonal therapy helps balance your hormones, improving your health, energy levels, and overall wellness. Whether it's managing menopause or optimizing testosterone, our specialized treatments will guide you to better vitality."
                },
                {
                    id: "hyperhidrosis",
                    title: "Hyperhidrosis (Excessive Sweating)",
                    description:
                        "Excessive sweating can affect your daily life and confidence. Our advanced treatments for hyperhidrosis help reduce sweating in targeted areas, giving you relief and renewed comfort."
                },
                {
                    id: "stretch-marks",
                    title: "Stretch Mark Treatment",
                    description:
                        "Our stretch mark treatments use advanced technology to fade and reduce the appearance of stretch marks, helping you regain smooth, beautiful skin."
                },
                {
                    id: "scar-treatment",
                    title: "Scar Treatment",
                    description:
                        "We offer innovative treatments to reduce the visibility of scars, improving the texture and appearance of your skin for a flawless look."
                },
                {
                    id: "laser-hair-removal",
                    title: "Laser Hair Removal",
                    description:
                        "Say goodbye to unwanted hair with our safe and effective laser hair removal treatments. Experience smooth, hair-free skin without the hassle of shaving or waxing."
                },
                {
                    id: "skin-tightening",
                    title: "Skin Tightening – J Plasma",
                    description:
                        "Our J Plasma skin tightening treatment rejuvenates your skin, promoting collagen production for firmer, younger-looking skin with minimal downtime."
                },
                {
                    id: "sexual-rejuvenation",
                    title: "Sexual Rejuvenation O-Shot + P-Shot",
                    description:
                        "Enhance intimacy and vitality with our O-Shot and P-Shot treatments, designed to promote sexual health, rejuvenation, and pleasure."
                },
                {
                    id: "lymphatic-massage",
                    title: "Lymphatic Drainage Massage",
                    description:
                        "Our lymphatic drainage massage helps detoxify your body, reducing swelling and promoting overall health by stimulating the lymphatic system."
                }
            ].map(service => (
                <section
                    key={service.id}
                    id={service.id}
                    className="py-16 px-5 bg-gray-50 even:bg-gray-100"
                >
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
                        <div className="max-w-2xl text-center md:text-left">
                            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                                {service.title}
                            </h3>
                            <p className="text-lg text-gray-600 mb-8">
                                {service.description}
                            </p>
                            <a
                                href="contact"
                                className="inline-block bg-blue-500 text-white py-3 px-6 rounded-lg font-bold transition-all duration-300 hover:bg-purple-600 hover:scale-105 hover:shadow-lg"
                            >
                                Book Consultation
                            </a>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default ServicePage;
