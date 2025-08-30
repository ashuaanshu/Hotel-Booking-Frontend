import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Wifi, BedDouble, Tv, Wind, Bath } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Example data
const sampleRooms = [
  {
    id: 1,
    title: "Deluxe Room",
    images: ["/1.jpg", "/2.jpg", "/3.jpg"],
    features: ["King Bed", "Free WiFi", "Air Conditioning", "City View"],
    status: "Available",
    price: 120,
  },
  {
    id: 2,
    title: "Executive Suite",
    images: ["/4.jpg", "/5.jpg", "/6.jpg"],
    features: ["2 Queen Beds", "Mini Bar", "Smart TV", "Ocean View"],
    status: "Booked",
    price: 250,
  },
  {
    id: 3,
    title: "Standard Room",
    images: ["/7.jpg", "/1.jpg", "/2.jpg"],
    features: ["1 Double Bed", "Hot Shower", "Wardrobe", "Room Service"],
    status: "Available",
    price: 80,
  },
];

const Room = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    setRooms(sampleRooms);
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2
          className="text-4xl font-bold text-gray-900 mb-14 text-center"
          data-aos="fade-up"
        >
          Explore Our Rooms
        </h2>

        <div className="space-y-14">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className={`flex flex-col md:flex-row bg-white rounded-2xl shadow-xl hover:shadow-2xl transition overflow-hidden ${
                room.status === "Booked" ? "opacity-60" : ""
              }`}
              data-aos="fade-up"
            >
              {/* Room Image */}
              <div className="md:w-1/2 w-full relative group">
                <img
                  src={room.images[0]}
                  alt={room.title}
                  className="w-full h-72 md:h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                  {room.status}
                </span>
              </div>

              {/* Room Content */}
              <div className="p-8 md:w-1/2 flex flex-col justify-between" data-aos="fade-left">
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {index + 1}: {room.title}
                  </h3>

                  {/* Features */}
                  <ul className="grid grid-cols-2 gap-3 text-gray-600 text-sm">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        {feature.includes("WiFi") && <Wifi size={16} />}
                        {feature.includes("Bed") && <BedDouble size={16} />}
                        {feature.includes("TV") && <Tv size={16} />}
                        {feature.includes("Air") && <Wind size={16} />}
                        {feature.includes("Shower") && <Bath size={16} />}
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price + Button */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6">
                    <p className="text-2xl font-bold text-indigo-600">
                      ${room.price}{" "}
                      <span className="text-base text-gray-500">/ night</span>
                    </p>
                    {room.status === "Available" ? (
                      <Link
                        to="/book"
                        className="mt-3 sm:mt-0 px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:scale-105 transition inline-block text-center"
                        data-aos="zoom-in"
                      >
                        Book Now
                      </Link>
                    ) : (
                      <span className="mt-3 sm:mt-0 px-6 py-2 rounded-xl bg-red-500/80 text-white font-medium opacity-80 cursor-not-allowed">
                        Occupied
                      </span>
                    )}
                  </div>
                </div>

                {/* Room Detail Link */}
                <div className="mt-6" data-aos="fade-right">
                  <Link
                    to={`/rooms/${room.id}`}
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Room;
