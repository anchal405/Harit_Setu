// src/components/VideoCard.jsx
import { motion } from "framer-motion";

const VideoCard = ({ thumbnail, title, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full sm:w-[300px] bg-green-100 rounded-lg shadow-md overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {thumbnail ? (
        <div className="relative">
          <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <span className="text-white text-5xl">▶</span>
          </div>
        </div>
      ) : (
        <div className="h-48 bg-green-300 flex items-center justify-center text-5xl text-white">
          ▶
        </div>
      )}
      <div className="p-3">
        <h3 className="text-lg font-semibold text-center text-gray-800">{title}</h3>
      </div>
    </motion.div>
  );
};

export default VideoCard;
