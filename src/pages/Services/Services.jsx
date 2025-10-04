import React from "react";
import "./Services.css";
// import service1 from "../assets/service1.svg"; // Teaching
// import service2 from "../assets/service2.svg"; // Interview Support
// import service3 from "../assets/service3.svg"; // Full Stack Development
// import service4 from "../assets/service4.svg"; // Blogging

const Services = () => {
  return (
    <div className="services-page">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>
          Helping students and professionals achieve their goals with practical learning, real projects, and career support.
        </p>
      </section>

      <section className="services-cards">
        <div className="service-card">
          {/* <img src={service1} alt="Teaching" /> */}
          <h3>Online Courses & Training</h3>
          <p>
            Step-by-step learning in Java, Full Stack Development, and more with hands-on projects.
          </p>
        </div>

        <div className="service-card">
          {/* <img src={service2} alt="Interview Support" /> */}
          <h3>Interview & Job Support</h3>
          <p>
            Resume guidance, mock interviews, and real-world tips to land your dream job.
          </p>
        </div>

        <div className="service-card">
          {/* <img src={service3} alt="Full Stack Development" /> */}
          <h3>Full Stack Development</h3>
          <p>
            Building real projects using Java, Spring Boot, React.js, and modern tools for a strong portfolio.
          </p>
        </div>

        <div className="service-card">
          {/* <img src={service4} alt="Blogging" /> */}
          <h3>Tech Blogging & YouTube</h3>
          <p>
            Sharing knowledge via blogs and YouTube tutorials to help students and developers learn faster.
          </p>
        </div>
      </section>

      <section className="services-cta">
        <h2>Ready to Grow Your Skills?</h2>
        <a href="/contact" className="btn">Contact Me</a>
      </section>
    </div>
  );
};

export default Services;
