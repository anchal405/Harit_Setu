import { useState } from 'react';

const regions = [
  'Punjab',
  'Haryana',
  'Uttar Pradesh',
  'Bihar',
  'Madhya Pradesh',
  'Rajasthan',
  'Maharashtra',
  'Andhra Pradesh',
  'Telangana',
  'Karnataka',
  'Tamil Nadu',
  'Odisha',
  'West Bengal',
  'Chhattisgarh',
  'Gujarat',
  'Assam',
  'Jharkhand',
];

const cropTypes = [
  'पराली (Paddy Straw)',
  'गेहूं का भूसा (Wheat Husk)',
  'चावल का भूसा (Rice Husk)',
  'गन्ना बगास (Sugarcane Bagasse)',
  'केले के पत्ते (Banana Leaves)',
  'कपास का डंठल (Cotton Stalk)',
  'मक्का का डंठल (Corn Stalk)',
  'मूंगफली का छिलका (Groundnut Shell)',
  'सरसों का डंठल (Mustard Stalk)',
  'अन्य (Other)',
];

const BuyerFilters = ({ onSearch, loading }) => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('');
  const [quantity, setQuantity] = useState('');
  const [otherCrop, setOtherCrop] = useState('');

  const handleSearch = () => {
    const payload = {
      region: selectedRegion.trim(),
      crop:
        selectedCrop === 'अन्य (Other)'
          ? otherCrop.trim()
          : selectedCrop.trim(),
      quantity: quantity.trim(),
    };

    if (onSearch) {
      onSearch(payload);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md mx-auto mb-10">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        🔍Quick Filters
      </h3>

      <select
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >
        <option value="">Select Region</option>
        {regions.map((region) => (
          <option
            key={region}
            value={region}
          >
            {region}
          </option>
        ))}
      </select>

      <select
        value={selectedCrop}
        onChange={(e) => setSelectedCrop(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >
        <option value="">Select Crop Type</option>
        {cropTypes.map((crop) => (
          <option
            key={crop}
            value={crop}
          >
            {crop}
          </option>
        ))}
      </select>

      {selectedCrop === 'अन्य (Other)' && (
        <input
          type="text"
          placeholder="Enter crop name"
          value={otherCrop}
          onChange={(e) => setOtherCrop(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
      )}

      <input
        type="number"
        placeholder="Quantity (in kg)"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <button
        onClick={handleSearch}
        disabled={loading}
        className={`w-full font-semibold px-4 py-2 rounded transition ${
          loading
            ? 'bg-gray-300 text-gray-600'
            : 'bg-green-100 text-green-900 hover:bg-green-200'
        }`}
      >
        {loading ? '🔄 Searching...' : '🔎 खोजें | Search'}
      </button>
    </div>
  );
};

export default BuyerFilters;

