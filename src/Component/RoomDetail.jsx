import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const roomsData = [
  {
    id: 1,
    title: "Deluxe Room",
    images: ["/1.jpg", "/2.jpg", "/3.jpg"],
    description:
      "Our Deluxe Room offers a comfortable king-size bed, city view, modern decor, and all essential amenities for a relaxing stay.",
    features: ["King Bed", "Free WiFi", "Air Conditioning", "City View"],
    price: 120,
    status: "Available",
    location: "New Delhi, India",
  },
  {
    id: 2,
    title: "Executive Suite",
    images: ["/2.jpg", "/3.jpg", "/4.jpg"],
    description:
      "Perfect for families or business travelers, the Executive Suite features two queen beds, a minibar, and breathtaking ocean views.",
    features: ["2 Queen Beds", "Mini Bar", "Smart TV", "Ocean View"],
    price: 250,
    status: "Booked",
    location: "Mumbai, India",
  },
  {
    id: 3,
    title: "Standard Room",
    images: ["/3.jpg", "/4.jpg", "/5.jpg"],
    description:
      "A cozy and affordable option with a double bed, hot shower, and room service. Perfect for solo travelers or couples.",
    features: ["1 Double Bed", "Hot Shower", "Wardrobe", "Room Service"],
    price: 80,
    status: "Available",
    location: "Goa, India",
  },
];

const RoomDetail = () => {
  const { id } = useParams();
  const room = roomsData.find((r) => r.id === parseInt(id));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  if (!room) {
    return (
      <div className="text-center py-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-red-500">Room Not Found</h2>
        <Link to="/rooms" className="text-blue-600 underline mt-4 block">
          ← Back to Rooms
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Title + Price */}
      <div
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2"
        data-aos="fade-down"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          {room.title}
        </h1>
        <p className="text-2xl font-semibold text-blue-600 mt-4 md:mt-0">
          ${room.price} / night
        </p>
      </div>
      <p className="text-gray-500 italic mb-8" data-aos="fade-up">
        Stay secured — pay only when you check in
      </p>

      {/* Image Gallery */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
        data-aos="zoom-in-up"
      >
        {room.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${room.title} ${i + 1}`}
            className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition"
          />
        ))}
      </div>

      {/* Description + Booking */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left: Content */}
        <div className="md:w-2/3" data-aos="fade-right">
          <h2 className="text-2xl font-semibold mb-4">About this room</h2>
          <p className="text-gray-700 leading-relaxed mb-6">{room.description}</p>

          <h3 className="text-xl font-semibold mb-3">Features</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-600">
            {room.features.map((feature, i) => (
              <li key={i}>✔ {feature}</li>
            ))}
          </ul>
        </div>

        {/* Right: Booking Card */}
        <div
          className="md:w-1/3 bg-white rounded-xl shadow-lg p-6 sticky top-20 h-fit"
          data-aos="fade-left"
        >
          <h3 className="text-lg font-bold mb-4">Booking Info</h3>
          <p className="mb-2">
            Status:{" "}
            <span
              className={`font-medium ${
                room.status === "Available" ? "text-green-600" : "text-red-600"
              }`}
            >
              {room.status}
            </span>
          </p>
          <p className="mb-4">Location: {room.location}</p>

          {room.status === "Available" ? (
            <Link
              to="/book"
              className="block text-center w-full px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              data-aos="zoom-in"
            >
              Book Now
            </Link>
          ) : (
            <button
              disabled
              className="w-full px-6 py-3 rounded-lg bg-gray-400 opacity-60 text-white font-medium cursor-not-allowed"
            >
              Occupied
            </button>
          )}
        </div>
      </div>

      {/* Map */}
      <div className="mt-12" data-aos="fade-up">
        <h3 className="text-xl font-semibold mb-4">Location</h3>
        <iframe
  title="Red Deer, AB, Canada"
  src="https://maps.google.com/maps?q=52.2690,-113.8115&z=13&output=embed"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowfullscreen
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
      </div>
    </section>
  );
};

export default RoomDetail;
