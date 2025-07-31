import React from "react";

function IntroCard({ title, message }) {
  return (
    <div className="section-intro-dashboard d-flex py-3 mt-5">
      <div className="container-fluid">
        <div className="row d-flex">
          <div className="col-10 offset-1">
            <div className="card-body py-3 fw-bold bg-success border border-black rounded-4">
              <h1 className="title fw-bold py-3 text-center">{title}</h1>
              <p className="text-center fw-bold px-2">{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default IntroCard;
