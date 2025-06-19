import React from "react";
import "./EcoCard.css";

function EcoCard({
  imageSrc,
  imageName,
  buttonText,
  modalId,
  modalTitle,
  modalBody,
}) {
  return (
    <div className="card rounded-5" style={{ width: "30rem" }}>
      <img src={imageSrc} alt={imageName} class="card-img-top" />
      <div className="card-body">
        <button
          type="button"
          className="btn btn-primary col-12 btn-lg"
          data-bs-toggle="modal"
          data-bs-target={`#${modalId}`}
        >
          {buttonText}
        </button>
        <div
          className="modal fade"
          id={modalId}
          tabindex="-1"
          aria-labelledby={`${modalId}Label`}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div classNames="modal-header">
                <h1
                  classNames="modal-title fs-5 text-center w-100"
                  id={modalId}
                >
                  {modalTitle}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">{modalBody}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary rounded-pill"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcoCard;
