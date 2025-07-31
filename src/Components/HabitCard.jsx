import React, { useEffect, useState } from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// ...existing code...
function HabitCard({ nikName, name, onHabitUpdate }) {
  const [checkedDays, setCheckedDays] = useState({});

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(nikName)) || {};
    setCheckedDays(saved);
  }, [nikName]);

  //handles checking/unchecking days and save the change in the localStorage
  const handleChange = (day) => {
    const updated = {
      ...checkedDays,
      [day]: !checkedDays[day],
    };
    setCheckedDays(updated);
    localStorage.setItem(nikName, JSON.stringify(updated));
    if (onHabitUpdate) {
      onHabitUpdate(nikName);
    }
  };

  return (
    <div className="row habit-row d-flex" data-habit={nikName}>
      <div className="col-md-6">
        <div className="bg-light d-flex text-center pt-5">{name}</div>
      </div>
      <div className="col-md-6">
        <div className="chec-day pt-1">
          {days.map((day) => (
            <div className="form-check form-check-inline" key={day}>
              <input
                className="form-check-input"
                type="checkbox"
                id={`${nikName}-${day}`}
                data-day={day}
                checked={checkedDays[day] || false}
                onChange={() => handleChange(day)}
              />
              <label className="form-check-label" htmlFor={`${nikName}-${day}`}>
                {day}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// ...existing code...

export default HabitCard;
