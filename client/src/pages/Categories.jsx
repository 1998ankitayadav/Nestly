import { useState } from "react";
import { combos } from "../data/combos";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";

import CategoryGrid from "../components/categories/CategoryGrid";
import SmartComboSection from "../components/home/SmartComboSection";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCombos =
    selectedCategory === "all"
      ? combos
      : combos.filter(
          (combo) => combo.category === selectedCategory
        );

  return (
    <Container>
      <div className="space-y-8 py-6">

        <SectionHeading title="Browse Categories" />

        <CategoryGrid
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <SmartComboSection
          filteredCombos={filteredCombos}
        />

      </div>
    </Container>
  );
};

export default Categories;