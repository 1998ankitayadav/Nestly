import CategoryCard from "../home/CategoryCard";
import { categories } from "../../data/categories";

const CategoryGrid = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          isActive={selectedCategory === category.slug}
          onClick={setSelectedCategory}
        />
      ))}
    </div>
  );
};

export default CategoryGrid;