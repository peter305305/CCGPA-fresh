import { useState } from 'react';

export default function AdminDashboard({ guests }) {
  const [data, setData] = useState(JSON.stringify(guests, null, 2));

  const handleSave = () => {
    try {
      const parsed = JSON.parse(data);
      console.log("✅ Updated guest data:", parsed);
      alert("Guest data updated! (Note: In-memory only. Add backend for persistence.)");
    } catch (e) {
      alert("Invalid JSON format.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 animate-fade">
      <h1 className="text-3xl font-bold mb-4">🛠️ Admin Dashboard</h1>
      <p className="mb-2">Edit guest list below:</p>
      <textarea
        className="w-full h-80 p-4 border rounded font-mono text-sm bg-gray-50"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <div className="mt-4 text-right">
        <button
          onClick={handleSave}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
