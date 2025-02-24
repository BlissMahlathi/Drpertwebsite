import React, { useState, useEffect } from "react";

const ContactPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const checkOpeningHours = () => {
            const now = new Date();
            const day = now.getDay();
            const hour = now.getHours();

            if (day === 0) {
                setIsOpen(false);
            } else if (hour >= 9 && hour < 15) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        checkOpeningHours();
        const interval = setInterval(checkOpeningHours, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container mx-auto px-6 py-36 space-y-12">
            <section
                id="schedule-hours"
                className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-3xl font-semibold text-indigo-600 mb-6">
                        Consultation Schedule
                    </h3>
                    <div className="text-lg text-gray-700 space-y-3">
                        <p>
                            <strong>Tuesdays:</strong> Online consultations
                            available.
                        </p>
                        <p>
                            <strong>Thursdays:</strong> Walk-in consultations
                            (9:00 AM - 12:00 PM).
                        </p>
                        <p>
                            Consultation times are subject to availability.
                            Please book in advance where possible.
                        </p>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-3xl font-semibold text-indigo-600 mb-6">
                        Operating Hours
                    </h3>
                    <div className="text-lg text-gray-700 space-y-3">
                        <p>
                            <strong>Monday - Saturday:</strong> 9:00 AM - 3:00
                            PM
                        </p>
                        <p>
                            <strong>Sunday:</strong> Closed
                        </p>
                    </div>
                </div>
            </section>

            <section
                id="real-time-status"
                className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto text-center"
            >
                <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
                    Current Status
                </h2>
                <p
                    className={`text-2xl font-bold ${
                        isOpen ? "text-green-600" : "text-red-600"
                    }`}
                >
                    {isOpen ? "We are OPEN" : "We are CLOSED"}
                </p>
            </section>

            <section
                id="contact-info"
                className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto"
            >
                <h2 className="text-3xl font-semibold text-indigo-600 mb-6">
                    Contact Information
                </h2>
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <i className="fas fa-map-marker-alt text-indigo-600 text-2xl"></i>
                        <p>
                            <strong>Address:</strong> 521 Jaqueline Drive,
                            Garsfontein, Pretoria
                        </p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <i className="fas fa-envelope text-indigo-600 text-2xl"></i>
                        <p>
                            <strong>Email:</strong>{" "}
                            <a
                                href="mailto:drpertmac@gmail.com"
                                className="text-indigo-600 hover:underline"
                            >
                                drpertmac@gmail.com
                            </a>
                        </p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <i className="fas fa-phone-alt text-indigo-600 text-2xl"></i>
                        <p>
                            <strong>Phone:</strong>{" "}
                            <a
                                href="tel:+27 12 992 5025"
                                className="text-indigo-600 hover:underline"
                            >
                                +27 12 9925 025
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            <section
                id="map-section"
                className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto"
            >
                <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                    Where to Find Us
                </h3>
                <div className="w-full">
                    <iframe
                        title="Dr. Pert Medical Centre Location"
                        className="w-full h-96 border-0 rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.4366406706886!2d28.2925722745759!3d-25.78916517733458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9560a8960d0ba9%3A0x2f9514f0c16cc142!2s521%20Jacqueline%20Dr%2C%20Garsfontein%2C%20Pretoria%2C%200042!5e0!3m2!1sen!2sza!4v1738427322545!5m2!1sen!2sza"
                        loading="lazy"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
