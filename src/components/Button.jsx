export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg m-2 hover:bg-blue-700"
    >
      {text}
    </button>
  );
}
