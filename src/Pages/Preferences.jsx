import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";

const Preferences = () => {
  const [motivation, setMotivation] = useState("");

  //load saved message from LocalStore
  useEffect(() => {
    const savedMessage = localStorage.getItem("motivationMessage");
    if (savedMessage) {
      setMotivation(savedMessage);
    }
  }, []);

  //save to localStorage when change
  const handleChange = (e) => {
    const newMessage = e.target.value;
    setMotivation(newMessage);
    localStorage.setItem("motivationMessage", newMessage);
  };

  return (
    <div className="preferences-page">
      <Navbar />
      <Hero />
      <div className="container mt-4">
        <h1 className="text-2xl font-bold text-center pt-4 border-b border">
          Preferences
        </h1>
        <label className="form-label fw-bold">Motivational message</label>
        <input
          type="text"
          className="form-control"
          placeholder="One step at a time!"
          value={motivation}
          onChange={handleChange}
        />
        <p className="mt-2 text-success">
          {motivation && ` Saved: "${motivation}"`}
        </p>
      </div>
    </div>
  );
};

export default Preferences;
