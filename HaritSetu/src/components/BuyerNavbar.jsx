import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';

const BuyerNavbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      {/* Left: Logo */}
      <div className="text-xl font-bold text-green-700">HaritSetu</div>

      {/* Right: Nav Items */}
      <div className="flex items-center gap-3 md:gap-4 text-sm md:text-base">
        {/* Price Trends Link */}
        <a
          href="https://haritsetu-frontend-price-prediction-three.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-100 text-green-700 font-semibold px-4 py-1.5 rounded-full hover:bg-green-200 transition"
        >
          Price Trends
        </a>

        {/* Need Help Link */}
        <a
          href="https://harit-setu-chatbot.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-100 text-green-700 font-semibold px-4 py-1.5 rounded-full hover:bg-green-200 transition"
        >
          Need Help?
        </a>

        {/* Notification Icon */}
        <FaBell className="text-xl text-gray-600 hover:text-green-600 cursor-pointer" />

        {/* Profile Avatar */}
        <img
          src="https://i.pravatar.cc/30?img=12"
          alt="User"
          className="w-8 h-8 rounded-full border"
        />
      </div>
    </nav>
  );
};

export default BuyerNavbar;
