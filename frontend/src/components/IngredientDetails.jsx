import React from "react";

const IngredientDetails = () => {
  return (
    <div className="min-h-screen bg-[#fff5dd] px-6 py-8 md:px-12 flex flex-col md:flex-row gap-10">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
        <button className="mb-6 px-4 py-2 border border-green-800 text-green-800 rounded-md hover:bg-green-100 transition">
          &larr; Back
        </button>

        <div className="border rounded-xl overflow-hidden p-4 bg-[#fff8e6] mb-6">
          <img src="/j1.png" alt="Gokhru" className="w-[300px] h-[300px] object-cover" />
        </div>

        <h2 className="text-2xl font-semibold mb-2">Gokhru</h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          Also known as Tribulus, it’s used to prevent infections and manage diabetes.
          It’s known for its potential to boost testosterone levels and improve reproductive health
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2">
        <h3 className="text-md mb-6 text-gray-900 font-medium">
          Products with <span className="font-semibold">"Gokhru"</span> as primary ingredient
        </h3>

        <div className="space-y-5">
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4">
                <img
                  src="/i8.png"
                  alt="Product"
                  className="w-24 h-24 object-cover rounded-xl"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural...
                  </p>
                  <p className="text-sm text-gray-700 mt-1">₹649.00</p>
                </div>
              </div>

              <button className="text-white bg-green-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-900 transition">
                +
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IngredientDetails;
