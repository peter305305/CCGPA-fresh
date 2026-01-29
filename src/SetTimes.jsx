import TopNav from './TopNav';

export default function SetTimes() {
  return (
    <div className="page-shell animate-fade">
      <div className="page-container">
        <TopNav />
        <div className="mb-8 text-center">
          <h1 className="page-title">🎶 Set Times</h1>
          <p className="page-subtitle">Scroll for the full weekend lineup.</p>
        </div>
        <div className="space-y-8">
          <div className="card overflow-hidden">
            <div className="border-b border-white/10 bg-white/5 px-6 py-4 text-center">
              <h2 className="text-xl font-semibold">Friday</h2>
            </div>
            <img
              src="/friday.jpg"
              alt="Friday set times"
              className="w-full"
            />
          </div>

          <div className="card overflow-hidden">
            <div className="border-b border-white/10 bg-white/5 px-6 py-4 text-center">
              <h2 className="text-xl font-semibold">Saturday</h2>
            </div>
            <img
              src="/saturday.jpg"
              alt="Saturday set times"
              className="w-full"
            />
          </div>

          <div className="card overflow-hidden">
            <div className="border-b border-white/10 bg-white/5 px-6 py-4 text-center">
              <h2 className="text-xl font-semibold">Sunday</h2>
            </div>
            <img
              src="/sunday.jpg"
              alt="Sunday set times"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
