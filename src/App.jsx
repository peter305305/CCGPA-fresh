import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import GuestDashboard from './GuestDashboard';
import Weather from './Weather';
import HouseInfo from './HouseInfo';

const guestData = {
  sarah: { name: "Sarah", room: "Bedroom 3", arrival: "Apr 18", departure: "Apr 21" },
  alex: { name: "Alex", room: "Bedroom 1", arrival: "Apr 18", departure: "Apr 22" },
  test: { name: "TEST", room: "Test Room", arrival: "Apr 18", departure: "Apr 21" }
};

function Landing({ setGuest }) {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  function handleLogin() {
    const name = input.toLowerCase().trim();
    if (guestData[name]) {
      setGuest(guestData[name]);
      navigate("/dashboard");
    } else {
      alert("Guest not found.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 animate-fade">
      <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-xl max-w-sm w-full text-center">
        <h1 className="text-2xl font-semibold mb-4">Welcome to Coachella 🌴</h1>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your name"
          className="border p-2 w-full rounded mb-4"
        />
        <button className="bg-black text-white py-2 px-4 rounded w-full" onClick={handleLogin}>
          Enter
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [guest, setGuest] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing setGuest={setGuest} />} />
        <Route path="/dashboard" element={<GuestDashboard guest={guest} />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/house-info" element={<HouseInfo />} />
      </Routes>
    </Router>
  );
}
