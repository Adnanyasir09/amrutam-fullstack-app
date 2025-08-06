import React from "react";
import AppDownloadSection from "../components/AppDownloadSection";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
const products = [
  {
    id: 1,
    name: "Herbal Shampoo",
    price: "₹349",
    image: "/i7.png",
    description: "Revives scalp health and adds natural shine to hair.",
  },
  {
    id: 2,
    name: "Ashwagandha Capsules",
    price: "₹499",
    image: "/i8.png",
    description: "Helps reduce stress and improve immunity.",
  },
  {
    id: 3,
    name: "Neem Face Wash",
    price: "₹299",
    image: "/i9.png",
    description: "Removes acne, dirt, and excess oil naturally.",
  },
  {
    id: 4,
    name: "Amla Juice",
    price: "₹399",
    image: "/j1.png",
    description: "Boosts digestion and strengthens hair roots.",
  },
];

const ShopPage = () => {
  return (
    <>
    <TopBar />
    <Navbar />
    <div className="min-h-screen bg-[#fffef9] px-6 py-10 text-[#2f5130]">
      <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-md">{product.price}</span>
              <button className="bg-[#2f5130] text-white px-4 py-1 rounded-full hover:bg-[#3a6240] transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <AppDownloadSection />
    <Footer />
    </>
  );
};

export default ShopPage;
