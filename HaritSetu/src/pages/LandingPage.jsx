import StorySection from "../components/StorySection";
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WhoAreYou from '../components/WhoAreYou';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      <Navbar />
      <HeroSection />
      <WhoAreYou />
      <StorySection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Home;
