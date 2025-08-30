import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // WhatsApp Number (without +)
  const whatsappNumber = "919876543210"; // यहाँ अपना असली नंबर डालो

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(form.email)) {
      alert("⚠️ Please enter a valid email address!");
      return;
    }

    const text = `Hello, my name is ${form.name}.
My email is ${form.email}.
Message: ${form.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="mt-5 min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6">
      {/* Heading */}
      <h1
        className="text-4xl font-bold text-gray-800 mb-4"
        data-aos="fade-down"
      >
        Contact Us
      </h1>
      <p
        className="text-lg text-gray-600 mb-10 text-center max-w-xl"
        data-aos="fade-up"
      >
        Have questions or want to book a room? Get in touch with us – we’d love
        to hear from you.
      </p>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Left Section - Form + Info */}
        <div
          className="bg-white shadow-lg rounded-2xl p-8"
          data-aos="fade-right"
        >
          {/* Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              data-aos="zoom-in"
            >
              Send via WhatsApp
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-10 space-y-6" data-aos="fade-up">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">📍 Address</h2>
              <p className="text-gray-600 mt-2">
                123 Hotel Street, New Delhi, India
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">📞 Phone</h2>
              <p className="text-gray-600 mt-2">+91 98765 43210</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">📧 Email</h2>
              <p className="text-gray-600 mt-2">Demo@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Section - Google Map */}
        <div
          className="rounded-2xl overflow-hidden shadow-lg h-[600px]"
          data-aos="fade-left"
        >
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
      </div>
    </div>
  );
};

export default Contact;
