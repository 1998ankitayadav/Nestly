import ComboCard from "./ComboCard";
import SectionHeading from "../ui/SectionHeading";

const SmartComboSection = ({ filteredCombos }) => {
  return (
    <div>
      <SectionHeading title="Smart Combos" />

      <div className="grid gap-3">
        {filteredCombos.map((combo) => (
          <ComboCard key={combo.id} combo={combo} />
        ))}
      </div>
    </div>
  );
};

export default SmartComboSection;