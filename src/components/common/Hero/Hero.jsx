import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">

        <h1>
          AI Powered
          <span> Code Reviewer</span>
        </h1>

        <p>
          Analyze your source code using Google Gemini AI.
          Receive intelligent feedback, suggestions,
          best practices and an overall quality score.
        </p>

      </div>
    </section>
  );
}

export default Hero;