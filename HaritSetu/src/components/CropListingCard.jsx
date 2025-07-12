// // src/components/CropListingCard.jsx
// import React from "react";
// import { FaMapMarkerAlt } from "react-icons/fa";

// const CropListingCard = ({ image, farmerName, quantity, price, location, onBuy }) => {
//   return (
//     <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm">
//       <img
//         src={image}
//         alt={farmerName + " crop residue"}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-4">
//         <h3 className="text-lg font-bold text-green-800 mb-1">👨‍🌾 {farmerName}</h3>
//         <p className="text-sm text-gray-700 mb-1">Quantity: <span className="font-medium">{quantity}</span></p>
//         <p className="text-sm text-gray-700 mb-1">Price: <span className="font-medium">₹{price}/kg</span></p>
//         <p className="text-sm text-gray-700 flex items-center gap-1 mb-4">
//           <FaMapMarkerAlt className="text-green-600" />
//           {location}
//         </p>
//         <button
//           onClick={onBuy}
//           className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white py-2 rounded-xl font-semibold hover:opacity-90"
//         >
//           Buy Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CropListingCard;
//******************************************************************************************* */

// src/components/CropListingCard.jsx

const CropListingCard = ({
  farmerName,
  residueType,
  quantity,
  price,
  unit, // ✅ added this
  location,
  onBuy,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 w-full max-w-sm border border-gray-200">
      <h4 className="font-bold text-green-800 text-lg mb-1">👨‍🌾 {farmerName}</h4>

      <p className="text-gray-700 text-sm mb-1">📍 Location: {location}</p>
      <p className="text-gray-700 text-sm mb-1">🌿 Waste Type: {residueType}</p>
      <p className="text-gray-700 text-sm mb-1">📦 Quantity: {quantity}</p>

      <p className="text-gray-800 font-semibold text-sm mb-3">
        💰 Preferred Price: ₹ {price ? price : 'N/A'} {unit ? `/ ${unit}` : ''}
      </p>

      <button
        onClick={onBuy}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Buy Now
      </button>
    </div>
  );
};

export default CropListingCard;
