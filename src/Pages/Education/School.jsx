import "./School.css";
export default function School() {
  return (
    <section className="education-section">
      <h1 className="education-title">My Education Journey...</h1>
      <div className="university">
        <img
          className="nus"
          src="https://s3.eu-west-1.amazonaws.com/presspage-production-content/uploads/2580/national_day_education-1-759360.jpg"
        />
        <p>
          This is the National Univeristy of Singapore and I study Computer
          Science here!
        </p>
      </div>
      <div className="junior-college">
        <img
          className="hci"
          src="https://upload.wikimedia.org/wikipedia/commons/2/29/Hwa_Chong_Institution_Clock_Tower_and_Tan_Kah_Kee_Statue.jpg"
        />
        <p>This is Hwa Chong Junior College and I studied here for 2 years!</p>
      </div>
    </section>
  );
}
