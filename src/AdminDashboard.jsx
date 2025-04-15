import { useEffect, useState } from 'react';
import { db } from './firebase';
import {
  collection,
  getDocs,
  setDoc,
  doc
} from 'firebase/firestore';

export default function AdminDashboard() {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGuests() {
      const snapshot = await getDocs(collection(db, 'guests'));
      const guests = {};
      snapshot.forEach(doc => {
        guests[doc.id] = doc.data();
      });
      setData(JSON.stringify(guests, null, 2));
      setLoading(false);
    }
    fetchGuests();
  }, []);

  const handleSave = async () => {
    try {
      const parsed = JSON.parse(data);
      for (const key in parsed) {
        await setDoc(doc(db, 'guests', key), parsed[key]);
      }
      alert('✅ Guest data saved to Firebase!');
    } catch (e) {
      alert('❌ Invalid JSON format or Firebase error.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 animate-fade">
      <h1 className="text-3xl font-bold mb-4">🛠️ Admin Dashboard</h1>
      {loading ? (
        <p>Loading guest data...</p>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}