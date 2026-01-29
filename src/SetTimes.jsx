import { useNavigate } from 'react-router-dom';

export default function SetTimes() {
  const navigate = useNavigate();

  return (
    <div className="page-shell animate-fade">
      <div className="page-container text-center">
        <div className="mb-8">
          <div className="mb-4 flex justify-center">
            <button className="ghost-button" onClick={() => navigate('/dashboard')}>
              ← Back to dashboard
            </button>
          </div>
          <h1 className="page-title">🎶 Set Times</h1>
          <p className="page-subtitle">Pick a day to see the latest lineup.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div
            onClick={() => navigate('/set-times/friday')}
            className="card-interactive cursor-pointer px-6 py-8 text-xl font-semibold"
          >
            Friday
          </div>
          <div
            onClick={() => navigate('/set-times/saturday')}
            className="card-interactive cursor-pointer px-6 py-8 text-xl font-semibold"
          >
            Saturday
          </div>
          <div
            onClick={() => navigate('/set-times/sunday')}
            className="card-interactive cursor-pointer px-6 py-8 text-xl font-semibold"
          >
            Sunday
          </div>
        </div>
      </div>
    </div>
  );
}
