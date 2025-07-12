import { motion } from 'framer-motion';
import { FaRegCommentDots } from 'react-icons/fa';

const NeedHelpSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#f4faf4] px-4 py-8"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-lg text-center md:text-left text-gray-800">
          🌱 <b>By using HaritSetu</b>, you help reduce <b>92M tons</b> of crop
          waste burning and save <b>23M tons</b> of CO₂ every year. <br />
          <span className="text-sm text-gray-600">
            हरितसेतु का उपयोग करके, आप 92 मिलियन टन फसल अपशिष्ट जलाने को कम करने
            और हर साल 23 मिलियन टन CO₂ की बचत करते हैं।
          </span>
        </p>

        <a
          href="https://harit-setu-chatbot.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-green-400 hover:bg-green-500 transition text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 shadow-md">
            <FaRegCommentDots size={20} />
            Need Help? | सहायता चाहिए?
          </button>
        </a>
      </div>
    </motion.section>
  );
};

export default NeedHelpSection;
