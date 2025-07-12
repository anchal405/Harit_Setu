import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bgImage from '../assets/signup-img.jpg';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const SignUpPage = () => {
  const [formData, setFormData] = useState({});
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const {
      firstName,
      lastName,
      age,
      gender,
      mobile,
      email,
      password,
      confirmPassword,
      role,
    } = formData;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      setIsSubmitting(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        firstName,
        lastName,
        age,
        gender,
        mobile,
        email,
        role,
        createdAt: new Date().toISOString(),
      });

      alert('Sign up successful!');

      if (role === 'farmer') navigate('/farmerdashboard');
      else if (role === 'buyer') navigate('/buyerdashboard');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already exists! Please log in instead.');
      } else if (error.code === 'auth/invalid-email') {
        alert('Invalid email format.');
      } else if (error.code === 'auth/weak-password') {
        alert('Password should be at least 6 characters.');
      } else {
        alert('Signup failed: ' + error.message);
      }

      console.error('Signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#e8f5e9] to-[#f3f2e9]">
      <Navbar />

      <div className="w-full flex flex-col items-center px-4 py-6">
        <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg mb-4">
          <img
            src={bgImage}
            alt="Welcome Banner"
            className="w-full object-cover h-60"
          />
        </div>
        <h2 className="text-2xl font-bold text-green-800 mb-1 text-center">
          Welcome to HaritSetu
        </h2>
        <p className="text-center text-sm text-gray-700 mb-1">
          हरितसेतु में आपका स्वागत है
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Sell Smart, Stay Green – No Smoke in Between
        </p>

        <form
          className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-3xl space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="पहला नाम"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="अंतिम नाम"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Age
              </label>
              <input
                type="number"
                name="age"
                placeholder="उम्र"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <select
                name="gender"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-300"
                onChange={handleChange}
                required
              >
                <option value="">लिंग चुनें</option>
                <option value="male">पुरुष</option>
                <option value="female">महिला</option>
                <option value="other">अन्य</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number
            </label>
            <input
              type="text"
              name="mobile"
              placeholder="मोबाइल नंबर"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="ईमेल पता"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="पासवर्ड"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="पासवर्ड की पुष्टि करें"
              className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-[38px] text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sign Up As
            </label>
            <select
              name="role"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-300"
              onChange={handleChange}
              required
            >
              <option value="">भूमिका चुनें</option>
              <option value="farmer">किसान</option>
              <option value="buyer">खरीदार</option>
            </select>
          </div>

          <button
            type="submit"
            className={`w-full mt-4 py-3 rounded-xl ${
              isSubmitting
                ? 'bg-green-800 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#4CAF50] to-[#A5D6A7] hover:opacity-90'
            } text-white font-semibold transition duration-300`}
            disabled={isSubmitting}
          >
            Sign Up
          </button>

          <div className="text-center mt-4 text-sm text-gray-600">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-green-700 font-semibold hover:underline"
            >
              Login here
            </Link>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default SignUpPage;
