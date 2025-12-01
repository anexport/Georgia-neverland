import './Features.css';

const features = [
  {
    title: "Quiet Nature Escape",
    description: "Kalubian is peaceful, filled with coconut trees and away from the crowds.",
    icon: "🌴"
  },
  {
    title: "North-side Beaches",
    description: "Hidden coves, starfish, and clear water just a short walk away.",
    icon: "🌊"
  },
  {
    title: "Community Vibes",
    description: "Friendly staff, volunteers, and shared areas to meet fellow travelers.",
    icon: "🤝"
  },
  {
    title: "Great Value",
    description: "Budget huts, dorms, and simple island living that won't break the bank.",
    icon: "💰"
  }
];

const Features = () => {
  return (
    <section className="section features">
      <div className="container">
        <h2 className="section-title">Why Neverland?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
