import data from "../../data/index.json";
import "./MySkills.css";

export default function MySkills() {
  return (
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
  );
}
