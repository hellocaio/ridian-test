export default function FilterButton({
  children,
  onClick = () => {},
  isActive = false,
  className = "",
}) {
  let buttonClass =
    "py-1 px-4 md:py-2  text-sm rounded-lg md:rounded-xl hover:cursor-pointer mr-4 last:mr-0";
  if (isActive) buttonClass += " text-pink-100 bg-primary-500";
  else buttonClass += " text-gray-normal-200 bg-gray-darkest-200";
  buttonClass += ` ${className}`;

  return (
    <div className={buttonClass} onClick={() => onClick()}>
      {children}
    </div>
  );
}
