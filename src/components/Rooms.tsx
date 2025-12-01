import './Rooms.css';

const rooms = [
  {
    title: "Bamboo Huts",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2670&auto=format&fit=crop", // Placeholder
    features: ["Private & Rustic", "Fan-Cooled", "Mosquito Net", "Shared Bathrooms"],
    price: "From ₱800/night"
  },
  {
    title: "Glamping Tents",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2670&auto=format&fit=crop", // Placeholder
    features: ["Platform Tents", "Real Beds", "Garden Setting", "Nature Immersion"],
    price: "From ₱600/night"
  },
  {
    title: "Dorm Rooms",
    image: "https://images.unsplash.com/photo-1555854785-985c9e3a1e63?q=80&w=2670&auto=format&fit=crop", // Placeholder
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
