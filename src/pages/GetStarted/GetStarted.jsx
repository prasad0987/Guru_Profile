import React from "react";
import "./GetStarted.css";
// import heroImage from "../assets/hero1.png"; // optional hero image

const GetStarted = () => {
  return (
    <div className="getstarted-page">
      {/* Hero Section */}
      <section className="getstarted-hero">
        <div className="hero-content">
          <h1>Kickstart Your Tech Journey Today!</h1>
          <p>
            Learn Java, Full Stack Development, and boost your career with
            hands-on projects, interview support, and real-world guidance.
          </p>
          <a href="/contact" className="btn">Get Started Now</a>
        </div>
        <div className="hero-image">
          {/* <img src={heroImage} alt="Hero Illustration" /> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="getstarted-features">
        <h2>What You Will Get</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Step-by-Step Courses</h3>
            <p>Learn Java and Full Stack development from basics to advanced projects.</p>
          </div>
          <div className="feature-card">
            <h3>Interview Support</h3>
            <p>Mock interviews, resume guidance, and career tips for IT jobs.</p>
          </div>
          <div className="feature-card">
            <h3>Real Projects</h3>
            <p>Build hands-on projects to showcase in your portfolio and gain experience.</p>
          </div>
          <div className="feature-card">
            <h3>Blogs & Tutorials</h3>
            <p>Access curated blogs, YouTube tutorials, and learning resources.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="getstarted-cta">
        <h2>Ready to Take the Next Step?</h2>
        <a href="/contact" className="btn">Join Now</a>
      </section>
    </div>
  );
};

export default GetStarted;
