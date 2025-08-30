import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  WifiIcon,
  CameraIcon,
  KeyIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Main = () => {
  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  // ✅ Initialize AOS once
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      {/* Booking Form */}
      <div
        className="bg-white opacity-95 hover:opacity-100 shadow-xl rounded-2xl p-6 max-w-6xl mx-auto -mt-16 relative z-20"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 items-end">
          {/* Check-In */}
          <div className="flex flex-col" data-aos="fade-right">
            <label className="text-gray-600 text-sm font-medium mb-1">Check In</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Check-Out */}
          <div className="flex flex-col" data-aos="fade-left">
            <label className="text-gray-600 text-sm font-medium mb-1">Check Out</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col" data-aos="zoom-in">
            <label className="text-gray-600 text-sm font-medium mb-1">Guests</label>
            <div className="flex items-center border border-gray-300 rounded-md px-2 py-2">
              <button
                onClick={() => setGuests(Math.max(1, guests - 1))}
                className="px-2 py-1 text-lg font-bold text-gray-600 hover:text-black"
              >
                −
              </button>
              <span className="flex-1 text-center">{guests}</span>
              <button
                onClick={() => setGuests(guests + 1)}
                className="px-2 py-1 text-lg font-bold text-gray-600 hover:text-black"
              >
                +
              </button>
            </div>
          </div>

          {/* Search Button */}
          <Link to="/rooms" data-aos="fade-up">
            <div className="flex">
              <button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition">
                Search
              </button>
            </div>
          </Link>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-24 mt-12" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          Most Popular Facilities
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          <div className="flex flex-col items-center space-y-2" data-aos="zoom-in">
            <WifiIcon className="h-8 w-8 text-blue-600" />
            <span className="text-gray-700 font-medium">WiFi</span>
          </div>
          <div className="flex flex-col items-center space-y-2" data-aos="zoom-in" data-aos-delay="100">
            <HomeIcon className="h-8 w-8 text-green-600" />
            <span className="text-gray-700 font-medium">Garden</span>
          </div>
          <div className="flex flex-col items-center space-y-2" data-aos="zoom-in" data-aos-delay="200">
            <CameraIcon className="h-8 w-8 text-red-600" />
            <span className="text-gray-700 font-medium">Cameras</span>
          </div>
          <div className="flex flex-col items-center space-y-2" data-aos="zoom-in" data-aos-delay="300">
            <KeyIcon className="h-8 w-8 text-yellow-600" />
            <span className="text-gray-700 font-medium">Self Check-in</span>
          </div>
          <div className="flex flex-col items-center space-y-2" data-aos="zoom-in" data-aos-delay="400">
            <BanknotesIcon className="h-8 w-8 text-purple-600" />
            <span className="text-gray-700 font-medium">Pay at Stay</span>
          </div>
          <div className="flex flex-col items-center space-y-2" data-aos="zoom-in" data-aos-delay="500">
            <ShieldCheckIcon className="h-8 w-8 text-indigo-600" />
            <span className="text-gray-700 font-medium">Free Parking</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-gray-50 mt-12" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About Our Rooms & Services
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Experience comfort, luxury, and convenience in our thoughtfully
            designed rooms. Each stay is tailored to provide a relaxing escape
            with modern amenities and exceptional hospitality that makes every
            moment memorable.
          </p>
        </div>

        {/* Grid Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition" data-aos="flip-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Luxurious Rooms
            </h3>
            <p className="text-gray-600">
              Spacious, elegant, and fully equipped rooms designed to give you
              the perfect balance of style and comfort during your stay.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition" data-aos="flip-up">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              In-House Dining
            </h3>
            <p className="text-gray-600">
              Enjoy a wide variety of cuisines prepared by our expert chefs,
              served fresh to satisfy every taste and preference.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition" data-aos="flip-right">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Exclusive Services
            </h3>
            <p className="text-gray-600">
              From free Wi-Fi and secure parking to self check-in and 24/7
              security, we ensure a hassle-free experience for every guest.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
