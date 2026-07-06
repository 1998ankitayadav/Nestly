import { useState } from "react";
import { combos } from "../data/combos";

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

//   return (
//     <div className="space-y-6">

//       {/* HERO SECTION */}
//       <div className="bg-green-600 text-white p-6 rounded-xl">
//         <h1 className="text-2xl font-bold">
//           Welcome to Nestly
//         </h1>

//         <p className="text-sm mt-2 opacity-90">
//           Your Home. Your Essentials. Delivered Intelligently.
//         </p>
//       </div>

//       {/* SMART COMBOS SECTION */}
//       <div>
       
//          <SectionHeading title="Smart Combos" />
//         <div className="grid gap-3">
         
//           {filteredCombos.map((combo) => (
//   <ComboCard key={combo.id} combo={combo} />
// ))}
//         </div>
//       </div>

//       {/* CATEGORY PREVIEW */}
//       <div>
     
//         <SectionHeading title="Categories" />

//         <div className="flex gap-3 overflow-x-auto">
      
//           <div className="flex gap-3 overflow-x-auto pb-2">
//   <CategoryCard
//     category={{
//       name: "All",
//       icon: "✨",
//       slug: "all",
//     }}
//     isActive={selectedCategory === "all"}
//     onClick={setSelectedCategory}
//   />

//   {categories.map((category) => (
//     <CategoryCard
//       key={category.id}
//       category={category}
//       isActive={selectedCategory === category.slug}
//       onClick={setSelectedCategory}
//     />
//   ))}
// </div>
//         </div>
//       </div>

//     </div>
//   );
return (
  <Container>
    <div className="space-y-6 py-6">
      <HeroSection />

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