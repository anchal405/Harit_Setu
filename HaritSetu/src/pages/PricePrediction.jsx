import { useState } from 'react';
import axios from 'axios';

const PricePrediction = () => {
  const [formData, setFormData] = useState({
    crop_type: '',
    residue_type: '',
    state: '',
    district: '',
    month: '',
    quantity_kg: '',
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        'https://harit-setu.onrender.com/predict_price',
        {
          ...formData,
          month: parseInt(formData.month),
          quantity_kg: parseInt(formData.quantity_kg),
        }
      );
      setResult(response.data.predicted_price);
    } catch (err) {
      console.error(err);
      setResult('Error fetching prediction. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
      <h2 className="text-2xl font-bold text-green-800 mb-6">
        🌱 HaritSetu AI Price Predictor
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          name="crop_type"
          placeholder="Crop Type"
          value={formData.crop_type}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="text"
          name="residue_type"
          placeholder="Residue Type"
          value={formData.residue_type}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="text"
          name="district"
          placeholder="District"
          value={formData.district}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="number"
          name="month"
          placeholder="Month (1-12)"
          value={formData.month}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="number"
          name="quantity_kg"
          placeholder="Quantity (in Kg)"
          value={formData.quantity_kg}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700"
        >
          {loading ? 'Predicting...' : 'Predict Price'}
        </button>
      </form>

      {result && (
        <div className="mt-6 text-lg text-green-700 font-semibold">
          Predicted Price: ₹ {result}
        </div>
      )}
    </div>
  );
};

export default PricePrediction;
