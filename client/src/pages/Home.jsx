import ComboCard from "../components/ComboCard";
import { combos } from "../data/combos";

const Home = () => {
  return (
    <div className="space-y-6">

      {/* HERO SECTION */}
      <div className="bg-green-600 text-white p-6 rounded-xl">
        <h1 className="text-2xl font-bold">
          Welcome to Nestly
        </h1>

        <p className="text-sm mt-2 opacity-90">
          Your Home. Your Essentials. Delivered Intelligently.
        </p>
      </div>

      {/* SMART COMBOS SECTION */}
      <div>
        <h2 className="text-xl font-bold mb-3">
          Smart Combos
        </h2>

        <div className="grid gap-3">
          {combos.map((combo) => (
            <ComboCard key={combo.id} combo={combo} />
          ))}
        </div>
      </div>

      {/* CATEGORY PREVIEW */}
      <div>
        <h2 className="text-xl font-bold mb-3">
          Categories
        </h2>

        <div className="flex gap-3 overflow-x-auto">
          <div className="min-w-[100px] bg-gray-100 p-3 rounded-lg text-center">
            Food
          </div>
          <div className="min-w-[100px] bg-gray-100 p-3 rounded-lg text-center">
            Cleaning
          </div>
          <div className="min-w-[100px] bg-gray-100 p-3 rounded-lg text-center">
            Essentials
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;