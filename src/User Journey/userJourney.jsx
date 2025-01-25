import React from "react";
import Navbar from "./Journey Components/Navbar";
import HeroSection from "./Journey Components/HeroSection";
import LoanCategories from "./Journey Components/LoanCategories";
import LoanCalculator from "./Journey Components/LoanCalculator";

function UserJourney() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <LoanCategories />
      <LoanCalculator />
    </div>
  );
}

export default UserJourney;
