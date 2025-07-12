// src/pages/FarmerDashboard.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import FarmerNavbar from "../components/FarmerNavbar";
import VideoCard from "../components/VideoCard";
import VideoModal from "../components/VideoModal";
import QuickActions from "../components/QuickActions";
import NeedHelpSection from "../components/NeedHelpSection";
import Footer from "../components/Footer";

import farmerBanner from "../assets/farmer-dashboard-banner.jpg";

// Thumbnails
import cropWasteThumb from "../assets/crop-waste-thumbnail.png";
import priceCalcThumb from "../assets/price-calculation-thumnail.png";

// Videos
import cropWasteVid from "../assets/videos/how-to-list.mp4";
import priceCalcVid from "../assets/videos/how-price-calculated.mp4";

const FarmerDashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openModal = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setModalOpen(true);
  };

  return (
    <>
      <FarmerNavbar />

      <div className="bg-[#f4faf4] min-h-screen flex flex-col items-center px-4 py-8">
        {/* Hero Banner */}
        <motion.div
          className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg mb-6"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative h-[400px]">
            <img
              src={farmerBanner}
              alt="Farmer Welcome"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center px-4">
              <h2 className="text-white text-xl md:text-2xl font-bold">
                🌿 Welcome, Farmer! | आपका स्वागत है किसान साथी!
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Subtext */}
        <motion.div
          className="text-center space-y-2 text-gray-800 mb-10"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg font-medium">
            Let’s turn your crop waste into income. आइए फसल अपशिष्ट को कमाई में बदलें।
          </p>
          <p className="text-sm">
            You’re one step closer to sustainability and profit.
          </p>
        </motion.div>

        {/* Quick Actions with Animation */}
        <motion.div
          className="w-full max-w-5xl mb-10"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <QuickActions />
        </motion.div>

        {/* 🎥 Step-by-step video guide */}
        <motion.div
          className="w-full max-w-5xl mb-10"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            🎥 Step-by-Step Guide for Farmers | वीडियो सहायता
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            <VideoCard
              thumbnail={cropWasteThumb}
              title="How to List Crop Waste"
              onClick={() => openModal(cropWasteVid)}
            />
            <VideoCard
              thumbnail={priceCalcThumb}
              title="How Price is Calculated"
              onClick={() => openModal(priceCalcVid)}
            />
          </div>
        </motion.div>

        {/* Need Help Section with Animation */}
        <motion.div
          className="w-full max-w-5xl mb-10"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <NeedHelpSection />
        </motion.div>
      </div>

      {/* Video Modal */}
      <VideoModal
        videoSrc={modalOpen ? currentVideo : null}
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setCurrentVideo(null);
        }}
      />

      {/* Footer at end of page */}
      <Footer />
    </>
  );
};

export default FarmerDashboard;
