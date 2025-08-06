import React from "react";
import doctors from "../data/doctors"; // optional if you use static data

const FindDoctors = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-center mb-8 text-green-800">Find Ayurvedic Doctors</h1>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doc) => (
          <div key={doc.id} className="bg-white border rounded-lg shadow p-4 flex flex-col items-center text-center">
            <img
              src={doc.image}
              alt={doc.name}
              className="w-24 h-24 rounded-full object-cover mb-3"
            />
            <h3 className="text-lg font-semibold text-green-700">{doc.name}</h3>
            <p className="text-sm text-gray-600">{doc.specialty}</p>
            <p className="text-sm text-gray-500">Experience: {doc.experience}</p>
            <span className={`mt-2 text-sm font-medium ${doc.availability === 'Available' ? 'text-green-600' : 'text-red-500'}`}>
              {doc.availability}
            </span>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200">
              Connect Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindDoctors;
