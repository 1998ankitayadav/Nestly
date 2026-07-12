const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <div className="w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full
          rounded-xl
          border
          border-gray-300
          px-4
          py-3
          outline-none
          focus:border-green-600
          transition-all
        "
      />
    </div>
  );
};

export default SearchBar;