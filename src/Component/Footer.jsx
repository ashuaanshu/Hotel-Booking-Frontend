import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">

        {/* About Hotel */}
        <div className="flex-1" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-white mb-4">Apna Hotel</h2>
          <p className="text-sm leading-relaxed mb-4">
            Experience comfort, luxury, <br /> and unforgettable hospitality <br /> with us.
            A perfect stay awaits <br /> you at Apna Hotel.
          </p>
          <div className="flex justify-center sm:justify-start flex-wrap gap-3">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-white hover:text-gray-900 transition">
              🌐
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-white hover:text-gray-900 transition">
              📘
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-white hover:text-gray-900 transition">
              📸
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-white hover:text-gray-900 transition">
              🐦
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="flex-1" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
          <ul className="space-y-2 text-sm text-center md:text-left">
            <li>📞 +1 250-555-0199</li>
            <li>✉️ Demo@gmail.com</li>
            <li>📍 M5T 2L9, Toronto, Canada</li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex-1" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-xl font-semibold text-white mb-4">Services</h2>
          <ul className="space-y-2 text-sm text-center md:text-left">
            <li>🍽️ 24/7 Open</li>
            <li>🅿️ Parking Area</li>
            <li>🏊 Free Wifi</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-800 pt-4 text-center text-xs sm:text-sm text-gray-400">
        © {new Date().getFullYear()} ashuaanshu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
