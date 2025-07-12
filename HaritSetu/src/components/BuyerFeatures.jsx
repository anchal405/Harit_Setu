import { useState } from 'react';
import { motion } from 'framer-motion';
import findCrop from '../assets/find-waste.jpg';
import myOrders from '../assets/my-orders.png';
import priceTrend from '../assets/price-trends.png';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const BuyerFeatures = ({ onFindCropWaste }) => {
  const [showPopup, setShowPopup] = useState(false);

  const features = [
    {
      title: 'Find Crop Waste',
      desc: 'Search available listings by crop type, region, and quantity.',
      image: findCrop,
      bg: 'bg-[#EAFBF0]',
      onClick: () => {
        if (onFindCropWaste) onFindCropWaste(); // ✅ Trigger callback
      },
    },
    {
      title: 'My Orders',
      desc: 'Track current and past orders from verified farmers.',
      image: myOrders,
      bg: 'bg-[#FFF7E6]',
      onClick: () => setShowPopup(true), // ✅ Show popup instead of navigate
    },
    {
      title: 'Price Trends',
      desc: 'View AI-based market pricing trends and history by region.',
      image: priceTrend,
      bg: 'bg-[#DFF6FD]',
      onClick: () =>
        window.open(
          'https://haritsetu-frontend-price-prediction-three.vercel.app/',
          '_blank'
        ),
    },
  ];

  return (
    <section className="w-full max-w-6xl px-4 py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className={`rounded-3xl p-6 ${feature.bg} shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center cursor-pointer`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={feature.onClick}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-[230px] h-[160px] mb-4 object-contain drop-shadow-md"
            />
            <h3 className="text-lg font-bold text-green-900 mb-1">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white px-8 py-6 rounded-lg shadow-xl text-center max-w-sm w-full">
            <h3 className="text-lg font-bold text-green-800 mb-2">
              Coming Soon!
            </h3>
            <p className="text-gray-700 mb-4">
              The "My Orders" feature will be available soon.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default BuyerFeatures;
