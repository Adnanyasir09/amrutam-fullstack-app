import React from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import FindDoctors from "../components/FindDoctors";
import Footer from "../components/Footer";

const DoctorPage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <FindDoctors/>
      <Footer/>
      
    </>
  );
};

export default DoctorPage;