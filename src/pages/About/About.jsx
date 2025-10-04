import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Me</h1>
        <p>
          I’m a passionate <strong>Java Full Stack Developer</strong> dedicated to 
          helping students and professionals grow in their careers with practical 
          knowledge, real-world projects, and interview support.
        </p>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="about-card">
          <h2>Who I Am</h2>
          <p>
            With experience in <b>Java, Spring Boot, Hibernate, MySQL, React.js, 
            and Full Stack Development</b>, I’ve worked on multiple projects 
            that solve real problems. I also mentor students and professionals 
            preparing for IT jobs, guiding them with hands-on coding, system 
            design, and interview skills.
          </p>
        </div>

        <div className="about-card">
          <h2>What I Do</h2>
          <ul>
            <li>🚀 Teach **Java & Full Stack Development** step by step.</li>
            <li>🎯 Provide **Interview & Job Support** with mock sessions.</li>
            <li>✍️ Share knowledge through **blogs, videos & tutorials**.</li>
            <li>💡 Help build **real-world projects** to boost portfolios.</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>My Mission</h2>
          <p>
            To empower students and working professionals by providing 
            <b>practical, industry-level learning</b> that builds confidence 
            and helps them land the right opportunities.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Want to Learn & Grow With Me?</h2>
        <p>
          Join my journey — explore my courses, read my blogs, or connect with me 
          for career guidance and interview preparation.
        </p>
        <a href="/contact" className="btn">Get in Touch</a>
      </section>
    </div>
  );
};

export default About;
