import React from 'react';
import { Link } from 'react-router-dom';

const RecoveryHouseSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-300 via-pink-200 to-pink-400 py-16 px-6 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-serif mb-4">
          Your Recovery, Your Sanctuary
        </h2>
        <h3 className="text-2xl sm:text-3xl font-serif mb-6">
          Where Comfort Meets Care
        </h3>
        <p className="text-lg sm:text-xl mb-8">
          If you're planning to undergo transformative surgery at Dr. Pert's Body Sculpting Clinic, take a moment to explore where you'll be healing and preparing for your beautiful new beginning.
        </p>
        <Link
          to="/recovery-house"
          className="inline-block bg-pink-300 text-white py-3 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:bg-pink-400 hover:scale-105"
        >
          Discover Your Healing Journey
        </Link>
      </div>
    </section>
  );
};

export default RecoveryHouseSection;