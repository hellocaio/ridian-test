export default function Box({ children, className = "" }) {
  return (
    <div
      className={`bg-gray-darkest-300 p-4 rounded-lg border border-gray-dark-300 border-solid ${className}`}
    >
      <div className="h-full">{children}</div>
    </div>
  );
}
