// Coachella Guest Portal (React + TailwindCSS)
// Includes: Landing Page, Guest Dashboard, Admin Controls (basic)

import { useState } from "react";

const guestData = {
  "sarah": {
    name: "Sarah Thompson",
    room: "Bedroom 3, Queen bed",
    arrival: "April 18",
    departure: "April 21"
  },
  "alex": {
    name: "Alex Rivera",
    room: "Bedroom 1, King bed",
    arrival: "April 18",
    departure: "April 22"
  },
  "test": {
    name: "TEST",
    room: "Test Room",
    arrival: "April 18",
    departure: "April 21"
  }
};

export default function GuestPortal() {
  const [nameInput, setNameInput] = useState("");
  const [guest, setGuest] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = () => {
    const key = nameInput.toLowerCase().trim();
    if (key === "admin") {
      setIsAdmin(true);
    } else if (guestData[key]) {
      setGuest(guestData[key]);
    } else {
      alert("Guest not found. Please try again.");
    }
  };

  if (isAdmin) {
    return (
      <div className="max-w-3xl mx-auto mt-12">
        <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
        <h2 className="text-xl font-semibold mb-2">Edit Guest List</h2>
        <textarea
          rows="10"
          className="w-full border p-2 rounded text-sm font-mono"
          defaultValue={JSON.stringify(guestData, null, 2)}
          onBlur={(e) => {
            try {
              const updated = JSON.parse(e.target.value);
              alert('Guest list updated (demo only).');
              // In real use, update guestData via backend or context
            } catch {
              alert('Invalid JSON');
            }
          }}
        ></textarea>
      </div>
    );
  }

  if (!guest) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md border p-6 rounded-xl shadow-xl bg-white bg-opacity-90 transition-all animate-fade-in sm:mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-center">Welcome to Coachella 🌴</h2>
          <input
            placeholder="Enter your first name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            className="w-full mb-4 border p-2 rounded"
          />
          <button className="w-full bg-black text-white py-2 rounded" onClick={handleLogin}>Enter</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <nav className="bg-black text-white px-4 py-3 mb-4 flex flex-col sm:flex-row sm:justify-between items-center space-y-2 sm:space-y-0">
        <div className="font-bold text-lg">Coachella Portal</div>
        <div className="space-x-4 text-sm flex flex-wrap justify-center">
          <a href="/" className="hover:underline">Home</a>
          <a href="/house-info" className="hover:underline">House Info</a>
          <a href="/weather" className="hover:underline">Weather</a>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto mt-4 px-4 transition-opacity animate-fade-in">
        <h1 className="text-2xl font-bold mb-2">Hi {guest.name}! 👋</h1>
        <p className="mb-6">Welcome to Coachella Weekend Two – April 18–21!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border p-4 rounded-xl shadow">
            <h2 className="font-bold mb-2">🏠 <a href="https://www.google.com/maps/place/1+St.+Petersburg+Court,+Rancho+Mirage,+CA+92270" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">House Info</a></h2>
          </div>
          <div className="border p-4 rounded-xl shadow">
            <h2 className="font-bold mb-2">🛏 Your Room</h2>
            <p>{guest.room}<br />Arrival: {guest.arrival}<br />Departure: {guest.departure}</p>
          </div>
          <div className="border p-4 rounded-xl shadow">
            <h2 className="font-bold mb-2">🧼 Services</h2>
            <p>Laundry: Ask Yasemin<br />Cleaning Hours: 3–7 PM</p>
          </div>
          <div className="border p-4 rounded-xl shadow">
            <h2 className="font-bold mb-2">🍳 Food</h2>
            <p>Brunch: 10 AM – 1 PM<br />Late-Night: 1–3 AM</p>
          </div>
          <div className="border p-4 rounded-xl shadow">
            <h2 className="font-bold mb-2">🚐 Transport</h2>
            <p>Party Bus: 3 PM<br />Private Car: <a href="sms:+17867422111" className="text-blue-600 underline">Text Yasemin</a> 1hr ahead</p>
          </div>
          <div className="border p-4 rounded-xl shadow">
            <h2 className="font-bold mb-2">☀️ <a href="/weather" className="text-blue-600 underline">Weather</a></h2>
            <p>Day 1: 86°F / 64°F<br />Day 2: 89°F / 65°F<br />Day 3: 90°F / 66°F</p>
          </div>
          <div className="border p-4 rounded-xl shadow col-span-full">
            <h2 className="font-bold mb-2">📲 Contact</h2>
            <p>Yasemin Kahveci<br />Text/Call: (786) 742-2111</p>
          </div>
        </div>
      </div>
    </>
  );
}
