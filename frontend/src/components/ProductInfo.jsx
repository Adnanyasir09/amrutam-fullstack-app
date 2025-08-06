import React from "react";
import { Link } from "react-router-dom"; // ✅ Import this at the to
const ProductInfo = () => {
  const ingredient = {
    name: "Shatavari",
    description: "Naturally enhances brain and relieves pain",
    image: "/j1.png", // Replace with correct image path if needed
  };

  const highlightCards = [
    "Helps with Dry, Frizzy Hair",
    "Relaxes the scalp, improves hair health",
    "Makes the hair smooth and shiny",
    "Reduces hairfall, repairs damaged hair",
  ];

  const ingredients = Array(4).fill(ingredient);

  return (
    <div className="bg-[#fff7e6] px-4 py-10 text-[#1f1f1f] font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Top Image Row */}
        <div className="flex gap-4 mb-6 overflow-x-auto">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src="/i7.png"
              alt="Product"
              className="w-28 h-28 object-cover rounded-lg border border-gray-200 shadow-sm"
            />
          ))}
        </div>

        {/* Product Highlights */}
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <span>🍋</span> Product Highlights
        </h3>
        <div className="flex flex-wrap gap-4 mb-10">
          {highlightCards.map((text, i) => (
            <div
              key={i}
              className="bg-white px-4 py-3 rounded-md shadow-sm text-sm w-[220px] min-h-[80px] flex items-center"
            >
              {text}
            </div>
          ))}
        </div>

        {/* Key Ingredients */}
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span>🍋</span> Key Ingredients
          </h3>
          <Link to="/ingredients">
  <button className="text-green-600 text-sm font-medium">
    View All Ingredients
  </button>
</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {ingredients.map((ing, i) => (
            <div
              key={i}
              className="bg-white p-3 rounded-md shadow-sm flex items-center gap-3"
            >
              <img src={ing.image} alt={ing.name} className="w-10 h-10" />
              <div>
                <p className="font-semibold text-sm">{ing.name}</p>
                <p className="text-xs text-gray-600">{ing.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* How to use */}
        <h3 className="text-lg font-semibold mb-2">How to use</h3>
        <p className="bg-white p-4 rounded-md text-sm mb-6 leading-relaxed">
          Mix one or two tablespoons of Herbal Child Care Malt with milk or 100–200ml warm water and then consume twice a day or consult our Ayurvedic Expert to find the right Ayurvedic recipe for you.
        </p>

        {/* General Instructions */}
        <h3 className="text-lg font-semibold mb-2">General Instructions</h3>
        <p className="bg-white p-4 rounded-md text-sm mb-6 leading-relaxed">
          Store in a cool and dry place away from direct sunlight. Not advisable for diabetic patients.
        </p>

        {/* FAQs */}
        <h3 className="text-lg font-semibold mb-3">Commonly Asked Questions</h3>

        <div className="bg-white p-4 rounded-md text-sm mb-4 leading-relaxed">
          <p className="font-semibold mb-1">
            Who should be using Amrutam Child Care Malt | Herbal Supplement for Child Care
          </p>
          <p>
            This product is ideal for growing babies and kids to nurture their health in a holistic manner.
          </p>
        </div>

        <div className="bg-white p-4 rounded-md text-sm leading-relaxed">
          <p className="font-semibold mb-1">
            Why choose Amrutam Child Care Malt | Herbal Supplement for Child Care
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
            <li>Helps improve immunity and is useful in enhancing vitality and vigor in children.</li>
            <li>Extremely effective in fighting chronic diseases.</li>
            <li>Improves appetite and digestion.</li>
            <li>Useful in treating anemia, general debility, and maintaining a healthy weight.</li>
            <li>100% Natural and Ayurvedic</li>
            <li>PETA certified cruelty-free</li>
            <li>Hand-picked and ethically sourced ingredients</li>
            <li>AYUSH certified and US FDA approved</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
