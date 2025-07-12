import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lottie from "lottie-react";
import animationData from "../assets/plant.json";

const AboutUs = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* About Section */}
      <div className="flex-grow py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
          🌾 About Us
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          {/* Left Text */}
          <div className="md:w-1/3 flex items-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We are building a smart, sustainable platform that helps farmers earn by selling their crop residue — like husk, straw, and banana leaves — instead of burning it.
            </p>
          </div>

          {/* Lottie Animation */}
          <div className="md:w-1/3 flex justify-center items-center">
            <div className="w-48 md:w-60">
              <Lottie animationData={animationData} loop={true} />
            </div>
          </div>

          {/* Right Text */}
          <div className="md:w-1/3 flex items-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              By connecting rural suppliers with potential buyers, we aim to reduce air pollution, create rural income opportunities, and build a circular economy in agriculture. Our goal is simple: turn waste into value, and empower those who feed the nation.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
