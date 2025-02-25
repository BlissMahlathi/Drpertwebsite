import React from "react";
import BdsHero from "../../public/bdshero.jpg";
import Lepo from "../../public/liposuction.jpg";
import ButtLift from "../../public/african-butt-lift.jpg";
import PatientOne from "../../public/path-to-patient-one-image.jpg";
import PatientTwo from "../../public/path-to-patient-two-image.jpg";

const BodySculptingPage = () => {
    return (
        <div className="font-sans text-gray-800">
            <section
                className="relative h-screen bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${BdsHero})` }}
            >
                <div className="hero-overlay absolute inset-0 bg-black opacity-50"></div>
                <h1 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold text-center">
                    Body Sculpting
                </h1>
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl md:text-2xl italic text-center">
                    Every Sculpture needs an Artist
                </p>
            </section>

            <section className="py-16 px-4 relative">
                <div className="vertical-line left absolute left-0 top-0 h-full border-r-4 border-gray-300"></div>
                <div className="intro-content max-w-2xl mx-auto text-center">
                    <p className="text-xl leading-relaxed">
                        <span className="font-bold text-purple-500">
                            Beauty, love, power, and confidence
                        </span>
                        —these are the feelings Dr. Pert and her team want every
                        patient to experience when they look at their bodies
                        after surgery. One of our guiding philosophies is that
                        we don’t just change bodies; we transform lives. Through
                        procedures like Liposuction and African Butt Lift (ABL),
                        we help people achieve a new level of confidence and
                        self-love.
                    </p>
                </div>
                <div className="vertical-line right absolute right-0 top-0 h-full border-l-4 border-gray-300"></div>
            </section>

            <section
                id="our-body-sculpting-offerings"
                className="py-16 px-4 bg-gray-100"
            >
                <h2 className="text-center text-3xl font-bold mb-6">
                    Our Body Sculpting Offerings
                </h2>
                <p className="text-center text-lg mb-12">
                    Body Sculpting is an art that helps you redefine your
                    natural curves, bringing your body closer to your ideal
                    shape with precision and care.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-6 mb-8">
                    <div className="w-full md:w-1/2">
                        <img
                            src={Lepo}
                            alt="Liposuction"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0">
                        <h3 className="text-2xl font-semibold mb-4">
                            Liposuction
                        </h3>
                        <p className="text-lg">
                            Liposuction is a transformative procedure that
                            targets stubborn fat deposits, sculpting your body
                            to a smoother, more defined shape. By removing fat
                            from areas like the abdomen, thighs, or arms, it
                            helps you feel more confident in your skin.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-6">
                    <div className="w-full md:w-1/2">
                        <img
                            src={ButtLift}
                            alt="African Butt Lift"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0">
                        <h3 className="text-2xl font-semibold mb-4">
                            African Butt Lift (ABL)
                        </h3>
                        <p className="text-lg">
                            The African Butt Lift (ABL) enhances your natural
                            buttocks by redistributing fat to create a fuller,
                            rounder, and more youthful appearance. This
                            procedure uses your own body fat, making it a
                            natural and personalized approach to achieve the
                            shape you desire.
                        </p>
                    </div>
                </div>
            </section>

            <section id="body-sculpting-procedure" className="py-16 px-4">
                <h2 className="text-center text-3xl font-bold mb-6">
                    Body Sculpting Procedure at Dr. Pert
                </h2>
                <p className="text-center text-lg mb-12">
                    Our process is simple, effective, and tailored to your
                    needs. We guide you through each step of the journey from
                    consultation to recovery.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                    <div className="bg-white shadow-lg rounded-lg p-6 border border-purple-300 border-r">
                        <h3 className="text-xl font-semibold mb-4">
                            Consultation
                        </h3>
                        <p>
                            Our journey begins with a one-on-one consultation
                            where we understand your goals and assess your
                            needs. Together, we create a personalized plan
                            that’s just right for you.
                        </p>
                    </div>

                    <div
                        className="bg-white shadow-lg rounded-lg p-6 border-purple-300 border hover:border-1/2
                  "
                    >
                        <h3 className="text-xl font-semibold mb-4">
                            Preparation
                        </h3>
                        <p>
                            Before the procedure, we ensure that all necessary
                            medical checks are done, and you’re comfortable with
                            the steps. We guide you on what to do to prepare for
                            the surgery day.
                        </p>
                    </div>

                    <div
                        className="bg-white shadow-lg rounded-lg p-6 border border-purple-300
                    "
                    >
                        <h3 className="text-xl font-semibold mb-4">
                            The Procedure
                        </h3>
                        <p>
                            Dr. Pert’s skilled hands, along with her talented
                            and dedicated team, will meticulously sculpt your
                            body to perfection. You’ll be in great hands as we
                            work together to bring out your body’s fullest
                            potential.
                        </p>
                    </div>

                    <div
                        className="bg-white shadow-lg rounded-lg p-6 border border-purple-300
                    "
                    >
                        <h3 className="text-xl font-semibold mb-4">Recovery</h3>
                        <p>
                            Our commitment to exceptional care and recovery has
                            driven us to create a dedicated{" "}
                            <a
                                href="recovery-house.html"
                                className="text-purple-600"
                            >
                                recovery house
                            </a>
                            . All patients undergoing surgery are required to
                            stay there for at least three days to ensure a
                            smooth and effective healing process.
                        </p>
                    </div>
                </div>
            </section>

            <section id="testimonials" className="py-16 px-4 bg-gray-200">
                <h2 className="text-center text-3xl font-bold mb-6">
                    Our Patients' Results
                </h2>
                <p className="text-center text-lg mb-12">
                    See the incredible results our patients have experienced
                    with our body sculpting procedures.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <img
                            src={PatientOne}
                            alt="Patient One Transformation"
                            className="w-full h-auto object-cover rounded-lg mb-4"
                        />
                        <p className="text-lg">
                            Patient One: Achieving goals with confidence and
                            care.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <img
                            src={PatientTwo}
                            alt="Patient Two Transformation"
                            className="w-full h-auto object-cover rounded-lg mb-4"
                        />
                        <p className="text-lg">
                            Patient Two: A transformation that speaks for
                            itself.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-xl italic">
                        "No magic, just skill and a whole lot of fabulous!"
                    </p>
                </div>
            </section>

            <section id="faq-section" className="py-16 px-4">
                <h2 className="text-center text-3xl font-bold mb-6">
                    Frequently Asked Questions
                </h2>

                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Liposuction</h3>
                    <FAQItem
                        question="What are the risks of liposuction?"
                        answer="Risks can include infection, blood clots, asymmetry, scarring, and changes in skin sensation. It’s important to choose a qualified surgeon to minimize these risks."
                    />
                    <FAQItem
                        question="How long is the recovery time for liposuction?"
                        answer="Most patients return to normal activities within 1-2 weeks. Full recovery, including the final results, can take several months as swelling and bruising subside."
                    />
                    <FAQItem
                        question="Will the fat come back after liposuction?"
                        answer="Fat cells removed during liposuction do not regenerate. However, if you gain weight after the procedure, the remaining fat cells in untreated areas can expand, affecting overall contour."
                    />
                    <FAQItem
                        question="Can I wear a compression garment after liposuction?"
                        answer="Yes, wearing a compression garment is crucial to reduce swelling and help the skin conform to the new body shape post-surgery."
                    />
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-4">
                        African Butt Lift (ABL)
                    </h3>
                    <FAQItem
                        question="How is an ABL different from implants?"
                        answer="An African Butt Lift (ABL) uses your own fat to augment the buttocks, while implants are made of silicone and inserted into the buttocks to create volume."
                    />
                    <FAQItem
                        question="How long does an ABL surgery take?"
                        answer="The procedure usually takes 2 to 4 hours, depending on the amount of fat being harvested and transferred."
                    />
                    <FAQItem
                        question="What are the risks of an ABL?"
                        answer="Risks include infection, blood clots, fat embolism (fat entering the bloodstream), asymmetry, and scarring. Fat embolism is particularly serious, making it crucial to choose an experienced surgeon."
                    />
                    <FAQItem
                        question="How long is the recovery for an ABL?"
                        answer="Recovery typically takes 2 to 3 weeks for initial healing. Full recovery can take several months, and it’s essential to avoid sitting directly on the buttocks during this time."
                    />
                    <FAQItem
                        question="Will I have scars after an ABL?"
                        answer="Yes, small incisions are made during fat harvesting. These are typically hidden in discreet areas, and scarring is minimal."
                    />
                    <FAQItem
                        question="Can I sit down after an ABL?"
                        answer="For the first 2-3 weeks, avoid sitting directly on your buttocks to ensure proper fat survival. Special cushions may be recommended during this period."
                    />
                </div>
            </section>
        </div>
    );
};

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
            <div
                className="cursor-pointer flex items-center justify-between"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h4 className="text-lg font-semibold">{question}</h4>
                <span className="text-purple-600">{isOpen ? "-" : "+"}</span>
            </div>
            {isOpen && <p className="mt-2">{answer}</p>}
        </div>
    );
};

export default BodySculptingPage;
