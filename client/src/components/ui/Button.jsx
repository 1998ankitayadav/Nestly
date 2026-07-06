const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-medium transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;