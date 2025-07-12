import React from 'react';
import heroImage from '../assets/hero-image.png'; // replace with your image name

const HeroSection = () => {
  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg">
        {/* Image */}
        <img
          src={heroImage}
          alt="HaritSetu Visual"
          className="w-full h-[400px] object-cover rounded-2xl"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-xl">HaritSetu</h1>
          <p className="text-md md:text-xl mt-2 drop-shadow-md font-medium">
            Sell Smart, Stay Green — No Smoke in Between
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
