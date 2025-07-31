import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import IntroCard from "../Components/IntroCard";
import HabitCard from "../Components/HabitCard";
import { Link } from "react-router-dom";
import MyProgress from "./MyProgress";
import "./HabitTrackerDashboard.css";
import Preferences from "./Preferences";

export default function HabitTrackerDashboard() {
  const habits = [
    { id: 1, name: "Planting for the Planet!", nikName: "plant" },
    { id: 2, name: "Tote-ally Eco-Friendly!", nikName: "bag" },
    { id: 3, name: "One Bottle, Endless Impact!", nikName: "bottle" },
    { id: 4, name: "Power Down, Light Up the Planet!", nikName: "electricity" },
    { id: 5, name: "Move Green, Live Clean!", nikName: "bicycle" },
    { id: 6, name: "Reimagine, Reuse, Recycle!", nikName: "recycle" },
    { id: 7, name: "Every Drop Counts!", nikName: "water" },
    { id: 8, name: "Rooted in Change!", nikName: "trees" },
  ];

  const [motivationMessage, setMotivationMessage] = useState("");

  // State for storing the user's motivational message input. If
  // the user enters a message, it will be saved to localStorage.
  const handleMotivationChange = (e) => {
    setMotivationMessage(e.target.value);
    localStorage.setItem("motivationMessage", e.target.value);
  };
  useEffect(() => {
    const saved = localStorage.getItem("motivationMessage");
    if (saved) {
      setMotivationMessage(saved);
    }
  }, []);



  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  
  const resetAllHabits = () => {
    habits.forEach((habit) => {
      localStorage.setItem(habit.nikName, JSON.stringify({}));
    });
    window.location.reload();
  };

  const handleHabitUpdate = (nikName) => {
    const saved = JSON.parse(localStorage.getItem(nikName)) || {};
    const completedCount = days.reduce(
      (count, day) => count + (saved[day] ? 1 : 0),
      0
    );
    if (completedCount === 7) {
      resetAllHabits();
      alert("Congratulations! All progress has been reset for a new week.");
    }
  };



  return (
    <>
      <Navbar />
      <Hero />
      <IntroCard
        title=" Daily Eco Habits Dashboard!"
        message={
          <>
            " Track your planet-positive actions each day! <br />
            Use the checklist below to mark which habits you’ve completed.
            <br />
            Small steps like saving energy, reducing waste, or biking instead of
            driving all add up — and this is your space to stay on track. 🌎💚
            Keep it up!
            <br />
            Every day you check your habits adds to your streak — build momentum
            and see how your small actions create big impact over time!"
          </>
        }
      />

      {/*  Input field for users to enter a personal motivational message.
 The message is saved to localStorage and displayed above the habit cards. */}
      <div className="container ">
        {motivationMessage && (
          <div className="alert alert-secondary text-center border border-2 border-secondary fw-bold fs-5">
            {motivationMessage}
          </div>
        )}
      </div>

      {/*} Render HabitCards dynamically based on the habits array below.
       Each HabitCard receives a unique key and props for name and nikName.
       This allows for easy updates and scalability if habits change in the future.*/}
      <div className="container border border-3 border-secondary rounded-4 bg-secondary">
        {habits.map((habit) => (
          <HabitCard
            key={habit.nikName}
            name={habit.name}
            nikName={habit.nikName}
            onHabitUpdate={handleHabitUpdate} // <-- Add this line
          />
        ))}
      </div>

      <div className="d-flex justify-content-center">
        <Link to="/MyProgress">
          <button className=" progress-button btn bg-secondary rounded-pill p-3 m-5 fw-bold">
            Click Here To See Your Progress
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
