


import { FaBell, FaUserCircle } from 'react-icons/fa';

const FarmerNavbar = () => {
  return (
    <nav className="bg-green-100 shadow-md px-6 py-4 flex justify-between items-center">
      {/* Left: Logo */}
      <div className="text-2xl font-bold text-green-800">HaritSetu</div>

      {/* Right: Nav Items */}
      <div className="flex items-center gap-4 md:gap-6 text-green-900 text-sm">
        {/* Navigation Buttons */}
        <a
          href="https://haritsetu-frontend-price-prediction-three.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition"
        >
          AI Price Prediction
        </a>
        <a
          href="https://harit-setu-chatbot.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition"
        >
          Need Help
        </a>

        {/* Notification Icon */}
        <button className="hover:text-green-700 transition duration-200">
          <FaBell className="text-xl" />
        </button>

        {/* Profile Icon */}
        <button className="hover:text-green-700 transition duration-200">
          <FaUserCircle className="text-2xl" />
        </button>
      </div>
    </nav>
  );
};

export default FarmerNavbar;
