import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container mt-5">
        <div className="row mb-4">
          <div className="col text-center">
            <h1 className="display-4">Contact Us</h1>
            <p className="lead">
              We'd love to hear from you! Reach out to us using the information
              below or fill out the form to send us a message.
            </p>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6">
            <div className="d-flex flex-column align-items-center">
              <div className="card text-center shadow-sm h-100 w-50">
                <div className="card-body">
                  <i className="fas fa-envelope fa-3x mb-3 text-warning"></i>
                  <h5 className="card-title">Email Us</h5>
                  <p className="card-text">contact@Indecabytesolutions.com</p>
                </div>
              </div>
              <div className="card text-center shadow-sm h-100 w-50">
                <div className="card-body">
                  <i className="fas fa-phone fa-3x mb-3 text-success"></i>
                  <h5 className="card-title">Call Us</h5>
                  <p className="card-text">+1 234 567 890</p>
                </div>
              </div>
              <div className="card text-center shadow-sm h-100 w-50">
                <div className="card-body">
                  <i className="fas fa-map-marker-alt fa-3x mb-3 text-secondary"></i>
                  <h5 className="card-title">Visit Us</h5>
                  <p className="card-text">123 Main Street, City, Country</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-center mb-4">
                  Send Us a Message
                </h5>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Enter the subject"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Your Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-secondary">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
