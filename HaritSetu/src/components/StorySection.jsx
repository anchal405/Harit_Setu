import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const imageMap = import.meta.glob("/src/assets/story/*.jpg", {
  eager: true,
  import: "default",
});

const storySteps = [
  {
    text: "Every year, India generates over 500–650 million tonnes of crop residues.",
    image: imageMap["/src/assets/story/step1.jpg"],
  },
  {
    text: "Nearly 92 million tonnes are burned in open fields — especially in Punjab, Haryana, and Uttar Pradesh.",
    image: imageMap["/src/assets/story/step2.jpg"],
  },
  {
    text: "Just rice straw contributes 15.4 million tonnes of residue in Punjab alone.",
    image: imageMap["/src/assets/story/step3.jpg"],
  },
  {
    text: "Burning leads to loss of vital nutrients — 5.5kg Nitrogen, 2.3kg Phosphorus, and 25kg Potassium per tonne.",
    image: imageMap["/src/assets/story/step4.jpg"],
  },
  {
    text: "This causes 23 million tonnes of CO₂-equivalent emissions annually and 17% of India’s air pollution.",
    image: imageMap["/src/assets/story/step5.jpg"],
  },
  {
    text: "Despite bans and subsidies, farmers still burn due to low-cost alternatives and time pressure.",
    image: imageMap["/src/assets/story/step6.jpg"],
  },
  {
    text: "🌱 HaritSetu helps farmers monetize waste — turning pollutants into profits via an AI-powered platform.",
    image: imageMap["/src/assets/story/step7.jpg"],
  },
];

const StorySection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [storyFinished, setStoryFinished] = useState(false);

  useEffect(() => {
    if (currentStep >= storySteps.length) {
      setStoryFinished(true);
      return;
    }

    const fullText = storySteps[currentStep].text;
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentStep((prev) => prev + 1);
          setDisplayedText("");
        }, 2000);
      }
    }, 40);

    return () => clearInterval(typeInterval);
  }, [currentStep]);

  return (
    <section className="py-20 px-4 bg-green-100 flex items-center justify-center">
      <div className="bg-green-500 border border-green-600 rounded-2xl shadow-xl p-6 md:p-10 max-w-3xl w-full text-center transition-all duration-500">

        {!storyFinished ? (
          <div className="bg-green-400 p-4 md:p-6 rounded-xl shadow-inner transition">
            <p className="text-xl md:text-2xl text-white font-medium min-h-[90px] transition-all duration-500">
              {displayedText}
            </p>

            {storySteps[currentStep] && (
              <img
                src={storySteps[currentStep].image}
                alt={`step-${currentStep}`}
                className="mt-6 mx-auto rounded-xl shadow-lg max-h-[280px] w-full object-contain"
              />
            )}
          </div>
        ) : (
          <div className="animate-fadeIn flex flex-col items-center justify-center space-y-4 py-6 text-white">
            <h3 className="text-2xl font-bold">✨ The Story Ends Here...</h3>
            <p className="text-lg">
              But the real journey begins with <span className="font-semibold">HaritSetu</span>.
              <br />
              Let’s turn ash into opportunity — together.
            </p>

            <Link to="/auth">
              <button className="mt-4 px-6 py-2 bg-white text-green-700 font-semibold rounded-full hover:bg-green-200 transition">
                Get Started with HaritSetu →
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default StorySection;
