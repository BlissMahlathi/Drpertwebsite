import React from "react";
import { Link } from "react-router-dom";

const TestimonialsSection = () => {
    return (
        <>
            <section className="bg-white text-gray-800 py-12 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl text-purple-600 mb-8">
                        What Our Clients Say
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="bg-purple-100 p-6 rounded-xl max-w-xs w-full shadow-md">
                            <p className="text-gray-800 text-base leading-relaxed mb-4">
                                "The treatments here have transformed my skin!
                                The team is professional and so knowledgeable. I
                                couldn’t be happier with the results!"
                            </p>
                            <span className="block text-lg font-bold text-purple-600">
                                - Sarah J., Client
                            </span>
                        </div>
                        <div className="bg-purple-100 p-6 rounded-xl max-w-xs w-full shadow-md">
                            <p className="text-gray-800 text-base leading-relaxed mb-4">
                                "Amazing experience! I feel so much more
                                confident after my body sculpting session.
                                Highly recommend to anyone looking for top-notch
                                services!"
                            </p>
                            <span className="block text-lg font-bold text-purple-600">
                                - Emily R., Client
                            </span>
                        </div>
                    </div>
                    <Link
                        to="https://www.instagram.com/drpert_centre4bodysculpting?igsh=YzljYTk1ODg3Zg=="
                        target="_blank"
                        className="inline-block bg-purple-600 text-white py-3 px-8 rounded-full text-lg mt-8 transition duration-300 ease-in-out transform hover:bg-purple-700 hover:scale-105"
                    >
                        See Our Transformations on IG
                    </Link>
                </div>
            </section>

            
            <section className="bg-gradient-to-r from-purple-300 via-pink-200 to-pink-400 py-12 px-6 text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-serif mb-6">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-lg sm:text-xl mb-6">
                        Get in touch with us today to learn more about our
                        treatments and how we can help you feel your best.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-pink-300 text-white py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:bg-pink-400 hover:scale-105"
                    >
                        Get in Touch with Us
                    </Link>
                </div>
            </section>
        </>
    );
};

export default TestimonialsSection;
