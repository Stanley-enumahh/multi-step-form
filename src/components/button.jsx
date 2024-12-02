export default function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="rounded-md text-white py-2 text-sm w-[100px] bg-blue-900"
    >
      {children}
    </button>
  );
}
