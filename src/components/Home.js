import React from "react";
import About from "./About";
import Contact from "./Contact";
const Home = () => {
  return (
    <>
      <section id="home" className="home text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to Indecabyte solutions</h1>
          <p className="lead">We provide solutions for Software and hardware</p>
          <a href="#services" className="btn btn-light btn-lg mt-3">
            Learn More
          </a>
        </div>
      </section>

      <section id="services" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Software Development</h5>
                  <p className="card-text">
                    We provide custom software solutions to meet your business
                    needs, ensuring scalability and security.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Hardware Solutions</h5>
                  <p className="card-text">
                    From servers to networking equipment, we offer a full range
                    of hardware products and installation services.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">IT Consulting</h5>
                  <p className="card-text">
                    Our experts provide strategic consulting to help your
                    business leverage the latest technology trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About></About>
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2 className="text-center mb-4">Our Happy Clients</h2>
              <p className="text-center">
                They trust us, and we keep giving them reasons to.
              </p>
            </div>
            <div className="col-md-8">
              <div className="row justify-content-center align-items-center">
                <div className="col-md-2 col-sm-4 col-6 mb-4">
                  <img
                    src="https://www.biztechcs.com/wp-content/themes/biztech/dist/images/Biztech__Logo.svg"
                    alt="Client 1"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-2 col-sm-4 col-6 mb-4">
                  <img
                    src="https://voyaretirement.voya.com/static/ingwin/images/logo_mv.png"
                    alt="Client 2"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-2 col-sm-4 col-6 mb-4">
                  <img
                    src="https://assets.corteva.com/is/image/Corteva/CortevaLegal_HorColor_RGB_no_tagline"
                    alt="Client 3"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-2 col-sm-4 col-6 mb-4">
                  <img
                    src="./ShivVerse.jpg"
                    alt="Client 4"
                    className="img-fluid"
                  />
                  <p className="text-center">Shiv Verse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="text-center mb-4">What Our Clients Say</h2>
          <div
            id="testimonialsCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card text-center">
                  <div className="card-body">
                    <p className="card-text">
                      "Indecabyte solutions provided us with a top-notch
                      software solution that has greatly improved our
                      operational efficiency. The team was professional and
                      responsive throughout the project."
                    </p>
                    <h5 className="card-title">John Doe</h5>
                    <p className="card-subtitle mb-2 text-muted">
                      CEO, Biztech
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card text-center">
                  <div className="card-body">
                    <p className="card-text">
                      "We partnered with Indecabyte solutions for our hardware
                      infrastructure upgrade. Their expertise and attention to
                      detail were evident from start to finish. Highly
                      recommended!"
                    </p>
                    <h5 className="card-title">Jane Smith</h5>
                    <p className="card-subtitle mb-2 text-muted">
                      IT Manager, Voya Financial.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card text-center">
                  <div className="card-body">
                    <p className="card-text">
                      "The consulting services provided by Indecabyte solutions
                      helped us redefine our IT strategy. The insights and
                      recommendations were invaluable to our business growth."
                    </p>
                    <h5 className="card-title">Michael Johnson</h5>
                    <p className="card-subtitle mb-2 text-muted">
                      Director of Operations, Corteva.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialsCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialsCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      <Contact></Contact>
    </>
  );
};

export default Home;
