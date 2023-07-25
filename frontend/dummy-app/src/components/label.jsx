export default function Label({ children, className = "", ...props }) {
  return (
    <label
      class={`block mb-2 text-sm font-medium text-gray-normal-300 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}
