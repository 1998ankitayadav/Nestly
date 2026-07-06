import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#F8FAFC]">
      
      {/* Logo Circle */}
      <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
        <span className="text-white text-2xl font-bold">N</span>
      </div>

      {/* Brand Name */}
      <h1 className="mt-4 text-2xl font-bold text-green-600">
        Nestly
      </h1>

      {/* Tagline */}
      <p className="mt-2 text-gray-500 text-sm text-center px-6">
        Your Home. Your Essentials. Delivered Intelligently.
      </p>

    </div>
  );
};

export default Splash;