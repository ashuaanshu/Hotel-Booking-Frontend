import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BookNow = () => {
  const [primaryGuestName, setPrimaryGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [idType, setIdType] = useState("DL");
  const [customIdName, setCustomIdName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [guests, setGuests] = useState([{ name: "", age: "" }]);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [cardError, setCardError] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(value) ? "" : "Please enter a valid email.");
  };

  const validatePhone = (value) => {
    const indiaRegex = /^[6-9]\d{9}$/;
    const usRegex = /^\+1\d{10}$/;
    const ukRegex = /^\+44\d{10}$/;
    setError(
      value && !(indiaRegex.test(value) || usRegex.test(value) || ukRegex.test(value))
        ? "Enter valid phone (+91, +1, +44)"
        : ""
    );
  };

  const validateCardNumber = (value) => {
    const cardRegex = /^\d{16}$/;
    setCardError(!cardRegex.test(value) ? "Card must be 16 digits." : "");
  };

  const handleAddGuest = () => setGuests([...guests, { name: "", age: "" }]);
  const handleRemoveGuest = (i) => setGuests(guests.filter((_, idx) => idx !== i));
  const handleGuestChange = (i, field, value) => {
    const updated = [...guests];
    updated[i][field] = value;
    setGuests(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(email);
    validatePhone(phone);
    validateCardNumber(cardNumber);

    if (guests.some((g) => parseInt(g.age) < 18)) {
      setBookingMessage("All guests must be 18+.");
      return;
    }
    if (error || emailError || cardError) {
      setBookingMessage("Fix errors before submitting.");
      return;
    }

    console.log({
      primaryGuestName,
      email,
      phone,
      checkInDate,
      checkOutDate,
      checkInTime,
      cardNumber,
      cardExpiry,
      cardCvv,
      idType: idType === "Other" ? customIdName : idType,
      idNumber,
      guests,
    });
    setBookingMessage("🎉 Booking Confirmed!");
  };

  return (
    <div className="mt-5 min-h-screen bg-slate-900 flex justify-center items-center p-4">
      <div
        className="bg-white shadow-xl rounded-2xl p-6 md:p-8 max-w-4xl w-full"
        data-aos="fade-up"
      >
        {/* Slogan */}
        <div className="text-center mb-6 text-blue-600 font-semibold text-lg" data-aos="fade-down">
          Stay secured — pay only when you check in.
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center" data-aos="fade-down">
          Complete Your Booking
        </h2>

        {bookingMessage && (
          <div
            className={`p-3 mb-5 text-center rounded-lg font-semibold text-white ${
              bookingMessage.includes("🎉") ? "bg-green-500" : "bg-red-500"
            }`}
            data-aos="fade-in"
          >
            {bookingMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Primary Guest */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-up">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                value={primaryGuestName}
                onChange={(e) => setPrimaryGuestName(e.target.value)}
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                placeholder="name@example.com"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  validatePhone(e.target.value);
                }}
                placeholder="+91 / +1 / +44"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
          </div>

          {/* Check-in / Check-out */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos="fade-up">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Check-in Date</label>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Check-out Date</label>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Check-in Time</label>
              <input
                type="time"
                value={checkInTime}
                onChange={(e) => setCheckInTime(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          {/* Card Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos="fade-up">
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium text-gray-700">Card Number</label>
              <input
                type="text"
                placeholder="XXXX XXXX XXXX XXXX"
                value={cardNumber}
                onChange={(e) => {
                  setCardNumber(e.target.value.replace(/\s/g, ""));
                  validateCardNumber(e.target.value.replace(/\s/g, ""));
                }}
                maxLength="16"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
              {cardError && <p className="text-red-500 text-sm mt-1">{cardError}</p>}
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Expiry (MM/YY)</label>
              <input
                type="text"
                value={cardExpiry}
                onChange={(e) => setCardExpiry(e.target.value)}
                placeholder="MM/YY"
                maxLength="5"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">CVV</label>
              <input
                type="password"
                value={cardCvv}
                onChange={(e) => setCardCvv(e.target.value)}
                placeholder="CVV"
                maxLength="4"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* ID Proof */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-up">
            <div>
              <label className="block mb-1 font-medium text-gray-700">ID Type</label>
              <select
                value={idType}
                onChange={(e) => setIdType(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              >
                <option value="DL">Driver's License</option>
                <option value="Passport">Passport</option>
                <option value="HealthCard">Health Card</option>
                <option value="Other">Other</option>
              </select>
              {idType === "Other" && (
                <input
                  type="text"
                  value={customIdName}
                  onChange={(e) => setCustomIdName(e.target.value)}
                  placeholder="Enter custom ID name"
                  className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                />
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">ID Number</label>
              <input
                type="text"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                placeholder="Enter ID Number"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Additional Guests */}
          <div data-aos="fade-up">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Additional Guests</h3>
            {guests.map((guest, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-2 md:gap-4 mb-2 items-center">
                <input
                  type="text"
                  placeholder={`Guest ${i + 1} Name`}
                  value={guest.name}
                  onChange={(e) => handleGuestChange(i, "name", e.target.value)}
                  className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  placeholder="Age"
                  value={guest.age}
                  onChange={(e) => handleGuestChange(i, "age", e.target.value)}
                  className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  min="18"
                />
                {i > 0 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveGuest(i)}
                    className="text-red-500 font-bold hover:text-red-700"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddGuest}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full md:w-auto"
            >
              + Add Guest
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
            data-aos="fade-up"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNow;
