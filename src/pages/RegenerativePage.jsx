import React from "react";
import Regen from "../../public/rc.jpg";

const Regenerative = () => {
    return (
        <div className="py-28">
            <section
                id="hero"
                className="relative w-full h-[60vh] bg-gradient-to-r from-[#9B69A1] to-[#A9C8E0] py-20 text-center text-white"
            >
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold mb-4">
                        Welcome to Dr.Pert Centre for Regenerative & Wellness
                        Medicine
                    </h1>
                    <p className="text-xl mb-6">
                        Revitalize your health, rejuvenate your body, and
                        experience transformative wellness.
                    </p>
                </div>
            </section>

            <section
                id="regenerative-wellness"
                className="bg-[#F7F9FC] py-16 px-4 text-gray-800"
            >
                <div className="container mx-auto max-w-screen-xl">
                    <h2 className="text-3xl text-[#B38DDB] font-bold text-center mb-8">
                        Centre For Regenerative Medicine and Wellness
                    </h2>
                    <div className="flex flex-wrap gap-8 items-center">
                        <div className="flex-1 text-lg leading-8 pr-8">
                            <p>
                                Taking care of women’s health is essential for
                                overall well-being. It supports physical health
                                by preventing illnesses, reduces stress and
                                anxiety, and enhances mental clarity. Focusing
                                on health also improves self-image and boosts
                                confidence, empowering women to feel more
                                positive, energetic, and in control of their
                                lives.
                            </p>
                        </div>
                        <div className="flex-1 text-center">
                            <img
                                src={Regen}
                                alt="Women’s Health and Wellness"
                                className="max-w-3/5 rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="offerings"
                className="bg-white py-16 px-4 text-gray-800"
            >
                <div className="container mx-auto max-w-screen-xl">
                    <h2 className="text-3xl text-[#B38DDB] font-bold text-center mb-8">
                        Our Offerings
                    </h2>
                    <div className="flex flex-wrap gap-8">
                        <div className="flex-1 bg-[#F7F9FC] p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl text-[#B38DDB] mb-4">
                                Pap Smear
                            </h3>
                            <p className="text-lg">
                                A simple, routine test to detect abnormal cells
                                in the cervix, helping prevent cervical cancer.
                            </p>
                        </div>

                        <div className="flex-1 bg-[#F7F9FC] p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl text-[#B38DDB] mb-4">
                                Vaginal Rejuvenation
                            </h3>
                            <p className="text-lg">
                                Non-invasive treatments designed to restore
                                vaginal health, improve tone, and enhance
                                comfort.
                            </p>
                        </div>

                        <div className="flex-1 bg-[#F7F9FC] p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl text-[#B38DDB] mb-4">
                                Urinary Incontinence
                            </h3>
                            <p className="text-lg">
                                A range of treatments to manage and reduce the
                                involuntary leakage of urine, improving quality
                                of life.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#F1F8FF] py-8 px-6 mt-12 rounded-lg">
                        <h3 className="text-2xl text-[#B38DDB] font-bold text-center mb-6">
                            Benefits of Undergoing These Treatments
                        </h3>
                        <ul className="list-disc pl-6 text-lg space-y-4">
                            <li>Improved overall health and well-being</li>
                            <li>
                                Prevention of serious conditions like cervical
                                cancer
                            </li>
                            <li>
                                Restored vaginal health, comfort, and function
                            </li>
                            <li>Increased confidence and self-image</li>
                            <li>
                                Improved bladder control and reduced leakage
                            </li>
                            <li>Non-invasive and minimal recovery time</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Regenerative;
