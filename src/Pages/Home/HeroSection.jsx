import MySkills from "./MySkills";
import Image from "../../img/lynn.JPG";

export default function HeroSection() {
  return (
    <div>
      <section id="heroSection" className="hero-section">
        <div className="hero-section-content-box">
          <div className="hero-section-content">
            <p className="section-title">Hey, I'm Lynn</p>
            <h1 className="hero-section-title">
              <span className="hero-section-title-color">Full Stack</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero-section-description">
              I am a year 2 computer science student
            </p>
          </div>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero-section-img">
          <img src={Image} alt="image" />
        </div>
      </section>
      <MySkills />
    </div>
  );
}
