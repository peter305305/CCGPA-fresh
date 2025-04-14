import { useEffect, useState } from 'react';

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
    <div className="p-6 animate-fade">
      <h1 className="text-2xl font-bold text-center mb-4">🏠 House Info</h1>

      <div className="text-center mb-6">
        <a
          href="https://www.google.com/maps/place/1+St.+Petersburg+Court,+Rancho+Mirage,+CA+92270"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline text-lg"
        >
          1 St. Petersburg Court, Rancho Mirage, CA 92270
        </a>
      </div>

      <div className="mb-6">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=1%20St.%20Petersburg%20Court,%20Rancho%20Mirage,%20CA%2092270&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="300"
          className="rounded shadow"
          allowFullScreen
          loading="lazy"
        />
      </div>

      <div className="w-full max-w-2xl mx-auto">
        <img
          src={images[currentIndex]}
          alt={`Gallery ${currentIndex + 1}`}
          className="w-full h-72 object-cover rounded-xl shadow-lg transition-all duration-700"
        />
      </div>
    </div>
  );
}
