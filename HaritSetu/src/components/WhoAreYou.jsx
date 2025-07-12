import { motion } from "framer-motion";
import farmerImg from "../assets/farmer.png";
import buyerImg from "../assets/buyer.png";
import aiHelpImg from "../assets/ai-help.png";

const WhoAreYou = () => {
  const cards = [
    {
      title: "Farmer",
      desc: "Sell your waste easily",
      img: farmerImg,
      bg: "bg-green-100",
    },
    {
      title: "Buyer",
      desc: "Find affordable raw material",
      img: buyerImg,
      bg: "bg-yellow-100",
    },
    {
      title: "AI Help",
      desc: "Know your crop’s value (AI assistance for farmers)",
      img: aiHelpImg,
      bg: "bg-blue-100",
    },
  ];

  return (
    <section className="py-16 px-6 bg-[#f0fdf4] text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-12">
        Who are you?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`${card.bg} rounded-2xl shadow-md p-5 hover:shadow-2xl transition duration-300`}
          >
            <div className="aspect-[4/3] w-full mb-4 rounded-xl overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold text-green-800">{card.title}</h3>
            <p className="text-gray-700 mt-2">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhoAreYou;
