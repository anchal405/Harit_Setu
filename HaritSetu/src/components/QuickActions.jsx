import { useState } from 'react';
import { Link } from 'react-router-dom';
import card1 from '../assets/list-crop.png';
import card2 from '../assets/ai-value.png';
import card3 from '../assets/track-sales.png';

const QuickActions = () => {
  const [showPopup, setShowPopup] = useState(false);

  const actions = [
    {
      title: 'List Crop Waste | अपशिष्ट सूचीबद्ध करें',
      desc: 'Add crop waste (banana leaves, wheat husk, etc.) and get AI pricing.',
      img: card1,
      link: '/list-crop-waste',
      external: false,
    },
    {
      title: 'Know Your Value (AI) | AI से मूल्य जानें',
      desc: 'Know the market value based on crop type & region.',
      img: card2,
      link: ' https://haritsetu-frontend-price-prediction-three.vercel.app/',

      external: true,
    },
    {
      title: 'Track My Sales | मेरी बिक्री ट्रैक करें',
      desc: 'Manage your uploaded waste, check buyer interest.',
      img: card3,
      comingSoon: true,
    },
  ];

  return (
    <section className="py-12 bg-[#f4faf4] px-4 relative">
      <h2 className="text-2xl font-bold text-center mb-8">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {actions.map((action, index) => {
          const CardContent = (
            <div
              className="bg-green-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 text-center cursor-pointer"
              onClick={() => {
                if (action.comingSoon) {
                  setShowPopup(true);
                }
              }}
            >
              <img
                src={action.img}
                alt={action.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-green-900">
                {action.title}
              </h3>
              <p className="text-sm text-gray-700 mt-2">{action.desc}</p>
            </div>
          );

          if (action.comingSoon) {
            return <div key={index}>{CardContent}</div>;
          } else if (action.external) {
            return (
              <a
                href={action.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                {CardContent}
              </a>
            );
          } else if (action.link) {
            return (
              <Link
                to={action.link}
                key={index}
              >
                {CardContent}
              </Link>
            );
          } else {
            return <div key={index}>{CardContent}</div>;
          }
        })}
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white px-8 py-6 rounded-lg shadow-xl text-center max-w-sm w-full">
            <h3 className="text-lg font-bold text-green-800 mb-2">
               Coming Soon!
            </h3>
            <p className="text-gray-700 mb-4">
              The "Track My Sales" feature will be available soon.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default QuickActions;
