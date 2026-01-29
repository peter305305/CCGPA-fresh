import { useNavigate } from 'react-router-dom';

export default function Weather() {
  const navigate = useNavigate();
  return (
    <div className="page-shell animate-fade">
      <div className="page-container">
        <div className="mb-6">
          <div className="mb-4">
            <button className="ghost-button" onClick={() => navigate('/dashboard')}>
              ← Back to dashboard
            </button>
          </div>
          <h1 className="page-title">☀️ Coachella Weather</h1>
          <p className="page-subtitle">Live forecast to plan your weekend looks.</p>
        </div>
        <div className="card overflow-hidden">
          <iframe
            title="Weather"
            src="https://forecast7.com/en/33d78n116d40/rancho-mirage/?unit=us"
            className="h-96 w-full"
          />
        </div>
      </div>
    </div>
  );
}
