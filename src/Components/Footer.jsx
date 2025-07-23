import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer container-fluid bg-success">
      <div className="row">
        <div className="col-md-4">
          <div className="contact-info cell">
            <h3>Contact Us</h3>
            <p>
              <i className="fa fa-phone"></i> +1 (555) 555-5555
            </p>
            <p>
              <i className="fa fa-envelope"></i>
              <a className="mail" href="mailto:planetHabit@gmail.com">
                planetHabit@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="social-media cell">
            <h3>Follow Us</h3>
            <a
              className="fab fa-facebook"
              href=""
              target="_blank"
              title="Facebook"
              aria-label="Facebook"
            ></a>
            <a
              className="fab fa-instagram"
              href=""
              target="_blank"
              title="Visit our Instagram page"
              aria-label="Instagram"
            ></a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="copyright cell">
            <p>© 2025 Planet Habits. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
