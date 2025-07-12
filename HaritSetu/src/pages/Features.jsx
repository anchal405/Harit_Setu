import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const features = [
  {
    title: "📦 Easy Listing",
    description: "Farmers can list crop residue in just 2 minutes",
  },
  {
    title: "📍 Location-based Search",
    description: "Buyers see sellers near their region",
  },
  {
    title: "💰 Waste to Wealth",
    description: "Turns unused crop waste into extra income",
  },
  {
    title: "🔒 Secure Trade",
    description: "Verified listings with transparency and trust",
  },
  {
    title: "🌱 Eco Impact",
    description: "Reduces burning & promotes sustainability",
  },
  {
    title: "📸 Visual Proof",
    description: "Listings include images of actual crop residue",
  },
];

const Features = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow py-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-green-100 dark:bg-green-800 p-4 rounded-lg shadow-sm"
            >
              <h3 className="text-base font-semibold text-green-900 dark:text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Features;
