import './Experiences.css';

const experiences = [
  {
    title: "Snorkelling North Beach",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670&auto=format&fit=crop", // Placeholder
    description: "Discover vibrant coral reefs and swim with starfish just steps from the hostel."
  },
  {
    title: "Thresher Shark Diving",
    image: "https://images.unsplash.com/photo-1560275619-4662e36fa65c?q=80&w=2600&auto=format&fit=crop", // Placeholder
    description: "Malapascua is famous for thresher sharks. We can help organize your dives."
  },
  {
    title: "Village Life",
    image: "https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?q=80&w=2670&auto=format&fit=crop", // Placeholder
    description: "Immerse yourself in the local culture, join small gatherings, and meet the friendly locals."
  }
];

const Experiences = () => {
  return (
    <section className="section experiences">
      <div className="container">
        <h2 className="section-title">Explore & Experience</h2>
        <div className="experiences-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-image-container">
                <img src={exp.image} alt={exp.title} className="experience-image" loading="lazy" />
                <div className="experience-overlay">
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-description">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
