import React, { useState, useEffect } from "react";
import HomeImage from '../../assets/images/banner.png';
import HomeImage1 from '../../assets/images/camping1.png';
import HomeImage2 from '../../assets/images/camping3.png';

const images = [
  HomeImage,
  HomeImage1,
  HomeImage2,
];

const ImageSlider = () => {
  const [sliderValue, setSliderValue] = useState(0);

  // Auto-advance to the next image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSliderValue((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
   <>
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Image Display */}
      <div className="w-full h-full">
        <img
          src={images[sliderValue]}
          alt={`Image ${sliderValue + 1}`}
          className="w-full h-full object-cover"  // Full width and height with object-cover to maintain aspect ratio
        />
      </div>

      {/* Overlay and Text */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>  {/* Semi-transparent overlay */}

      <div className="absolute text-center text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4">
        <h1>Donate <span className="bg-red-600 p-1 rounded-md">Blood</span> Save Lives</h1>
        <p className="mt-4 text-xl sm:text-2xl">Your donation can make a difference!</p>
      </div>

      {/* Image Indicator (optional) */}
      
    </div>
   </>
  );
};

export default ImageSlider;
