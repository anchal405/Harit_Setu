import { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import leafAnimation from '../assets/leaf.json';
import FarmerNavbar from '../components/FarmerNavbar';
import Footer from '../components/Footer';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const CropWasteForm = () => {
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const newCrop = {
        ...formData,
        createdAt: Timestamp.now(),
      };

      await addDoc(collection(db, 'crops'), newCrop);

      alert('✅ Submitted successfully!');
      setFormData({});
      e.target.reset();
    } catch (error) {
      console.error('Error submitting:', error);
      alert('❌ Error submitting form: ' + error.message);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="relative bg-[#f4faf4] min-h-screen overflow-hidden">
      <FarmerNavbar />

      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <Player
          autoplay
          loop
          src={leafAnimation}
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 flex justify-center px-4 py-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl space-y-6"
        >
          <h2 className="text-2xl font-bold text-green-900 text-center mb-2">
            🌿 Crop Waste Listing | फसल अपशिष्ट सूचीबद्ध करें
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-800 text-sm font-medium">
                Farmer Name
              </label>
              <input
                type="text"
                name="farmerName"
                placeholder="किसान का नाम"
                className="w-full p-3 rounded-xl bg-white/70 backdrop-blur-md border border-gray-300"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-gray-800 text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                pattern="^[6-9]\d{9}$"
                placeholder="फोन नंबर (10 अंक)"
                className="w-full p-3 rounded-xl bg-white/70 backdrop-blur-md border border-gray-300"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-gray-800 text-sm font-medium">
                Crop Type
              </label>
              <select
                name="cropType"
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/70 backdrop-blur-md border border-gray-300"
                required
              >
                <option value="">फसल का प्रकार चुनें</option>
                <option>गेहूं (Wheat)</option>
                <option>धान (Rice)</option>
                <option>गन्ना (Sugarcane)</option>
                <option>मक्का (Maize)</option>
                <option>कपास (Cotton)</option>
                <option>अन्य (Other)</option>
              </select>
            </div>

            <div>
              <label className="text-gray-800 text-sm font-medium">
                Residue Type
              </label>
              <select
                name="residueType"
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/70 backdrop-blur-md border border-gray-300"
                required
              >
                <option value="">अवशेष प्रकार चुनें</option>
                <option>पराली (Paddy Straw)</option>
                <option>गेहूं का भूसा (Wheat Husk)</option>
                <option>चावल का भूसा (Rice Husk)</option>
                <option>गन्ना बगास (Sugarcane Bagasse)</option>
                <option>केले के पत्ते (Banana Leaves)</option>
                <option>कपास का डंठल (Cotton Stalk)</option>
                <option>मक्का का डंठल (Corn Stalk)</option>
                <option>मूंगफली का छिलका (Groundnut Shell)</option>
                <option>सरसों का डंठल (Mustard Stalk)</option>
                <option>अन्य (Other)</option>
              </select>
            </div>

            <div className="flex gap-2 items-center">
              <input
                name="quantity"
                type="number"
                placeholder="मात्रा दर्ज करें"
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/70 backdrop-blur-md border border-gray-300"
                required
              />
              <select
                name="unit"
                onChange={handleChange}
                className="p-3 rounded-xl bg-white/70 backdrop-blur-md border border-gray-300"
                required
              >
                <option value="kg">किलोग्राम</option>
                <option value="quintal">क्विंटल</option>
              </select>
            </div>

            <div>
              <label className="text-gray-800 text-sm font-medium">
                Location
              </label>
              <input
                name="location"
                type="text"
                placeholder="गाँव/शहर + पिन कोड"
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/70 backdrop-blur-md border border-gray-300"
                required
              />
            </div>

            <div>
              <label className="text-gray-800 text-sm font-medium">
                Preferred Price (₹)
              </label>
              <input
                name="price"
                type="number"
                placeholder="वांछित मूल्य (वैकल्पिक)"
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/70 backdrop-blur-md border border-gray-300"
              />
            </div>

            <div>
              <label className="text-gray-800 text-sm font-medium">
                Available From
              </label>
              <input
                name="availableFrom"
                type="date"
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/70 backdrop-blur-md border border-gray-300"
                required
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="text-gray-800 text-sm font-medium">
                Notes for Buyers
              </label>
              <textarea
                name="notes"
                rows="3"
                placeholder="खरीदारों के लिए कोई अतिरिक्त जानकारी"
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/70 backdrop-blur-md border border-gray-300"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full mt-6 py-3 rounded-xl font-semibold transition duration-300 ${
              isSubmitting
                ? 'bg-green-900 cursor-not-allowed opacity-80'
                : 'bg-gradient-to-r from-green-500 to-green-700 hover:opacity-90 text-white'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit | सबमिट करें'}
          </button>

          <p className="text-center text-green-800 mt-4 font-medium">
            Helping farmers turn waste into wealth 🌾 | किसान अब अपशिष्ट से कमाई
            करें
          </p>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default CropWasteForm;
