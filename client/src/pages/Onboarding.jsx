import { useState } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Smart Grocery Shopping",
    desc: "Get essentials delivered intelligently using Smart Combos",
  },
  {
    title: "Save Time & Money",
    desc: "No need to search products one by one",
  },
  {
    title: "Built for Your Lifestyle",
    desc: "Hostel, Family, or Personal — we’ve got combos for you",
  },
];

const Onboarding = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      navigate("/home");
    }
  };

  const skip = () => {
    navigate("/home");
  };

  return (
    <div className="h-screen flex flex-col justify-between bg-[#F8FAFC] px-6 py-10">

      {/* Skip Button */}
      <div className="flex justify-end">
        <button
          onClick={skip}
          className="text-sm text-gray-500"
        >
          Skip
        </button>
      </div>

      {/* Content */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-green-600">
          {slides[current].title}
        </h1>

        <p className="mt-4 text-gray-500">
          {slides[current].desc}
        </p>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === current ? "bg-green-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Button */}
      <button
        onClick={nextSlide}
        className="bg-green-600 text-white py-3 rounded-xl font-medium"
      >
        {current === slides.length - 1 ? "Get Started" : "Next"}
      </button>

    </div>
  );
};

export default Onboarding;