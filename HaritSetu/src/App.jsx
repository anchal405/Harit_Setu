import { Routes, Route } from "react-router-dom";
import Home from "./pages/LandingPage";       
import AuthPage from "./pages/AuthPage"; 
import FarmerDashboard from "./pages/FarmerDashboard";
import BuyerDashboard from "./pages/BuyerDashboard";
import CropWasteFormPage from "./pages/CropWasteForm";
import CropListing from "./pages/CropListingPage";
import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";
import About from "./pages/AboutUs";
import Features from "./pages/Features";
import PricePrediction from './pages/PricePrediction';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/auth"
        element={<AuthPage />}
      />
      <Route
        path="/farmerdashboard"
        element={<FarmerDashboard />}
      />
      <Route
        path="/buyerdashboard"
        element={<BuyerDashboard />}
      />
      <Route
        path="/list-crop-waste"
        element={<CropWasteFormPage />}
      />
      <Route
        path="/crop-listings"
        element={<CropListing />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/signup"
        element={<SignUp />}
      />
      <Route
        path="/about"
        element={<About />}
      />
      <Route
        path="/features"
        element={<Features />}
      />
      <Route
        path="/predict"
        element={<PricePrediction />}
      />
     
      
    </Routes>
  );
}

export default App;
