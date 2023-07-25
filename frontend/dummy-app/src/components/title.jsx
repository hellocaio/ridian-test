export default function Tittle({ children, className = "" }) {
  return (
    <h2 className={`text-xl text-gray-light-300 mb-8 ${className}`}>
      {children}
    </h2>
  );
}
