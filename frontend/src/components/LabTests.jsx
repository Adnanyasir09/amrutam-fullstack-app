// components/LabTests.jsx
import React from "react";

const labTests = [
  {
    id: 1,
    name: "Full Body Checkup",
    description: "Complete health analysis covering vital organs and functions.",
    price: "₹1499",
    duration: "24 hours",
  },
  {
    id: 2,
    name: "Blood Sugar Test",
    description: "Checks blood glucose levels to detect diabetes risk.",
    price: "₹299",
    duration: "6 hours",
  },
  {
    id: 3,
    name: "Liver Function Test (LFT)",
    description: "Evaluates liver health and detects liver-related issues.",
    price: "₹699",
    duration: "12 hours",
  },
  {
    id: 4,
    name: "Thyroid Profile",
    description: "Assesses T3, T4, and TSH levels for thyroid function.",
    price: "₹499",
    duration: "8 hours",
  },
  {
    id: 5,
    name: "Vitamin D Test",
    description: "Checks vitamin D levels to assess bone health.",
    price: "₹799",
    duration: "10 hours",
  },
];

const LabTests = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-10">Available Lab Tests</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {labTests.map((test) => (
          <div key={test.id} className="bg-white border rounded-lg shadow p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">{test.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{test.description}</p>
              <p className="text-sm text-gray-500">Duration: {test.duration}</p>
              <p className="text-sm text-gray-500">Price: <span className="text-black font-semibold">{test.price}</span></p>
            </div>
            <button className="mt-5 bg-green-700 text-white py-2 rounded hover:bg-green-800 transition duration-200">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabTests;
