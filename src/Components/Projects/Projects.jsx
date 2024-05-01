import React from "react";
import "./Projects.css";
import bookmark from "../../assets/projects/bookmark.png";
import booking from "../../assets/projects/booking.png";
import protfolio from "../../assets/projects/protfolio.png";

const Projects = () => {
  const myStyle = {
    color: "white",
  };

  return (
    <section id="projects" className="container-fluid">
      <div className="main-heading">
        <h2 style={myStyle}>PROJECTS</h2>
      </div>
      <div className="row mt-3">
        <div className="col-md-4 project-item">
          <div className="card">
            <img src={bookmark} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Bookmark landing page</h5>
              {/* <h6 className="card-subtitle mb-2 text-body-secondary">
                A project by Frontend Mentor
              </h6> */}
              <p className="card-text">
                A landing page created using scss, html and Javascript
              </p>
              <div className="tools">
                <span className="tools-item">SCSS</span>
                <span className="tools-item">HTML</span>
                <span className="tools-item">Javascript</span>
              </div>
              <div className="action-links">
                <a
                  href="https://djonali.github.io/bookmark-landing-page-main/"
                  className="card-link"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Djonali/bookmark-landing-page-main"
                  className="card-link"
                >
                  Git Hub
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 project-item">
          <div className="card">
            <img src={booking} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Design for dog walking app</h5>
              <p className="card-text">
                The focus of the project was to achieve the beautiful CSS
                styling
              </p>
              <div className="tools">
                <span className="tools-item">SCSS</span>
                <span className="tools-item">HTML</span>
                <span className="tools-item">Javascript</span>
              </div>
              <div className="action-links">
                <a
                  href="https://djonali.github.io/chat-app-css-illustration/"
                  className="card-link"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Djonali/chat-app-css-illustration"
                  className="card-link"
                >
                  Git Hub
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 project-item">
          <div className="card">
            <img src={protfolio} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Protfolio website</h5>
              <p className="card-text">Frontend Developer protfolio website</p>
              <div className="tools">
                <span className="tools-item">BOOTSTRAP</span>
                <span className="tools-item">REACT JS</span>
                <span className="tools-item">EMAIL JS</span>
                <span className="tools-item">FRAMER MOTION</span>
              </div>
              <div className="action-links">
                <a
                  href="https://djonali.github.io/chat-app-css-illustration/"
                  className="card-link"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Djonali/chat-app-css-illustration"
                  className="card-link"
                >
                  Git Hub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
