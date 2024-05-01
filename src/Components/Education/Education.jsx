import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div>
      <section id="work" className="container-fluid">
        <div className="main-heading">
          <h2>
            WORK/<span className="heading-orange">EXPERIENCE</span>
          </h2>
          {/* <div className="underline width150"></div> */}
        </div>
        {/* ------WORK SECTION----- */}
        <div className="work-section">
          <div className="work-item">
            <div className="work-time">
              <div>
                <span className="company">OPERATIVE</span>
                <span className="year">2018 - 2023</span>
              </div>
            </div>
            <div className="work-information">
              <div className="work-information__title">
                PRINCIPAL SOFTWARE ENGINEER
              </div>
              <div className="work-information__detail">
                <ul>
                  <li>
                    The project application enabled tv local stations to
                    streamline their advertising business logic.
                  </li>
                  <li>
                    Led a team of 4 front-end developers, ensuring 100% uptime
                  </li>
                  <li>
                    Guide and mentor to multiple juniors/seniors engineers.
                  </li>
                  <li>
                    Utilize the SCRUM Agile development methodology as a Team
                    lead
                  </li>
                  <li>Help define project scope, goals and deliverables.</li>
                  <li>
                    Build various Angular UI components.Implemented the
                    framework to support internationalization
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="work-item">
            <div className="work-time">
              <div>
                <span className="company">Alten Calsoft Labs</span>
                <span className="year">2013 - 2018</span>
              </div>
            </div>
            <div className="work-information">
              <div className="work-information__title">TECHNICAL LEAD</div>
              <div className="work-information__detail">
                <ul>
                  <li>
                    LSense is the project that caters to location services
                    within an organization/institute or retail stores. OpenLayer
                    APIs has been extensively used to create the elements
                    forming a network and depict customer statistics in a floor
                    or in an area at large.
                  </li>
                  <li>
                    Have build floor graphics, heat maps using D3 js and
                    OpenLayers 3.
                  </li>
                  <li>
                    Have extensively worked with client/customer locations for
                    requirement gathering and development work.
                  </li>
                  <li>
                    Have worked with various wi-fi devices and have set up the
                    configurations, user interfaces for the devices.
                  </li>
                  <li>Supported the legacy UI build in Adobe Flex.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* --- */}
          <div className="work-item">
            <div className="work-time">
              <div>
                <span className="company">CGI</span>
                <span className="year">2011 - 2012</span>
              </div>
            </div>
            <div className="work-information">
              <div className="work-information__title">
                Senior Software Engineer
              </div>
              <div className="work-information__detail">
                <ul>
                  <li>
                    The product is a Reporting tool. Investment firms can
                    read/download their daily/weekly/monthly reports of trading
                    accounts. The tool also provids information in the form of
                    charts and various graphical elements.
                  </li>
                  <li>
                    Have worked on the GUI interface of Report Admin web
                    application which is the user interface for report
                    generating tool. Have extensively worked on charts using
                    Flex.
                  </li>
                  <li>
                    Responsible for taking requirements from the client and
                    executing it.
                  </li>
                  <li>
                    Provided product maintenance support, deployment support.
                  </li>
                  <li>
                    Have Implemented minor business funtionalities on server
                    side using Java and Oracle queries
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* --- */}
          <div className="work-item">
            <div className="work-time">
              <div>
                <span className="company">Infosys Technologies Ltd</span>
                <span className="year">2005 - 2011</span>
              </div>
            </div>
            <div className="work-information">
              <div className="work-information__title">Technology Analyst</div>
              <div className="work-information__detail">
                <ul>
                  <li>
                    The project involved building an Integrated Toolset to
                    configure Cisco Network Building Mediator 3.1.A Mediator
                    provides network-based unified management for Facility and
                    Build and design the database for the team and worked as
                    full stack developer.
                  </li>
                  <li>
                    SIP PBX is a PBX (Public Branch Exchange) rendering service
                    to Nortel’s SIP clients. Preparation of test cases for
                    Services or Features(like Call Forward, Call transfer, Hunt
                    services) that are supported in a PBX
                  </li>
                  <li>
                    The project was involved in the development of an IMS
                    (Internet Protocol Multimedia System)-App-server for the
                    Nortel IMS solution.End-to-end project implementation
                    starting from Analysis, design, development, testing and
                    deployment.
                  </li>
                  <li>
                    Setup the IMS lab and develop the Application server to
                    support the Presence Integration and IPTV service.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------EDUCATION----- */}
      <section className="container-fluid">
        <div className="main-heading">
          <h2>
            EDUCATION/<span className="heading-orange">CERTIFICATIONS</span>
          </h2>
          {/* <div className="underline width150"></div> */}
        </div>      
        <div className="timeline">
          <div className="timeline-wrapper d-flex">
            <div className="timeline-yr">
              <span>2005</span>
            </div>
            <div className="timeline-info">
              <h3 className="text-l font-bold">
                Bachelor of computer science and engineering
              </h3>
              <p>Jorhat Engineering College, Assam</p>
            </div>
          </div>
          <div className="timeline-wrapper d-flex">
            <div className="timeline-yr">
              <span>2009</span>
            </div>
            <div className="timeline-info">
              <h3 className="text-l font-bold">High School</h3>
              <p>Cotton College, Assam</p>
            </div>
          </div>
          <div className="timeline-wrapper d-flex">
            <div className="timeline-yr">
              <span>1999</span>
            </div>
            <div className="timeline-info">
              <h3 className="text-l font-bold">10th Standard</h3>
              <p>Little Flower School, Assam</p>
            </div>
          </div>
          <div className="timeline-wrapper d-flex">
            <div className="timeline-yr">
              <span>Others</span>
            </div>
            <div className="timeline-info">
              <h3 className="text-l font-bold">Certifications</h3>
              <ul className="ml-5">
                <li className="list-disc">
                  Angular 2 Certification course by Edureka
                </li>
                <li className="list-disc">Fundamentals of UX by Google</li>
                <li className="list-disc">
                  PG DM - Search Engine Optimization (SEO)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
