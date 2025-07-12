import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hero from "../assets/auth-hero.jpg";

const AuthPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-2">
          Welcome to HaritSetu
        </h1>
        <p className="text-md text-gray-600 text-center mb-6">
          Sell smart, Stay Green – No Smoke in between
        </p>

        <img
          src={hero}
          alt="HaritSetu Auth Hero"
          className="rounded-xl shadow-lg w-full max-w-xl mb-8"
        />

        {/* Already Registered */}
        <p className="mb-2 text-gray-700">Already registered?</p>
        <Link to="/login">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold mb-6 transition">
            Login
          </button>
        </Link>

        {/* New Users */}
        <p className="mb-2 text-gray-700">New to HaritSetu?</p>
        <Link to="/signup">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition">
            Sign Up
          </button>
        </Link>

        {/* Tagline */}
        <p className="text-xs text-gray-500 mt-8 max-w-md text-center">
          By Joining HaritSetu: You are preventing 92M tons of crop from burning annually,
          saving 23M tons of CO₂.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default AuthPage;
