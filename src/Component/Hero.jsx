import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const gallery = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg", "/6.jpg"];
  const [selectedImage, setSelectedImage] = useState(null);

  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className=" mt-10 relative h-[80vh] md:h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/home.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-50"></div>

        {/* Content */}
        <div
          className="relative z-10 max-w-3xl px-4 sm:px-6 md:px-12 text-left"
          data-aos="fade-up"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
            Making every <br className="hidden sm:block" /> stay memorable
          </h1>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-lg">
            Stay secured — pay only when you check in.
          </p>

          <Link to="/rooms">
            <button className="mt-5 sm:mt-6 px-5 sm:px-6 py-2 sm:py-3 rounded-md bg-red-500 text-white text-base sm:text-lg font-medium hover:bg-red-600 transition">
              Book Now
            </button>
          </Link>
        </div>
      </section>

      {/* ✅ Image Gallery */}
      <section className="py-12 px-4 sm:px-6 md:px-12 bg-gray-50">
        <h2
          className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center"
          data-aos="fade-up"
        >
          Explore Our Rooms
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md group cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Room ${index + 1}`}
                className="w-full h-40 sm:h-48 md:h-56 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Fullscreen"
            className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
            data-aos="zoom-in"
          />
          <button
            className="absolute top-4 right-6 text-white text-3xl font-bold"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default Hero;
