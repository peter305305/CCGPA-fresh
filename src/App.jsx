import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import GuestDashboard from './GuestDashboard';
import AdminDashboard from './AdminDashboard';
import Weather from './Weather';
import HouseInfo from './HouseInfo';
import SetTimes from './SetTimes';
import SetTimesImage from './SetTimesImage'; // 🔥 import the new page for each day's image

function Landing({ setUser, setIsAdmin }) {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  function handleLogin() {
    const name = input.toLowerCase().trim();

    if (name === 'admin') {
      setIsAdmin(true);
      navigate('/admin');
    } else {
      // ✅ Trust Firestore guest key
      setUser({ key: name });
      navigate('/dashboard');
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
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing setUser={setUser} setIsAdmin={setIsAdmin} />} />
        <Route path="/dashboard" element={<GuestDashboard guest={user} />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/house-info" element={<HouseInfo />} />
        <Route path="/set-times" element={<SetTimes />} /> {/* ✅ New route for set times overview */}
        <Route path="/set-times/:day" element={<SetTimesImage />} /> {/* ✅ Dynamic image page */}
      </Routes>
    </Router>
  );
}
