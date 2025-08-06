// AppDownloadSection.jsx
import React from "react";

const AppDownloadSection = () => {
  return (
    <div className="relative bg-[#fdf7eb] min-h-[700px] w-full px-4 md:px-16 lg:px-24 py-12">
      <div className="relative w-full h-full">

        {/* Heading */}
        <h2 className="absolute top-4 left-4 text-2xl md:text-3xl font-semibold text-green-800">
          Download Amrutam Ayurveda App Now
        </h2>

        {/* Paragraph */}
        <p className="absolute top-20 left-4 text-gray-600 max-w-md">
          The Amrutam Ayurveda App is your one-stop app for all things Ayurvedic! Apart from mimicking the website, the app has added benefits.
        </p>

        {/* Features Grid */}
        <div className="absolute top-44 left-4 grid grid-cols-2 gap-4 max-w-md">
          <FeatureItem icon="/o1.png" text="Access To Prescriptions" />
          <FeatureItem icon="/o1.png" text="Track Health Efficiently" />
          <FeatureItem icon="/o1.png" text="Direct Chat With Doctors" />
          <FeatureItem icon="/o1.png" text="In-App Reminders For Consultations" />
        </div>

        {/* Download Buttons */}
        <div className="absolute top-[380px] left-4 flex gap-4">
          <img src="/r1.webp" alt="Google Play" className="h-12 cursor-pointer" />
          <img src="/r2.png" alt="App Store" className="h-12 cursor-pointer" />
        </div>

        {/* Engagement Time (u1) aligned with "Track Health Efficiently" */}
<img
  src="/u1.png"
  alt="Engagement Time"
  className="absolute top-[146px] right-[350px] w-48 z-10"
/>

<img
  src="/g3.png"
  alt="Download Icon"
  className="absolute top-[60px] right-[270px] w-20 z-20 rotate-[-45deg]"
  style={{ transform: "rotate(-45deg)" }} // Optional: for custom rotation
/>


{/* Phone Mockup aligned with "Track Health Efficiently" */}
<img
  src="/t1.png"
  alt="App Mockup"
  className="absolute top-[50px] right-20 w-52 z-20"
/>

{/* Arrow from Mockup to Downloads Badge */}
<img
  src="/g4.png" // Replace with your arrow image path
  alt="Arrow to Downloads Badge"
  className="absolute top-[330px] right-[400px] w-16 z-20 "
/>

        {/* Downloads Badge */}  
<img
  src="/x3.png"
  alt="10K+ Downloads"
  className="absolute top-[350px] right-[250px] w-32 z-10"
/>

      </div>
    </div>
  );
};

const FeatureItem = ({ icon, text }) => (
  <div className="flex items-center gap-3 bg-white shadow-sm p-3 rounded-md text-sm text-gray-700">
    <img src={icon} alt={text} className="w-10 h-10 object-contain" />
    <span>{text}</span>
  </div>
);

export default AppDownloadSection;
