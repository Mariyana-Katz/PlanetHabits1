import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import DarkMode from "../Components/DarkMode/DarkMode.jsx";

const Preferences = () => {
  const [motivation, setMotivation] = useState("");

  //state to track wheather the message is changed
  const [wasUpdated, setWasUpdated] = useState(false);

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
    setWasUpdated(true);
  };

  return (
    <div className="preferences-page">
      <Navbar />
      <Hero />
      <div className="container mt-4">
        <h1 className="text-2xl font-bold text-center py-3 mb-4 border border-3 border-black bg-success">
          Preferences
        </h1>
        <div className="message border px-2 py-3 bg-success ">
          <label className="form-label fw-bold">Motivational message</label>
          <br></br>
          <input
            type="text"
            className="form-control"
            placeholder="One step at a time!"
            value={motivation}
            onChange={handleChange}
          />

          {/* the "Saved:.. " will shows only when the message is changed */}
          {wasUpdated && motivation && (
            <p className="mt-2 text-success">Saved: "{motivation}"</p>
          )}
        </div>
      </div>
      <div className="container mt-3">
        <div className=" dark-mode border px-2 py-3 fw-bold d-flex align-items-center justify-content-between border bg-success">
          <label>Dark Mode Switch</label>
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Preferences;
