
import TopBar from "../components/TopBar";

import { Star } from "lucide-react";
import Navbar from "../components/Navbar"; // ✅ Add this
import AppDownloadSection from "../components/AppDownloadSection";
import Footer from "../components/Footer";
import IngredientDetails from "../components/IngredientDetails";

const Ingredient = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <IngredientDetails/>
      <AppDownloadSection />
      <Footer />
    </>
  );
};

export default Ingredient;