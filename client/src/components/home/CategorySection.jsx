import { categories } from "../../data/categories";
import CategoryCard from "./CategoryCard";
import SectionHeading from "../ui/SectionHeading";
import { Link } from "react-router-dom";

const CategorySection = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div>
      <SectionHeading title="Categories" />

      <div className="flex gap-3 overflow-x-auto pb-2">
        <CategoryCard
          category={{
            name: "All",
            icon: "✨",
            slug: "all",
          }}
          isActive={selectedCategory === "all"}
          onClick={setSelectedCategory}
        />

        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            isActive={selectedCategory === category.slug}
            onClick={setSelectedCategory}
          />
        ))}
      </div>

      {/* 👇 Add this here */}
      <div className="mt-4 flex justify-end">
        <Link
          to="/categories"
          className="text-green-600 font-medium hover:underline"
        >
          View All Categories →
        </Link>
      </div>

    </div>
  );
};

export default CategorySection;