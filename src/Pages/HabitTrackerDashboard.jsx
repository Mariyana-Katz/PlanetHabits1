import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import IntroCard from "../Components/IntroCard";
import HabitCard from "../Components/HabitCard";

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
      {/*} Render HabitCards dynamically based on the habits array below.
       Each HabitCard receives a unique key and props for name and nikName.
       This allows for easy updates and scalability if habits change in the future.*/}
      <div className="container">
        {habits.map((habit) => (
          <HabitCard key={habit.nikName} name={habit.name} nikName={habit.nikName} />
        ))}
      </div>
      <Footer />
    </>
  );
}
