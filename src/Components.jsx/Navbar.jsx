import React from 'react'



function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#home">
          <span className="text-primary">Planet Habits</span>
          <img src="/images/logo.png" alt="Planet Habits Logo" />
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
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
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
                    <a className="dropdown-item" href="habit-tracker-dashboard.html">
                      Habit Tracker Dashboard
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="my-progress.html">
                      My Progress
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="settings1.html">
                      Settings/Preferences
                    </a>
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
