import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We are a team of passionate developers providing high-quality
              solutions for web and mobile applications. Our focus is on
              delivering user-friendly and efficient software.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a
                  href="https://facebook.com"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </li>
              <li className="me-3">
                <a
                  href="https://twitter.com"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-3">
          <p className="mb-0">
            © 2024 Indecabyte solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
