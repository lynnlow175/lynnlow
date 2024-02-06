import "./School.css";
export default function School() {
  return (
    <section className="education-section">
      <h1 className="education-title">My Education Journey...</h1>
      <div className="university">
        <img
          className="image"
          src="https://s3.eu-west-1.amazonaws.com/presspage-production-content/uploads/2580/national_day_education-1-759360.jpg"
        />
        <p>
          This is the National Univeristy of Singapore and I am studying here
          now!
        </p>
      </div>
      <div className="junior-college">
        <p>This is Hwa Chong Junior College and I studied here for 2 years!</p>
        <img
          className="image"
          src="https://images.squarespace-cdn.com/content/v1/606a6979b5fef3342d8dd877/1620093154060-1ABR13J6XV5CHEUM26OV/Copy+of+_DSC0013-3.jpg"
        />
      </div>
      <div className="high-school">
        <img
          className="image"
          src="https://www.santarli.com/wp-content/uploads/2021/02/Nanyang-Girls3.jpg"
        />
        <p>This is Nanyang Girls High School and I studied here for 4 years!</p>
      </div>
    </section>
  );
}
