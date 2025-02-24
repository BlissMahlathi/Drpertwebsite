import React from "react";
import RhImageHero from "../../public/rh hero.jpg";
import RhsBackground from "../../public/recovery house background-image.jpg";

const RecoveryHousePage = () => {
    return (
        <div className="py-36">
            <section
                id="hero-section"
                className="w-full h-[40vh] bg-cover bg-center relative"
                style={{ backgroundImage: `url(${RhImageHero})` }}
            ></section>

            <section
                id="introduction-section"
                className="py-16 px-4 bg-gray-100 flex justify-center items-center"
            >
                <div className="max-w-screen-xl mx-auto flex gap-10 justify-center items-center">
                    <div className="flex-1 p-4 text-center">
                        <h2 className="text-3xl text-gray-800 mb-6">
                            Welcome to Our Luxurious Recovery House
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Located at 66 Wild Avenue, Newlands, our recovery
                            house offers a serene, peaceful, and luxurious
                            environment to ensure your recovery process is as
                            comfortable and stress-free as possible. With
                            personalized care and around-the-clock assistance,
                            you can rest easy knowing you're in good hands.
                        </p>
                    </div>
                </div>
            </section>

            <section id="photos-section" className="py-16 px-4 bg-gray-200">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className="photo-item">
                        <img
                            src="rhs1.jpg"
                            alt="Image 1"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="photo-item">
                        <img
                            src="rhs2.jpg"
                            alt="Image 2"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="photo-item">
                        <img
                            src="rhs3.jpg"
                            alt="Image 3"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="photo-item">
                        <img
                            src="rhs4.jpg"
                            alt="Image 4"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="photo-item">
                        <img
                            src="rhs5.jpg"
                            alt="Image 5"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="photo-item">
                        <img
                            src="rhs6.jpg"
                            alt="Image 6"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>
            </section>

            <section
                id="our-features-section"
                className="relative bg-cover bg-center py-16 px-4 text-white"
                style={{ backgroundImage: `url(${RhsBackground})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center">
                    <h3 className="text-4xl text-indigo-500 mb-12">
                        Our Exclusive Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md hover:transform hover:translate-y-1 transition">
                            <h4 className="text-xl text-indigo-500 mb-4">
                                Healing Pod & Hyperbaric Oxygen Chamber
                            </h4>
                            <p>
                                Experience ultimate recovery and rejuvenation
                                with our Healing Pod and Hyperbaric Oxygen
                                Chamber treatments.
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md hover:transform hover:translate-y-1 transition">
                            <h4 className="text-xl text-indigo-500 mb-4">
                                Pain, Glow, Detox & Iron Drips
                            </h4>
                            <p>
                                Revitalize your body with our tailored drips
                                that target pain relief, glowing skin,
                                detoxification, and iron replenishment.
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md hover:transform hover:translate-y-1 transition">
                            <h4 className="text-xl text-indigo-500 mb-4">
                                Manual Lymphatic Massage
                            </h4>
                            <p>
                                Promote healing and detoxification through
                                expert manual lymphatic drainage massage
                                techniques.
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md hover:transform hover:translate-y-1 transition">
                            <h4 className="text-xl text-indigo-500 mb-4">
                                Skincare & Facials
                            </h4>
                            <p>
                                Indulge in luxurious facials and skincare
                                treatments designed to enhance your natural glow
                                and vitality.
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md hover:transform hover:translate-y-1 transition">
                            <h4 className="text-xl text-indigo-500 mb-4">
                                Personalized Food Plans
                            </h4>
                            <p>
                                Fuel your recovery journey with personalized
                                food plans designed to support your specific
                                needs and goals.
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md hover:transform hover:translate-y-1 transition">
                            <h4 className="text-xl text-indigo-500 mb-4">
                                24/7 Assistance
                            </h4>
                            <p>
                                We offer round-the-clock assistance to ensure
                                you're well taken care of during your recovery
                                process.
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md hover:transform hover:translate-y-1 transition">
                            <h4 className="text-xl text-indigo-500 mb-4">
                                Wellness Retreats
                            </h4>
                            <p>
                                Enjoy our wellness retreats tailored to your
                                healing needs, blending relaxation and
                                therapeutic treatments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="contact-section"
                className="py-16 px-4 bg-gray-100 text-center"
            >
                <h2 className="text-2xl text-gray-800 mb-6">
                    We also welcome patients who have undergone procedures at
                    other clinics, ensuring a smooth and quick recovery. For
                    more details or to get in touch with us:
                </h2>
                <div className="contact-info text-lg">
                    <p className="mb-4">
                        <i className="fas fa-phone-alt text-indigo-500 mr-2"></i>
                        <strong>Phone:</strong>{" "}
                        <a href="tel:+27129925025" className="text-indigo-500">
                            +27 12 9925 025
                        </a>
                    </p>
                    <p className="mb-4">
                        <i className="fab fa-whatsapp text-indigo-500 mr-2"></i>
                        <strong>WhatsApp:</strong>{" "}
                        <a
                            href="https://wa.me/27763475725"
                            className="text-indigo-500"
                        >
                            +27 76 347 5725
                        </a>
                    </p>
                    <p className="mb-4">
                        <i className="fas fa-envelope text-indigo-500 mr-2"></i>
                        <strong>Email:</strong>{" "}
                        <a
                            href="mailto:drpertmac@gmail.com"
                            className="text-indigo-500"
                        >
                            drpertmac@gmail.com
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default RecoveryHousePage;
