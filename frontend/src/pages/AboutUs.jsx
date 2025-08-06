import React from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-8">About Us</h1>

        <div className="text-lg text-gray-700 space-y-6">
          <p>
            Welcome to <strong>AyurvedaMart</strong>, your trusted partner in holistic wellness.
            We are passionate about integrating the ancient wisdom of Ayurveda with modern health
            practices to create a transformative wellness experience for every individual.
          </p>

          <p>
            Our platform is more than an e-commerce store — it’s a community for conscious living.
            From Ayurvedic remedies and organic skincare to personalized doctor consultations and lab tests,
            we are your one-stop destination for total wellbeing.
          </p>

          <p>
            Every product is carefully curated, ethically sourced, and backed by science — ensuring both
            safety and effectiveness. We collaborate with experienced Ayurvedic practitioners to
            deliver the most authentic healing solutions.
          </p>

          <p>
            Whether you're searching for natural solutions to chronic issues or simply adopting a
            more mindful lifestyle, we are here to support your journey — every step of the way.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-[#f0f9f3] rounded-lg shadow">
            <img src="/b1.png" alt="Quality Products" className="mx-auto h-16 mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">Premium Ayurvedic Products</h3>
            <p className="text-sm text-gray-600">Sourced directly from trusted farms and licensed practitioners.</p>
          </div>

          <div className="text-center p-6 bg-[#fef6e7] rounded-lg shadow">
            <img src="/z1.png" alt="Expert Doctors" className="mx-auto h-16 mb-4 rounded-full" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">Certified Experts</h3>
            <p className="text-sm text-gray-600">Consult with qualified Ayurvedic doctors for personalized care.</p>
          </div>

          <div className="text-center p-6 bg-[#e7f0ea] rounded-lg shadow">
            <img src="/b3.png" alt="Lab Tests" className="mx-auto h-16 mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">Wellness Lab Tests</h3>
            <p className="text-sm text-gray-600">Book full-body and wellness lab tests with quick turnaround times.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Join Our Wellness Movement</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We believe wellness is a lifestyle, not a luxury. At AyurvedaMart, we’re on a mission to make
            holistic health simple, effective, and accessible for all.
          </p>
          <a
            href="/shop"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-medium hover:bg-green-800 transition"
          >
            Explore Our Products
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
