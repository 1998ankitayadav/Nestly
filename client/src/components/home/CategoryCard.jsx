const CategoryCard = ({ category, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(category.slug)}
      className={`flex flex-col items-center justify-center rounded-xl p-4 min-w-[100px] transition-all duration-300
      ${
        isActive
          ? "bg-green-600 text-white"
          : "bg-white border hover:border-green-600"
      }`}
    >
      <span className="text-3xl">{category.icon}</span>

      <span className="mt-2 text-sm font-medium">
        {category.name}
      </span>
    </button>
  );
};

export default CategoryCard;