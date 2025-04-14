export default function HouseInfo() {
  return (
    <div className="p-6 animate-fade">
      <h1 className="text-2xl font-bold mb-4">🏠 House Info</h1>
      <p className="mb-4">1 St. Petersburg Court, Rancho Mirage, CA 92270</p>
      <a
        href="https://www.google.com/maps/place/1+St.+Petersburg+Court,+Rancho+Mirage,+CA+92270"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Open in Google Maps
      </a>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <img src="/gallery1.jpg" alt="House" className="rounded shadow" />
        {/* Add more images like /gallery2.jpg here */}
      </div>
    </div>
  );
}
