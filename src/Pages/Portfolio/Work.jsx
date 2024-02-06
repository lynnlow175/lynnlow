import data from "../../data/index.json";
import "./Work.css";

export default function Work() {
  return (
    <div className="exp">
      <section className="work-section">
        <h2 className="work-heading">Work Exprience</h2>
        <div className="work-container">
          {data.work.map((work) => (
            <div className="work-box" key={work.id}>
              <div className="org-logo">
                <img src={work.src} alt={work.name} />
              </div>
              <div className="work-desc">
                <h3>{work.title}</h3>
                <p>{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="skills-section">
        <h2 className="heading">My Skills</h2>
        <div className="skills-container">
          {data.skills.map((skill) => (
            <div className="skill-box" key={skill.id}>
              <img src={skill.src} alt={skill.name} />
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
