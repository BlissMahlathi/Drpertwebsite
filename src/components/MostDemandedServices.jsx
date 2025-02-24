import React from "react";
import { Link } from "react-router-dom";

const MostDemandedServices = () => {
   

    return (
        <section
            id="most-demanded-services"
            className="bg-[#E0BBE4] py-12 px-5 text-center"
        >
            <h2 className="text-[#4a4a4a] text-4xl mb-8">
                Our Most Demanded Services
            </h2>
            <div className="flex justify-between gap-5 flex-wrap mx-auto max-w-screen-xl">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-1/3 md:w-1/4 text-center p-5 transition-transform transform hover:translate-y-[-10px]">
                    <img
                        src="iv-drips.jpg"
                        alt="IV Drips"
                        className="w-full h-auto rounded-md"
                    />
                    <h3 className="text-[#4a4a4a] text-xl mt-5">IV Drips</h3>
                    <p className="text-[#777] text-base leading-relaxed mt-4">
                        In a world where the quality of our air, water, and food
                        is often compromised, IV drips can play a vital role in
                        supplementing our bodies. After all, good health is the
                        foundation of true wealth.
                    </p>
                    <Link
                        to="/services/iv-drips"
                        className="inline-block bg-[#4a4a4a] text-white py-2 px-4 rounded-lg mt-5 transition-colors hover:bg-[#5a5a5a]"
                    >
                        Learn More
                    </Link>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-1/3 md:w-1/4 text-center p-5 transition-transform transform hover:translate-y-[-10px]">
                    <img
                        src="regenerative.jpg"
                        alt="Regenerative & Wellness Clinic"
                        className="w-full h-auto rounded-md"
                    />
                    <h3 className="text-[#4a4a4a] text-xl mt-5">
                        Regenerative & Wellness Clinic
                    </h3>
                    <p className="text-[#777] text-base leading-relaxed mt-4">
                        We proudly champion women's health, offering a
                        compassionate and empowering space dedicated to
                        nurturing vitality, confidence, and well-being through
                        every phase of womanhood.
                    </p>
                    <Link
                        to="/services/regenerative"
                        className="inline-block bg-[#4a4a4a] text-white py-2 px-4 rounded-lg mt-5 transition-colors hover:bg-[#5a5a5a]"
                    >
                        Learn More
                    </Link>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-1/3 md:w-1/4 text-center p-5 transition-transform transform hover:translate-y-[-10px]">
                    <img
                        src="body-sculpting.jpg"
                        alt="Body Sculpting (Liposuction + ABL)"
                        className="w-full h-auto rounded-md"
                    />
                    <h3 className="text-[#4a4a4a] text-xl mt-5">
                        Body Sculpting (Liposuction + ABL)
                    </h3>
                    <p className="text-[#777] text-base leading-relaxed mt-4">
                        Achieve the body you've always desired with our
                        precision Body Sculpting. Choose Liposuction for a
                        refined shape, or enhance your curves with an African
                        Butt Lift (ABL)—or both for a complete transformation.
                    </p>
                    <Link
                        to="/services/body-sculpting"
                        className="inline-block bg-[#4a4a4a] text-white py-2 px-4 rounded-lg mt-5 transition-colors hover:bg-[#5a5a5a]"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MostDemandedServices;
