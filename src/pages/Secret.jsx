import "../App.css";

export default function Secret() {
  return (
    <div className="page secret-hideout" data-aos="fade-up">
      <div className="secret-box">
        <h1 className="section-title">You found the hideout</h1>
        <p className="section-text" style={{textAlign: "center"}}>
          Welcome, explorer. This space is just for the curious.<br />
          You’ve earned a cookie 🍪 (but it’s imaginary).
        </p>
      </div>
    </div>
  );
}
