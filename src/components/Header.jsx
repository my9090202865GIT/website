import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Header = () => {
  return (
    <header id="header" className="fixed-top header-scrolled bg-dark">
      <div className="container  d-flex align-items-center justify-content-between ">
        <h1 className="logo">
          <Link to={"/"}>
            <img
              src="./Indecabyte_solutions.png"
              alt=""
              style={{ maxHeight: "80px" }}
              className="  w-50 bg-dark"
              id="logo"
            />
          </Link>
        </h1>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
