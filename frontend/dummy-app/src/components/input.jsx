export default function Input({
  id,
  value,
  className = "",
  onChange,
  placeholder,
  ...props
}) {
  return (
    <input
      id={id}
      className={`border-4 bg-gray-lightest-300 text-gray-darkest-300 text-sm rounded-lg border-gray-light-300 focus:border-primary-600 block w-full p-2.5 outline-none ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      {...props}
    />
  );
}
