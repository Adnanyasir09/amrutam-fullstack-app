import React from "react";

const DiscussionHeader = () => (
  <div
    className="relative py-10 flex justify-center items-center"
    style={{
      backgroundColor: "#eef4ec", // Very light greenish
    }}
  >
    {/* Decorative Ellipse Images */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <img
        src="/ec1.png"
        alt="ellipse"
        className="absolute"
        style={{
          top: "60px",
          left: "50px",
          width: "100px",
          height: "50px",
        }}
      />
      <img
        src="/ec2.png"
        alt="ellipse"
        className="absolute"
        style={{
          top: "0px",
          left: "1200px",
          width: "100px",
          height: "50px",
        }}
      />
      <img
        src="/ec3.png"
        alt="ellipse"
        className="absolute"
        style={{
          bottom: "0px",
          right: "100px",
          width: "100px",
          height: "70px",
        }}
      />
      <img
        src="/ec4.png"
        alt="ellipse"
        className="absolute"
        style={{
          bottom: "30px",
          left: "150px",
          width: "220px",
          height: "220px",
        }}
      />
    </div>

    {/* Centered Heading */}
    <h2 className="relative text-lg md:text-xl font-semibold text-black text-center z-10">
      Find Discussions Related To Ayurveda Here
    </h2>
  </div>
);

export default DiscussionHeader;
