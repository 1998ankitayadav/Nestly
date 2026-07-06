import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Global Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="p-4">
        {children}
      </main>

    </div>
  );
};

export default MainLayout;