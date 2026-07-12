import { useState } from "react";
import { combos } from "../data/combos";
import SearchBar from "../components/ui/SearchBar";
import Container from "../components/ui/Container";
import HeroSection from "../components/home/HeroSection";
import CategorySection from "../components/home/CategorySection";
import SmartComboSection from "../components/home/SmartComboSection";
import CategoryCard from "../components/home/CategoryCard";


const Home = () => {
const [selectedCategory, setSelectedCategory] = useState("all");
const filteredCombos =
  selectedCategory === "all"
    ? combos
    : combos.filter(
        (combo) => combo.category === selectedCategory
      );
const [searchTerm, setSearchTerm] = useState("");

return (
  <Container>
    <div className="space-y-6 py-6">
      <HeroSection />
       <SearchBar
  value={searchTerm}
  onChange={setSearchTerm}
  placeholder="Search Smart Combos..."
/>
      <CategorySection
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

export default Home;