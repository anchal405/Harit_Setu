
import bgImage from "../assets/leaves.jpg";

const OrderImpactBanner = () => {
  const handleLearnMore = () => {
    window.open("https://www.drishtiias.com/current-affairs-news-analysis-editorials/news-editorials/2023-11-10?utm_source=chatgpt.com");
  };

  return (
    <div
      className="relative w-full max-w-5xl mx-auto my-10 rounded-xl overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "320px",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white text-center px-4">
        <h2 className="text-xl md:text-3xl font-extrabold leading-snug drop-shadow-md">
          Each order you place helps prevent <br />
          <span className="text-2xl md:text-4xl font-bold text-white">
            92M tons of crop waste burning
          </span>{" "}
          and
          <br />
          <span className="text-2xl md:text-4xl font-bold text-white">
            23M tons of CO₂ emissions annually.
          </span>
        </h2>
        <button
          onClick={handleLearnMore}
          className="mt-6 bg-[#dff6e6] hover:bg-[#b8eec8] text-black font-semibold py-2 px-5 rounded-full shadow-md transition-all duration-200"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default OrderImpactBanner;
