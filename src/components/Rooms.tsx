import './Rooms.css';
import bambooHutsImg from '../assets/images/491563852.jpg';
import glampingTentsImg from '../assets/images/491563854.jpg';
import dormRoomsImg from '../assets/images/491563855.jpg';

const rooms = [
  {
    title: "Bamboo Huts",
    image: bambooHutsImg,
    features: ["Private & Rustic", "Fan-Cooled", "Mosquito Net", "Shared Bathrooms"],
    price: "From ₱800/night"
  },
  {
    title: "Glamping Tents",
    image: glampingTentsImg,
    features: ["Platform Tents", "Real Beds", "Garden Setting", "Nature Immersion"],
    price: "From ₱600/night"
  },
  {
    title: "Dorm Rooms",
    image: dormRoomsImg,
    features: ["Bamboo Bunk Beds", "Budget-Friendly", "Fan-Cooled", "Social Atmosphere"],
    price: "From ₱350/night"
  }
];

const Rooms = () => {
  return (
    <section className="section rooms">
      <div className="container">
        <h2 className="section-title">Sleep in Nature</h2>
        <div className="rooms-grid">
          {rooms.map((room, index) => (
            <div key={index} className="room-card">
              <div className="room-image-container">
                <img src={room.image} alt={room.title} className="room-image" loading="lazy" />
              </div>
              <div className="room-content">
                <h3 className="room-title">{room.title}</h3>
                <ul className="room-features">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="room-feature-item">• {feature}</li>
                  ))}
                </ul>
                <p className="room-price">{room.price}</p>
                <a href="#" className="btn btn-outline room-btn">Check Availability</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
