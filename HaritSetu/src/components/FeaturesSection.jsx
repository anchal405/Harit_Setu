
import waste from "/src/assets/features/waste.jpg";
import aiPrice from "/src/assets/features/ai-price.jpg";
import buyerMap from "/src/assets/features/buyer-map.jpg";
import tutorial from "/src/assets/features/tutorial.jpg";

const features = [
  {
    title: "Waste Listing",
    image: waste,
    bg: "bg-green-200",
  },
  {
    title: "AI-based Price Prediction",
    image: aiPrice,
    bg: "bg-lime-200",
  },
  {
    title: "Nearby Buyer Map",
    image: buyerMap,
    bg: "bg-emerald-100",
  },
  {
    title: "Step-by-step Videos",
    image: tutorial,
    bg: "bg-teal-100",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 bg-green-100">
      <h2 className="text-3xl md:text-4xl font-bold text-green-900 text-center mb-12">
        What can you do in HaritSetu?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${feature.bg} rounded-2xl p-5 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1`}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="rounded-xl mb-5 h-40 w-full object-cover"
            />
            <h3 className="text-lg font-semibold text-green-900 text-center">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
