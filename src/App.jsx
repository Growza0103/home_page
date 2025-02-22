import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import Carousel from "./components/Carousel";
import Recipe from "./components/Recipe";
import ContSign from "./components/ContSign";
import Profile from "./components/Profile";
import HeroSection from "./components/HeroSection";
import CounterSection from "./components/CounterSection";
import ExperienceSection from "./components/ExperienceSection";
import AboutUs from "./components/AboutUs";
import HistorySection from "./components/HistorySection";
import AboutPage from "./components/AboutPage";
import AdminLogin from "./components/AdminLogin";
import SecretKeyListener from "./components/SecretKeyListener"; // Import SecretKeyListener
import "./App.css";
import LoginForm from "./components/LoginForm";

const ShowHeader = () => {
  const location = useLocation(); // Now it's inside Router context ✅
  if (location.pathname === "/login" || location.pathname === "/profile" || location.pathname === "/admin-login") {
    return null;
  }
  return <Header />;
};

const App = () => {
  return (
    <Router>
      <SecretKeyListener /> {/* Secret Key Listener inside Router ✅ */}
      <ShowHeader />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <CounterSection />
              <ExperienceSection />
              <AboutUs />
              <HistorySection />
              <Carousel />
              <Recipe />
            </>
          }
        />
        <Route path="/login" element={<ContSign />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin-login" element={<LoginForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
