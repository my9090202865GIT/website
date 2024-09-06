import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container mt-5">
        <div className="row mb-4">
          <div className="col text-center">
            <h1 className="display-4">About Us</h1>
            <p className="lead">
              We are a dedicated team committed to providing high-quality
              solutions.
            </p>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6">
            <h2>Our Story</h2>
            <p>
              Our journey began in 2020 with a vision to deliver exceptional
              digital solutions. Over the years, we have grown into a
              full-fledged team of passionate professionals dedicated to
              building web and mobile applications that delight our clients and
              users.
            </p>
            <p>
              We believe in continuous learning and adapting to the latest
              technological trends. Our mission is to provide innovative
              solutions that make a real difference.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="./Agriculture-Sensor-Technology-n.png"
              alt="Our Story"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6 order-md-2">
            <h2>Our Mission</h2>
            <p>
              Our mission is to empower businesses by providing innovative
              technology solutions that drive growth, efficiency, and success.
              We are committed to delivering the best quality products and
              services that meet our clients' needs.
            </p>
          </div>
          <div className="col-md-6 order-md-1">
            <img
              src="./pexels_divinetechygirl.jpg"
              alt="Our Mission"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Meet the Team Section */}
        {/* <div className="row">
        <div className="col text-center mb-4">
          <h2>Meet the Team</h2>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member 1"
            className="img-fluid rounded-circle mb-2"
          />
          <h5>John Doe</h5>
          <p className="text-muted">CEO & Founder</p>
        </div>
        <div className="col-md-4 mb-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member 2"
            className="img-fluid rounded-circle mb-2"
          />
          <h5>Jane Smith</h5>
          <p className="text-muted">CTO</p>
        </div>
        <div className="col-md-4 mb-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member 3"
            className="img-fluid rounded-circle mb-2"
          />
          <h5>Mike Johnson</h5>
          <p className="text-muted">Lead Developer</p>
        </div>
      </div> */}
      </div>
    </section>
  );
};

export default About;
