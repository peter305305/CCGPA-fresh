import { useState } from 'react';

export default function GuestDashboard({ guest }) {
  const [showServices, setShowServices] = useState(false);

  if (!guest) return <div className="p-6">Guest not found.</div>;

  return (
    <div className="p-6 animate-fade">
      <h1 className="text-2xl font-bold mb-4">Hi {guest.name}! 👋</h1>
      <p className="mb-6">Welcome to Coachella Weekend Two – April 18–21!</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          className="border p-6 rounded-xl shadow cursor-pointer text-center text-lg font-bold flex items-center justify-center h-32 hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
          onClick={() => window.location.href = "/house-info"}
        >
          🏠 House Info
        </div>

        <div className="border p-4 rounded-xl shadow hover:shadow-md transition duration-300">
          <h2 className="font-bold mb-2">🛏 Your Room</h2>
          <p>{guest.room}<br />Arrival: {guest.arrival}<br />Departure: {guest.departure}</p>
        </div>

        <div
          className="border p-6 rounded-xl shadow cursor-pointer text-center text-lg font-bold flex flex-col items-center justify-center hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
          onClick={() => setShowServices(!showServices)}
        >
          🧼 Services
          {showServices && (
            <div className="space-y-2 mt-4 text-sm font-normal w-full">
              <div className="border rounded p-2 w-full">🧺 Laundry – TBD</div>
              <div className="border rounded p-2 w-full">
                🧹 Cleaning<br />Cleaning Hours: 3 PM – 7 PM daily<br />(Please leave your room door unlocked during this window)
              </div>
              <div className="border rounded p-2 w-full">
                <a href="sms:+17867422111" className="text-blue-600 underline">📲 Need another request?</a>
              </div>
            </div>
          )}
        </div>

        <div className="border p-4 rounded-xl shadow hover:shadow-md transition duration-300">
          <h2 className="font-bold mb-2">🍳 Food</h2>
          <p>Brunch: 10 AM – 1 PM<br />Late-Night: 1–3 AM</p>
        </div>

        <div className="border p-4 rounded-xl shadow hover:shadow-md transition duration-300">
          <h2 className="font-bold mb-2">🚐 Transport</h2>
          <p>Party Bus: 3 PM<br />Private Car: <a href="sms:+17867422111" className="text-blue-600 underline">Click here!</a> 1hr ahead</p>
        </div>

        <div className="border p-4 rounded-xl shadow hover:shadow-md transition duration-300">
          <h2 className="font-bold mb-2">☀️ Weather</h2>
          <a href="https://weather.com/weather/tenday/l/92270" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Check weather forecast</a>
        </div>

        <div
          className="border p-6 rounded-xl shadow col-span-full text-center text-lg font-bold cursor-pointer flex items-center justify-center h-32 hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
          onClick={() => window.location.href = "sms:+17867422111"}
        >
          📲 Need something else?
        </div>
      </div>
    </div>
  );
}
