import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="mt-5 min-h-screen bg-gray-50 py-12 px-6 flex flex-col items-center">
      {/* Heading */}
      <h1
        className="text-4xl font-bold text-gray-800 mb-6"
        data-aos="fade-down"
      >
        About Our Hotel
      </h1>
      <p
        className="text-lg text-gray-600 text-center max-w-3xl mb-12"
        data-aos="fade-up"
      >
        Welcome to <span className="font-semibold">Royal Stay Hotel</span> – 
        where luxury meets comfort. Nestled in the heart of the city, our hotel 
        offers world-class hospitality, modern amenities, and unforgettable 
        experiences for our guests.
      </p>

      {/* Mission Section */}
      <div
        className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mb-16"
        data-aos="fade-right"
      >
        <img
          src="/1.jpg"
          alt="Hotel Lobby"
          className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
        />
        <div data-aos="fade-left">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            At Royal Stay, our mission is simple – to make every guest feel at 
            home while experiencing the luxury and elegance they deserve. Whether 
            you’re here for business or leisure, we provide tailored services to 
            ensure your stay is nothing short of perfect.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mb-16">
        <h2
          className="text-2xl font-bold text-gray-800 mb-6 text-center"
          data-aos="zoom-in"
        >
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition"
            data-aos="flip-left"
          >
            <span className="text-4xl">🛏️</span>
            <h3 className="text-xl font-semibold text-gray-800 mt-3">
              Luxury Rooms
            </h3>
            <p className="text-gray-600 mt-2">
              Spacious, elegant rooms with modern interiors and premium comfort.
            </p>
          </div>
          <div
            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition"
            data-aos="flip-up"
          >
            <span className="text-4xl">🍽️</span>
            <h3 className="text-xl font-semibold text-gray-800 mt-3">
              Fine Dining
            </h3>
            <p className="text-gray-600 mt-2">
              Enjoy world-class cuisines prepared by our top chefs.
            </p>
          </div>
          <div
            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition"
            data-aos="flip-right"
          >
            <span className="text-4xl">🏊</span>
            <h3 className="text-xl font-semibold text-gray-800 mt-3">
              Relax & Refresh
            </h3>
            <p className="text-gray-600 mt-2">
              Pool, spa & wellness center to rejuvenate your body and mind.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-6xl">
        <h2
          className="text-2xl font-bold text-gray-800 mb-6 text-center"
          data-aos="zoom-in-up"
        >
          A Glimpse of Our Hotel
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <img
            src="/2.jpg"
            alt="Hotel View"
            className="rounded-2xl shadow-lg h-[250px] w-full object-cover"
            data-aos="fade-up"
          />
          <img
            src="/3.jpg"
            alt="Luxury Room"
            className="rounded-2xl shadow-lg h-[250px] w-full object-cover"
            data-aos="fade-down"
          />
          <img
            src="/5.jpg"
            alt="Dining Area"
            className="rounded-2xl shadow-lg h-[250px] w-full object-cover"
            data-aos="fade-up"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
