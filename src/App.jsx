import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Rooms from "./Component/Rooms";
import RoomDetail from "./Component/RoomDetail";
import About from "./Component/About";
import Contact from "./Component/Contact";
import BookNow from "./Component/Booknow";
import Footer from "./Component/Footer";

function App() {
  return (
    <Router>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetail />} /> {/* 👈 IMP */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<BookNow />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
