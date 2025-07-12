// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-green-100 shadow-md">
      <div className="text-2xl font-bold text-green-800">HaritSetu</div>

      <div className="space-x-4">
        <Link
          to="/about"
          className="text-green-800 font-medium hover:underline"
        >
          About
        </Link>
        <Link
          to="/features"
          className="text-green-800 font-medium hover:underline"
        >
          Features
        </Link>
        <Link
          to="/auth"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
