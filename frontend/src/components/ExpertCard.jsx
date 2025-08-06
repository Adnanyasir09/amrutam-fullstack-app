import React from "react";

const ExpertCard = ({ name, role, experience, specialty, rating, image }) => {
  return (
    <div className="bg-[#fff6e9] rounded-3xl w-full max-w-sm flex flex-col items-center text-center shadow-md overflow-hidden p-4">
      <div className="relative mt-4">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-black text-white px-3 py-1 text-sm rounded-full flex items-center gap-1">
          {rating} <span>⭐</span>
        </div>
      </div>

      <div className="mt-6 px-4">
        <h3 className="font-bold text-lg text-black">{name}</h3>
        <p className="text-gray-600 text-sm">{role}</p>
        <div className="flex items-center justify-center gap-2 text-sm mt-2 text-gray-700">
          <svg
            className="w-4 h-4 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0118 20H6a12.083 12.083 0 01-.16-9.422L12 14z" />
          </svg>
          {experience}
        </div>
        <div className="mt-2">
          <span className="bg-[#e9e5c2] text-green-700 px-4 py-1 rounded-full text-sm inline-block">
            🩺 {specialty}
          </span>
        </div>
      </div>

      <div className="bg-green-800 text-white w-full py-3 mt-6 font-medium text-sm cursor-pointer hover:bg-green-900 transition-all">
        Book a session
      </div>
    </div>
  );
};

export default ExpertCard;
