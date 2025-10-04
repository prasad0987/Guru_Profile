import React from "react";
import "./Home.css"; 
import heroImage from "../../asserts/hero2.png"; 

const Home = () => {
  return (
    <div className="home-page">

      {/* ---------- HERO SECTION ---------- */}
      <section className="hero">
        <div className="hero-text">
          <h1>Hi, I’m Gurubabu </h1>
          <p>
            A <strong>Java Fullstack Developer</strong> helping students and professionals 
            build strong coding skills, crack interviews, and grow in their tech careers.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn">Explore My Services</a>
            <a href="https://www.youtube.com/@V_Guru" target="_blank" rel="noreferrer" className="btn btn-outline">
              Visit My YouTube
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Developer Illustration" />
        </div>
      </section>

      {/* ---------- ABOUT SECTION ---------- */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          I’m passionate about teaching, mentoring, and building real-world 
          fullstack applications using <strong>Java, Spring Boot, React, and SQL</strong>.  
          My mission is to simplify complex tech concepts for students and 
          professionals through courses, blogs, and career support.
        </p>
      </section>

      {/* ---------- SERVICES SECTION ---------- */}
      <section className="services" id="services">
        <h2>My Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Interview Preparation</h3>
            <p>1:1 guidance to crack Java developer interviews with mock sessions.</p>
          </div>
          <div className="service-card">
            <h3>Courses & Mentorship</h3>
            <p>Step-by-step courses on Java, Spring Boot, Fullstack projects & more.</p>
          </div>
          <div className="service-card">
            <h3>Career Support</h3>
            <p>Resume building, job guidance, and skill mapping for IT roles.</p>
          </div>
          <div className="service-card">
            <h3>Blogs & Resources</h3>
            <p>Practical articles on coding, backend development, and industry trends.</p>
          </div>
        </div>
      </section>

      {/* ---------- YOUTUBE / COMMUNITY SECTION ---------- */}
      <section className="youtube" id="youtube">
        <h2>Join My Learning Community</h2>
        <p>
          I regularly post tutorials, tips, and project walkthroughs on my 
          <strong> YouTube channel</strong> to help students learn coding the right way.
        </p>
        <a href="https://www.youtube.com/@V_Guru" target="_blank" rel="noreferrer" className="btn">
          Subscribe on YouTube
        </a>
      </section>

      {/* ---------- CALL TO ACTION ---------- */}
      <section className="cta-footer">
        <h2>Let’s Grow Together 🚀</h2>
        <p>Whether you’re a beginner or preparing for interviews, I can guide you.</p>
        <a href="/contact" className="btn">Contact Me</a>
      </section>

    </div>
  );
};

export default Home;
