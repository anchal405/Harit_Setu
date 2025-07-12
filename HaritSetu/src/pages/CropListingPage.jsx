// // src/pages/CropListingPage.jsx
// import { useEffect, useState } from "react";
// import CropListingCard from "../components/CropListingCard";
// import BuyerNavbar from "../components/BuyerNavbar";
// import Footer from "../components/Footer";

// const CropListingPage = () => {
//   const [cropListings, setCropListings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // This will simulate fetching data from backend
//   useEffect(() => {
//     const fetchData = async () => {
//       // Replace this with real API call later
//       const response = await fetch("/api/crop-listings.json"); // Example static JSON or API
//       const data = await response.json();
//       setCropListings(data);
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="bg-[#f4faf4] min-h-screen">
//       <BuyerNavbar />
//       <div className="px-4 py-10 max-w-7xl mx-auto">
//         <h2 className="text-2xl font-bold text-center mb-6 text-green-900">
//           Available Crop Residue Listings
//         </h2>

//         {loading ? (
//           <p className="text-center text-gray-600">Loading listings...</p>
//         ) : cropListings.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
//             {cropListings.map((item, index) => (
//               <CropListingCard
//                 key={index}
//                 image={item.image}
//                 farmerName={item.farmerName}
//                 quantity={item.quantity}
//                 price={item.price}
//                 location={item.location}
//                 onBuy={() => alert(`Buying from ${item.farmerName}`)}
//               />
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500">No listings found.</p>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CropListingPage;


//***************************************************** */
// src/pages/CropListingPage.jsx
// src/pages/CropListingPage.jsx
import { useEffect, useState } from "react";
import CropListingCard from "../components/CropListingCard";
import BuyerNavbar from "../components/BuyerNavbar";
import Footer from "../components/Footer";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const CropListingPage = () => {
  const [cropListings, setCropListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCropListings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "crops"));
        const listings = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCropListings(listings);
      } catch (error) {
        console.error("Error fetching crop listings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCropListings();
  }, []);

  return (
    <div className="bg-[#f4faf4] min-h-screen">
      <BuyerNavbar />
      <div className="px-4 py-10 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-900">
          Available Crop Residue Listings
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading listings...</p>
        ) : cropListings.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {cropListings.map((item) => (
              <CropListingCard
                key={item.id}
                farmerName={item.farmerName || 'Unknown'}
                location={item.location || 'Not Provided'}
                residueType={item.residueType || 'N/A'}
                quantity={item.quantity || '0'}
                unit={item.unit || ''} //
                price={item.price || 'N/A'} // ✅ Make sure you're using the correct key name as stored in Firestore
                onBuy={() =>
                  alert(`You selected to buy from ${item.farmerName}`)
                }
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No listings found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CropListingPage;
