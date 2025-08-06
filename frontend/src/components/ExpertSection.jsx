import React from "react";
import ExpertCard from "./ExpertCard";

const ExpertSection = () => {
  const experts = [
    {
      name: "Dr. Vaishali Sharma",
      role: "Ayurveda Practitioner (BAMS, MD)",
      experience: "25 years of experience",
      specialty: "Skin Specialist",
      rating: "4.5",
      image: "/z1.png", // Make sure z1.png is in public folder
    },
    {
      name: "Dr. Meera Joshi",
      role: "Certified Dermatologist",
      experience: "18 years of experience",
      specialty: "Hair & Skin",
      rating: "4.8",
      image: "/z1.png",
    },
    {
      name: "Dr. Rajiv Kapoor",
      role: "Senior Ayurvedic Consultant",
      experience: "20 years of experience",
      specialty: "Chronic Illness",
      rating: "4.6",
      image: "/z1.png",
    },
  ];

  return (
    <div className="w-full px-6 py-12 bg-white">
      <h2 className="text-2xl font-semibold text-center mb-10">Meet Our Experts</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {experts.map((expert, index) => (
          <ExpertCard key={index} {...expert} />
        ))}
      </div>
    </div>
  );
};

export default ExpertSection;
