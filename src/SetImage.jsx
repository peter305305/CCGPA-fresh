import { useParams } from 'react-router-dom';

const imageMap = {
  friday: '/friday.jpg',
  saturday: '/saturday.jpg',
  sunday: '/sunday.jpg'
};

export default function SetTimesImage() {
  const { day } = useParams();
  const imageSrc = imageMap[day];

  return (
    <div className="p-6 animate-fade text-center">
      <h1 className="text-2xl font-bold capitalize mb-4">{day} Set Times</h1>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={`${day} set times`}
          className="mx-auto max-w-full rounded-xl shadow-lg"
        />
      ) : (
        <p className="text-red-500">Set times not available for this day.</p>
      )}
    </div>
  );
}
