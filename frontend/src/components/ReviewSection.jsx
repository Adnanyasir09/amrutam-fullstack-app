import React from "react";
import v1 from "/v1.png"; // Ensure this image exists in public folder or imported correctly

const ReviewSection = () => {
  return (
    <div className="bg-[#fff6e9] py-10 px-4 md:px-16">
      {/* Title */}
      <h2 className="text-center text-lg font-medium mb-2">Trust the voice</h2>

      {/* Image */}
      <div className="flex justify-center mb-8">
        <img
          src={v1}
          alt="Video Review"
          className="w-[320px] h-[180px] rounded-md border-4 border-blue-400 object-cover"
        />
      </div>

      {/* Section Title */}
      <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">
        Reviews and Ratings
      </h3>

      {/* Rating + Buttons Row */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        {/* Rating */}
        <div className="bg-[#ffe8d0] text-left p-4 rounded-md w-[160px]">
          <p className="text-2xl font-bold text-black">5.0</p>
          <p className="text-orange-500 text-sm">
            ★★★★★ <br />
            <span className="text-gray-600">Based on 20 reviews</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-[#f3f1ec] border border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-gray-200 transition">
            See More Reviews
          </button>
          <button className="bg-[#f3f1ec] border border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-gray-200 transition">
            Write a review
          </button>
        </div>
      </div>

      {/* Reviews */}
      <div className="flex flex-col gap-4 w-full">
        {[1, 2].map((_, i) => (
          <div
            key={i}
            className="bg-[#ffe8d0] w-full text-left p-4 rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-500 font-bold">
                sa
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Sabarinath J</p>
                <p className="text-xs text-gray-500">20 January 2023</p>
              </div>
            </div>
            <p className="text-gray-800 text-sm mb-2">
              Might be bit early to confirm but yes I can see noticeable difference in my hairfall.
              Will write again after using it for longer periods.
            </p>
            <p className="text-orange-500 text-sm">★★★★★</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
