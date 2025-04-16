import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const services = [
  "Panchakarma", "Herbal Therapy", "Nadi Pariksha",
  "Detox Programs", "Back Pain Relief", "Migraine Therapy",
  "Spine Alignment", "Knee Pain Solutions", "Immunity Boost", "Ayurvedic Diet"
];

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

export default function AutoCarousel() {
  const itemsPerSlide = 6;
  const serviceChunks = chunkArray(services, itemsPerSlide);
  const [slide, setSlide] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % serviceChunks.length);
    }, 5000);
    return () => clearInterval(interval); // cleanup on unmount
  }, [serviceChunks.length]);

  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % serviceChunks.length);
  };

  const prevSlide = () => {
    setSlide((prev) => (prev - 1 + serviceChunks.length) % serviceChunks.length);
  };

  return (
    <div className="relative bg-white py-8 px-4">
      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl text-emerald-600 hover:text-emerald-800"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-emerald-600 hover:text-emerald-800"
      >
        <FaChevronRight />
      </button>

      {/* Carousel content */}
      <div className="grid grid-cols-3 gap-4">
        {serviceChunks[slide].map((service, idx) => (
          <div
            key={idx}
            className="bg-emerald-100 p-6 rounded-xl shadow-md text-center"
          >
            <h4 className="text-lg font-bold text-emerald-700">{service}</h4>
            <p className="text-sm text-gray-600 mt-2">Effective Ayurvedic Care</p>
          </div>
        ))}
      </div>
    </div>
  );
}
