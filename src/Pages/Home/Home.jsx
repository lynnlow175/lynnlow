import Image from "../../img/lynn.JPG";

export default function HeroSection() {
  return (
    <div className="home">
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
          <a href="#hi" className="scroll-down">
            <button className="btn btn-primary">Get In Touch</button>
          </a>
        </div>
        <div className="hero-section-img">
          <img src={Image} alt="my-pic" />
        </div>
      </section>
      <section id="contact-me">
        <h1 id="hi">Get In Touch</h1>
        <div className="contact-me-form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
        </div>
        <button className="btn btn-primary">Send</button>
      </section>
    </div>
  );
}
