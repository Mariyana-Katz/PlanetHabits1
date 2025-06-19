import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#home">Planet Habits
         {/* <img src="/images/logo.png" alt="Planet Habits Logo" /> */}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end bg-primary"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title fw-bold text-white" id="offcanvasNavbarLabel">
              Planet Habits
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://happyeconews.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Eco News
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#more"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <ul className="dropdown-menu bg-primary">
                  <li>
                    <Link className="dropdown-item" to="/dashboard">
                      Habit Tracker Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/progres">
                      My Progress
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/preferences">
                      Settings/Preferences
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <form className="d-flex mt-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
