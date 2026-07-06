import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-4 py-3 shadow-sm bg-white">
      
      {/* Logo */}
      <div className="text-xl font-bold text-green-600">
        Nestly
      </div>

      {/* Links */}
      <div className="flex gap-4 text-sm font-medium">
        <Link to="/" className="hover:text-green-600">
          Home
        </Link>
        <Link to="/categories" className="hover:text-green-600">
          Categories
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;