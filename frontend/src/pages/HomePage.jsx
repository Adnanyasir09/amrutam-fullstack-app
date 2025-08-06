// pages/HomePage.jsx
import React from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import StoreHero from "../components/StoreHero";
import CategoryMenu from "../components/CategoryMenu";
import SummerCollection from "../components/SummerCollection";
import AppDownloadSection from "../components/AppDownloadSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <StoreHero />
      <CategoryMenu />
      <SummerCollection />
      <AppDownloadSection />
      <Footer />
    </>
  );
};

export default HomePage;
