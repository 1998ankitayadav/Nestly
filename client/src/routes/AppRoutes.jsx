import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Splash from "../pages/Splash";
import Onboarding from "../pages/Onboarding";
import Home from "../pages/Home";
import Categories from "../pages/Categories";

const AppRoutes = () => {
  return (
    <Routes>
      
      {/* NO layout screens */}
      <Route path="/" element={<Splash />} />
      <Route path="/onboarding" element={<Onboarding />} />

      {/* Layout wrapped screens */}
      <Route
        path="/home"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      <Route
        path="/categories"
        element={
          <MainLayout>
            <Categories />
          </MainLayout>
        }
      />

    </Routes>
  );
};

export default AppRoutes;