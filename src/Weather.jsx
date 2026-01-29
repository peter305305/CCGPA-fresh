import TopNav from './TopNav';

export default function Weather() {
  return (
    <div className="page-shell animate-fade">
      <div className="page-container">
        <TopNav />
        <div className="mb-6">
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
