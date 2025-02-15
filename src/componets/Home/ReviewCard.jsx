import React, { useState, useEffect } from "react";

// Sample reviews data
import Review1 from '../../assets/images/review1.jpeg'
import Review2 from '../../assets/images/review2.jpeg'

const reviews = [
  {
    name: "John Doe",
    text: "This is the best service I have ever used! Highly recommend to everyone.",
    rating: 5,
    image: Review1,
  },
  {
    name: "Jane Smith",
    text: "A wonderful experience! The team was professional and helpful throughout.",
    rating: 4,
    image: Review2,
  },
  {
    name: "Jane Smith",
    text: "A wonderful experience! The team was professional and helpful throughout.",
    rating: 4,
    image: Review2,
  },
  {
    name: "Jane Smith",
    text: "A wonderful experience! The team was professional and helpful throughout.",
    rating: 4,
    image: Review2,
  },
];

const ReviewCardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the review every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  // Move to the next review
  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  // Move to the previous review
  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="relative m-3 p-4 md:p-20 w-full max-w-3xl mx-auto">
      <h2 className="font-[Poppins] md:text-5xl text-3xl font-bold text-center mb-12">Feedback's</h2>

      {/* Review Cards */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Slide the review cards
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="w-full sm:w-[300px] md:w-[400px] lg:w-[450px] flex-shrink-0 p-4 border border-gray-200 rounded-lg shadow-lg bg-white mx-2"
            >
              <div className="flex h-[200px] justify-center items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="text-yellow-500">
                    {"★".repeat(review.rating)}{" "}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Next and Previous Buttons */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
          onClick={prevReview}
        >
          &#8592;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
          onClick={nextReview}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default ReviewCardSlider;
