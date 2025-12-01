import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1 className="hero-title">Georgia's Neverland Hostel</h1>
        <p className="hero-subtitle">Nature • Community • Malapascua’s Quiet North</p>
        <div className="hero-buttons">
          <a href="#" className="btn btn-primary">Message us on WhatsApp</a>
          <a href="#" className="btn btn-outline">Check Availability</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
