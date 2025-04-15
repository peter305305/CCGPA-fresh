import { useNavigate } from 'react-router-dom';

export default function SetTimes() {
  const navigate = useNavigate();

  return (
    <div className="p-6 animate-fade text-center">
      <h1 className="text-3xl font-bold mb-6">🎶 Set Times</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          onClick={() => navigate('/set-times/friday')}
          className="cursor-pointer border p-6 rounded-xl shadow text-xl font-bold hover:shadow-lg hover:scale-105 transition-transform"
        >
          Friday
        </div>
        <div
          onClick={() => navigate('/set-times/saturday')}
          className="cursor-pointer border p-6 rounded-xl shadow text-xl font-bold hover:shadow-lg hover:scale-105 transition-transform"
        >
          Saturday
        </div>
        <div
          onClick={() => navigate('/set-times/sunday')}
          className="cursor-pointer border p-6 rounded-xl shadow text-xl font-bold hover:shadow-lg hover:scale-105 transition-transform"
        >
          Sunday
        </div>
      </div>
    </div>
  );
}
