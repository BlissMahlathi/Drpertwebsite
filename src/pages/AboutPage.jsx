import { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import HeroImg from "../assets/hero2.jpg";

const AboutPage = () => {
    useEffect(() => {
        gsap.from(".story-content", { opacity: 1, y: 50, duration: 1 });
    }, []);

    return (
        <div
            className="bg-gray-50 pt-28"
            style={{
                backgroundImage: `url(${HeroImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh"
            }}
        >
            <section id="hero" className="relative h-full">
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center py-24">
                    <div>
                        <h1 className="text-4xl font-bold text-purple-800">
                            Welcome to Dr. Pert Medical Centre
                        </h1>
                        <p className="mt-4 text-xl font-light text-bluish-pink">
                            Transforming Lives, Sculpting Bodies
                        </p>
                        <p className="mt-2 text-md text-bluish-pink">
                            Where beauty, confidence, and healing unite.
                        </p>
                    </div>
                </div>
            </section>

            <section id="our-story" className="py-52">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-purple-700">
                        Our Story
                    </h2>
                    <p className="story-content mt-6 text-lg text-gray-200 max-w-4xl mx-auto">
                        Dr. Pert’s journey began with a passion for transforming
                        lives. Torn between pursuing a specialized surgical
                        career or diving into medical aesthetics, Dr. Pert
                        listened to the calling of the heart: to create a
                        lasting impact on the lives of individuals.
                        <br />
                        <br />
                        At Dr. Pert’s Medical Centre, we believe in providing
                        more than just body sculpting; we believe in holistic
                        healing. Our treatments are designed not just to enhance
                        beauty but to empower our patients, helping them become
                        their most confident selves.
                        <br />
                        <br />
                        <strong className="text-purple-800">
                            We are Africa’s true representation of luxury,
                            beauty, and self-love.
                        </strong>
                    </p>
                    <div className="mt-12 flex justify-center">
                        <Link to="/contact">
                            <button className="bg-purple-800 text-white px-6 py-3 rounded-lg hover:bg-bluish-pink transition duration-300">
                                Book a Consultation
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section id="patient-testimonials" className="py-16 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h3 className="text-2xl font-semibold text-purple-700">
                        What Our Patients Say
                    </h3>
                    <div className="flex justify-center mt-8">
                        <div className="w-3/4 md:w-1/2 px-4">
                            <p className="text-lg italic text-gray-700">
                                "Dr. Pert and her team made me feel like the
                                best version of myself. The results were beyond
                                my expectations, and my confidence has never
                                been higher."
                            </p>
                            <span className="block mt-4 font-medium text-purple-800">
                                - Patient Name
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="cta"
                className="py-16 bg-purple-800 text-white text-center mt-48"
            >
                <h3 className="text-3xl font-semibold">
                    Ready for Your Transformation?
                </h3>
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                    Join the many individuals who have embraced their beauty and
                    transformed their lives with Dr. Pert's body sculpting
                    treatments.
                </p>
                <div className="mt-8">
                    <Link to="/contact">
                        <button className="bg-white text-purple-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-300">
                            Book Your Appointment Now
                        </button>
                    </Link>
                </div>
            </section>

            <div className="pb-4"></div>
        </div>
    );
};

export default AboutPage;
