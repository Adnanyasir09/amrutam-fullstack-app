// src/pages/ProductDetails.jsx
import React, { useState } from "react";
import TopBar from "../components/TopBar";
import { useLocation, useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import Navbar from "../components/Navbar"; // ✅ Add this
import StoreHero from "../components/StoreHero";
import CategoryMenu from "../components/CategoryMenu";
import ProductInfo from "../components/ProductInfo";
import ReviewSection from "../components/ReviewSection";
import Sum from "../components/Sum";
import ExpertSection from "../components/ExpertSection";
import AppDownloadSection from "../components/AppDownloadSection";
import Footer from "../components/Footer";


const ProductDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("200 ml");

  if (!state) {
    return (
      <div className="p-10">
        <h2 className="text-xl font-semibold">Product not found</h2>
        <button onClick={() => navigate(-1)} className="mt-4 text-blue-600 underline">Go Back</button>
      </div>
    );
  }

  const { titleLine1, titleLine2, price, rating, reviews, image } = state;

  const sizes = ["200 ml", "100 ml", "Pack of 3"];

  return (
    <>
    {/* Top Section */}
      <TopBar />
      <Navbar />
      <StoreHero />
      <CategoryMenu />
    
    <div className="bg-[#fff7e6] min-h-screen py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img src={image} alt={titleLine1} className="rounded-xl w-full max-w-md object-cover" />
        </div>

        {/* Details */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-800">{titleLine1}</h2>
          <p className="text-md text-gray-700">{titleLine2}</p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} size={16} className="text-yellow-500 fill-yellow-400" />
            ))}
            <span className="text-sm text-gray-600">({reviews} reviews)</span>
          </div>

          {/* Price */}
          <p className="text-xl font-bold text-gray-800">{price.split("·")[0]}</p>

          {/* Size Options */}
          <div className="flex gap-3 mt-2">
            {sizes.map((size) => (
              <button
                key={size}
                className={`px-4 py-1 rounded border ${
                  selectedSize === size ? "bg-black text-white" : "bg-white text-black"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center border rounded overflow-hidden">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 text-xl"
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 text-xl"
              >
                +
              </button>
            </div>

            <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition">
              Add to cart
            </button>
          </div>

          {/* Description */}
          <p className="text-gray-700 mt-6 text-sm leading-relaxed">
            Amrutam’s Kuntal Care Do-It-Yourself Hair Spa is an ayurvedic marvel filled to the brim with revitalizing herbs and essential oils like Eucalyptus oil, Triphala, Balchhad and Bhringraj.
            <br /><br />
            These Ayurvedic ingredients when fused together make a potent dollop that nourishes dry and frizzy hair making it soft and bouncy! This spa treatment revitalizes the roots, promotes growth, provides shine, coats hair with a moisturizing layer and is the best stress reliever!
            <br /><br />
            It's time to bring spa home and unwind.
          </p>
        </div>
      </div>
    </div>
       <ProductInfo />
       <ReviewSection/>
       <Sum/>
       <ExpertSection/>
       <AppDownloadSection/>
       <Footer/>
    </>
  );
};

export default ProductDetails;
