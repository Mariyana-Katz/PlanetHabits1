import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";

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

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function MyProgress() {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    // For each habit, load saved days from localStorage and count completed days
    const data = habits.map(({ nikName, name }) => {
      const saved = JSON.parse(localStorage.getItem(nikName)) || {};
      // Count how many days are true (checked)
      const completedCount = days.reduce(
        (count, day) => count + (saved[day] ? 1 : 0),
        0
      );
      return { name, completedCount };
    });

    setProgress(data);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mt-5 pb-5 ">
        <p className="progress d-flex align-items-center justify-content-center border border-2 border-black fs-3 p-5 bg-success fw-bold">
          My Planet Habits Progress
        </p>
        <ul className="p-5 fw-bold border rounded-3 bg-secondary">
          {progress.map(({ name, completedCount }) => (
            <li key={name}>
              {name}: {completedCount} / 7 days{" "}
              {/* Shows clapping hands if 7/7 */}
              {completedCount === 7 && "👏"}
              {}
            </li>
          ))}
        </ul>
      </div>
      <div className="container mb-5">
        <h4 className="text-center mb-3">Habits Completion Chart</h4>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <svg width="100%" height={300}>
            {progress.map(({ name, completedCount }, idx) => {
              const percent = (completedCount / 7) * 100;
              const barHeight = 25;
              const barGap = 15;
              return (
                <g key={name} transform={`translate(0, ${idx * (barHeight + barGap)})`}>
                  <rect
                    x={0}
                    y={0}
                    width={`${percent * 4}`}
                    height={barHeight}
                    fill="#198754"
                    rx={6}
                  />
                  <text
                    x={10}
                    y={barHeight / 2 + 6}
                    fill="#fff"
                    fontSize={16}
                    fontWeight="bold"
                  >
                    {name}
                  </text>
                  <text
                    x={percent * 4 + 10}
                    y={barHeight / 2 + 6}
                    fill="#000"
                    fontSize={16}
                  >
                    {Math.round(percent)}%
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      <Footer />
    </>
  );
}
