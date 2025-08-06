import React from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import DiscussionHeader from "../components/DiscussionHeader";

import QuestionList from "../components/QuestionList";
import AppDownloadSection from "../components/AppDownloadSection";
import Footer from "../components/Footer";

const ForumPage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <DiscussionHeader/>
      
      <QuestionList/>
      <AppDownloadSection />
      <Footer />
      
    </>
  );
};

export default ForumPage;