import React, { useEffect, useState } from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function HabitCard({ nikName, name }) {
  const [checkedDays, setCheckedDays] = useState({});

  // Load saved state on component mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(nikName)) || {};
    setCheckedDays(saved);
  }, [nikName]);

  const handleChange = (day) => {
    const updated = {
      ...checkedDays,
      [day]: !checkedDays[day],
    };
    setCheckedDays(updated);
    localStorage.setItem(nikName, JSON.stringify(updated));
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

export default HabitCard;
