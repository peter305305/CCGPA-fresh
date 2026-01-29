import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg"
];

export default function HouseInfo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-shell animate-fade">
      <div className="page-container">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <button className="ghost-button" onClick={() => navigate('/dashboard')}>
              ← Back to dashboard
            </button>
          </div>
          <h1 className="page-title">🏠 House Info</h1>
          <p className="page-subtitle">Tap the address for directions and explore the gallery.</p>
        </div>

        <div className="card mb-6 p-5 text-center">
          <a
            href="https://www.google.com/maps/place/1+St.+Petersburg+Court,+Rancho+Mirage,+CA+92270"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold text-glow-300 underline sm:text-lg"
          >
            1 St. Petersburg Court, Rancho Mirage, CA 92270
          </a>
        </div>

        <div className="card mb-8 overflow-hidden">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=1%20St.%20Petersburg%20Court,%20Rancho%20Mirage,%20CA%2092270&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="320"
            className="w-full"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <div className="card mx-auto max-w-3xl overflow-hidden">
          <img
            src={images[currentIndex]}
            alt={`Gallery ${currentIndex + 1}`}
            className="h-80 w-full object-cover transition-all duration-700"
          />
        </div>
      </div>
    </div>
  );
}
