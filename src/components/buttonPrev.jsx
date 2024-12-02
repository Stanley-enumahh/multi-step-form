export default function ButtonPrev({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="font-semibold hover:text-sm w-[100px] hover:font-bold transition-all duration-150 hover:text-blue-900 text-gray-700 text-xs"
    >
      {children}
    </button>
  );
}
