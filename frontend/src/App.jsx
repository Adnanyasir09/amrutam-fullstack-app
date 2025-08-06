import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import Ingredient from "./pages/Ingredient"; // ✅ Import the Ingredient page
import ForumPage from "./pages/ForumPage";
import DoctorPage from "./pages/DoctorPage"; // ✅ Import the DoctorPage
import LabTestPage from "./pages/LabTestPage";
import AboutUs from "./pages/AboutUs"; // ✅ Import AboutUs
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShopPage from "./pages/ShopPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/ingredients" element={<Ingredient />} /> {/* ✅ Add this route */}
      <Route path="/forum" element={<ForumPage />} /> {/* ✅ Add this route */}
      <Route path="/doctors" element={<DoctorPage />} /> {/* ✅ Add DoctorPage route */}
      <Route path="/lab-tests" element={<LabTestPage />} /> {/* ✅ New route */}
      <Route path="/about" element={<AboutUs />} /> {/* ✅ Add About Us Route */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
  );
}

export default App;
