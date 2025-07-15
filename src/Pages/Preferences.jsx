import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";

const Preferences = () => {
  return (
    <div className="preferences-page">
      <Navbar />
      <Hero />
      <h1 className="text-2xl font-bold text-center pt-4 border-b border">
        Preferences
      </h1>
    </div>
  );
};

export default Preferences;
