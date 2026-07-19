export default function Card({ title, description, children }) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white m-2">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <p className="mb-2">{description}</p>
      {children}
    </div>
  );
}
