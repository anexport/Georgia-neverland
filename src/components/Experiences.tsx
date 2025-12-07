import './Experiences.css';
import snorkelingImg from '../assets/images/snorkeling.webp';
import snorkelingJpgImg from '../assets/images/snorkeling.jpg';
import thresherSharkImg from '../assets/images/491563858.jpg';
import villageLifeImg from '../assets/images/491563856.jpg';

const experiences = [
  {
    title: "Snorkelling North Beach",
    image: snorkelingJpgImg,
    description: "Discover vibrant coral reefs and swim with starfish just steps from the hostel."
  },
  {
    title: "Thresher Shark Diving",
    image: snorkelingImg,
    description: "Malapascua is famous for thresher sharks. We can help organize your dives."
  },
  {
    title: "Village Life",
    image: villageLifeImg,
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
