import React from "react";

function HabitCard({ name, nikName }) {
  return (
    <>
      <div className="row habit-row d-flex" data-habit={nikName}>
        <div className="col-md-6">
          <div className="bg-light d-flex text-center pt-5">{name}</div>
        </div>
        <div className="col-md-6">
          <div className="chec-day pt-1"></div>
          {/* buttons and checkboxes below*/}
        </div>
      </div>
    </>
  );
}

export default HabitCard;
