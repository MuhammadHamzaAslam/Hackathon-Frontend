import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-gray-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Empowering Your Financial Future
          </h1>
          <p className="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:mt-5 md:max-w-3xl">
            Get the financial support you need for weddings, home construction,
            business startups, and education.
          </p>
          <div className="mt-10 flex justify-center">
            <Button size="lg" className="mr-4">
              Explore Loans
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
