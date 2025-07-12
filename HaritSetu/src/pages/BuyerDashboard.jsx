// import { useEffect, useState } from 'react';
// import BuyerNavbar from '../components/BuyerNavbar';
// import Footer from '../components/Footer';
// import BuyerFeatures from '../components/BuyerFeatures';
// import buyerBanner from '../assets/buyer-dashboard.jpg';
// import BuyerFilters from '../components/BuyerFilters';
// import OrderImpactBanner from '../components/OrderImpact';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../firebase';

// const BuyerDashboard = () => {
//   const [allCrops, setAllCrops] = useState([]);
//   const [filteredCrops, setFilteredCrops] = useState([]);
//   const [searchTriggered, setSearchTriggered] = useState(false);

//   // Fetch all crop data on mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const snapshot = await getDocs(collection(db, 'crops'));
//         const crops = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setAllCrops(crops);
//       } catch (error) {
//         console.error('Error fetching crops:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Handle search from filters
//   const handleSearch = ({ region, crop, quantity }) => {
//     setSearchTriggered(true); // Now show the filtered results only after search click

//     const results = allCrops.filter((item) => {
//       const locationMatch =
//         region && item.location?.toLowerCase().includes(region.toLowerCase());
//       const cropMatch =
//         crop && item.residueType?.toLowerCase().includes(crop.toLowerCase());
//       return locationMatch || cropMatch; // match if either one is true
//     });

//     setFilteredCrops(results);
//   };

//   return (
//     <>
//       <BuyerNavbar />

//       <div className="bg-[#f4faf4] min-h-screen flex flex-col items-center px-4 py-10">
//         {/* Hero Banner */}
//         <div className="w-full max-w-5xl rounded-xl overflow-hidden shadow-md mb-6 relative">
//           <img
//             src={buyerBanner}
//             alt="Buyer Dashboard Banner"
//             className="w-full h-[460px] object-cover"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
//             <h2 className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg">
//               Welcome to HaritSetu
//             </h2>
//           </div>
//         </div>

//         {/* Tagline */}
//         <div className="text-center space-y-2 text-gray-800 mb-10">
//           <p className="text-lg md:text-xl font-semibold tracking-wide text-green-800">
//             Sell Smart, Stay Green —{' '}
//             <span className="text-black">No Smoke in Between</span>
//           </p>
//         </div>

//         {/* Features + Filters */}
//         <BuyerFeatures />
//         <BuyerFilters onSearch={handleSearch} />

//         {/* Crop Listings */}
//         {searchTriggered && (
//           <div className="w-full max-w-4xl mb-10">
//             <h3 className="text-lg font-semibold mb-4 text-green-900">
//               Available Listings
//             </h3>
//             {filteredCrops.length === 0 ? (
//               <p className="text-gray-600">No match found.</p>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {filteredCrops.map((crop) => (
//                   <div
//                     key={crop.id}
//                     className="bg-white rounded-xl shadow p-4 border border-gray-200"
//                   >
//                     <h4 className="font-bold text-green-800">
//                       {crop.farmerName}
//                     </h4>
//                     <p className="text-gray-700 text-sm">📍 {crop.location}</p>
//                     <p className="text-gray-700 text-sm">
//                       🌾 {crop.residueType} — {crop.quantity} {crop.unit}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         <OrderImpactBanner />
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default BuyerDashboard;

//**************************************************************************************** */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BuyerNavbar from '../components/BuyerNavbar';
import Footer from '../components/Footer';
import BuyerFeatures from '../components/BuyerFeatures';
import buyerBanner from '../assets/buyer-dashboard.jpg';
import BuyerFilters from '../components/BuyerFilters';
import OrderImpactBanner from '../components/OrderImpact';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const BuyerDashboard = () => {
  const [allCrops, setAllCrops] = useState([]);
  const [filteredCrops, setFilteredCrops] = useState([]);
  const [searchTriggered, setSearchTriggered] = useState(false);
  const navigate = useNavigate();

  // Fetch all crop data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'crops'));
        const crops = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllCrops(crops);
      } catch (error) {
        console.error('Error fetching crops:', error);
      }
    };

    fetchData();
  }, []);

  // ✅ Correct filter logic: both region AND crop must match
  const handleSearch = ({ region, crop }) => {
    setSearchTriggered(true);

    const results = allCrops.filter((item) => {
      const locationMatch =
        region && item.location?.toLowerCase().includes(region.toLowerCase());
      const cropMatch =
        crop && item.residueType?.toLowerCase().includes(crop.toLowerCase());

      return locationMatch && cropMatch; // ✅ both must match
    });

    setFilteredCrops(results);
  };

  return (
    <>
      <BuyerNavbar />

      <div className="bg-[#f4faf4] min-h-screen flex flex-col items-center px-4 py-10">
        {/* Hero Banner */}
        <div className="w-full max-w-5xl rounded-xl overflow-hidden shadow-md mb-6 relative">
          <img
            src={buyerBanner}
            alt="Buyer Dashboard Banner"
            className="w-full h-[460px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg">
              Welcome to HaritSetu
            </h2>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center space-y-2 text-gray-800 mb-10">
          <p className="text-lg md:text-xl font-semibold tracking-wide text-green-800">
            Sell Smart, Stay Green —{' '}
            <span className="text-black">No Smoke in Between</span>
          </p>
        </div>

        {/* Features Section */}
        <BuyerFeatures onFindCropWaste={() => navigate('/crop-listings')} />

        {/* Filters */}
        <BuyerFilters onSearch={handleSearch} />

        {/* Filtered Results */}
        {searchTriggered && (
          <div className="w-full max-w-4xl mb-10">
            <h3 className="text-lg font-semibold mb-4 text-green-900">
              Available Listings
            </h3>
            {filteredCrops.length === 0 ? (
              <p className="text-gray-600">No match found.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCrops.map((crop) => (
                  <div
                    key={crop.id}
                    className="bg-white rounded-xl shadow p-4 border border-gray-200"
                  >
                    <h4 className="font-bold text-green-800">
                      {crop.farmerName}
                    </h4>
                    <p className="text-gray-700 text-sm">📍 {crop.location}</p>
                    <p className="text-gray-700 text-sm">
                      🌾 {crop.residueType} — {crop.quantity} {crop.unit}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Impact Section */}
        <OrderImpactBanner />
      </div>

      <Footer />
    </>
  );
};

export default BuyerDashboard;
