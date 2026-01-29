import { useEffect, useState } from 'react';
import TopNav from './TopNav';

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg"
];

export default function HouseInfo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-shell animate-fade">
      <div className="page-container">
        <TopNav />
        <div className="mb-8 text-center">
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

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <div className="card p-6">
            <p className="card-header">Amenities</p>
            <h2 className="card-title">Curated for comfort</h2>
            <ul className="mt-4 space-y-2 text-sm text-indigo-100/80">
              <li>Tennis court</li>
              <li>Canoes</li>
              <li>Stand up paddleboarding</li>
              <li>Pool</li>
              <li>Beach volleyball</li>
              <li>Pickleball court</li>
              <li>Movie theater</li>
              <li>Indoor spa</li>
              <li>Sauna</li>
              <li>Billiards</li>
              <li>Air hockey</li>
              <li>Ping pong</li>
              <li>Foosball</li>
            </ul>
          </div>

          <div className="card p-6">
            <p className="card-header">House Notes</p>
            <h2 className="card-title">Quiet luxury, clear rules</h2>
            <ul className="mt-4 space-y-2 text-sm text-indigo-100/80">
              <li>Quiet hours: 2:00 AM – 8:00 AM</li>
              <li>Pool closes at 2:00 AM</li>
              <li>Keep doors locked when leaving</li>
              <li>Concierge handles all requests</li>
            </ul>
          </div>
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
