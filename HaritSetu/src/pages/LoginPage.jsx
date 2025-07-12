import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaPhoneAlt, FaLock } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import bgImage from '../assets/login-img.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const { email, password } = formData;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const role = userData.role;

        if (role === 'farmer') {
          navigate('/farmerdashboard');
        } else if (role === 'buyer') {
          navigate('/buyerdashboard');
        } else {
          alert('Invalid user role.');
        }
      } else {
        alert('User profile not found in database.');
      }
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        alert('User not found. Please sign up first.');
      } else if (error.code === 'auth/wrong-password') {
        alert('Incorrect password.');
      } else {
        alert('Login failed: ' + error.message);
      }
      console.error('Login error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#e8f5e9] to-[#f3f2e9]">
      <Navbar />

      <div className="flex flex-col md:flex-row items-center justify-center flex-1 px-4 py-10">
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="w-full md:w-1/2">
            <img
              src={bgImage}
              alt="Eco-farming Illustration"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-1 text-center">
              Welcome Back!
            </h2>
            <p className="text-center text-sm text-gray-600 mb-6">
              Turning Waste into Wealth 🌱
            </p>

            <form
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 mt-1 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
                    onChange={handleChange}
                    required
                  />
                  <FaPhoneAlt className="absolute right-3 top-4 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    placeholder="Enter password"
                    className="w-full px-4 py-3 mt-1 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute right-3 top-4 text-gray-500"
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-xl text-white font-semibold transition duration-300 ${
                  isSubmitting
                    ? 'bg-green-900'
                    : 'bg-gradient-to-r from-[#4CAF50] to-[#A5D6A7] hover:opacity-90'
                }`}
              >
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
            </form>

            {/* Signup link */}
            <p className="text-sm text-center text-gray-700 mt-4">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-green-800 font-semibold hover:underline"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;
