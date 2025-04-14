export default function Weather() {
  return (
    <div className="p-6 animate-fade">
      <h1 className="text-2xl font-bold mb-4">☀️ Coachella Weather</h1>
      <iframe
        title="Weather"
        src="https://forecast7.com/en/33d78n116d40/rancho-mirage/?unit=us"
        className="w-full h-96 border rounded"
      />
    </div>
  );
}
