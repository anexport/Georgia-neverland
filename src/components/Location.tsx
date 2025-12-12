import './Location.css';
import GoogleMapsIcon from './icons/GoogleMapsIcon';

const Location = () => {
  return (
    <section className="section location">
      <div className="container">
        <h2 className="section-title">How to Find Us</h2>
        <div className="location-content">
          <div className="location-map">
            <iframe
              src="https://maps.google.com/maps?q=Georgia's%20Neverland%20Hostel%20Malapascua&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
          <div className="location-details">
            <h3 className="location-subtitle">Getting Here</h3>
            <p className="location-text">
              From Cebu City, take a bus or van to Maya Port (3-4 hours). From Maya Port, take a public boat to Malapascua Island (30 mins).
              Once on the island, you can walk or take a motorbike taxi (habal-habal) to Kalubian in the north.
            </p>
            <div className="distance-chips">
              <span className="chip">🚶 5 min walk to North Beach</span>
              <span className="chip">🛵 10 min ride to Bounty Beach</span>
              <span className="chip">🦈 20 min boat to Monad Shoal</span>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=Georgia's+Neverland+Hostel+Malapascua" target="_blank" rel="noopener noreferrer" className="btn btn-outline location-btn">
              <GoogleMapsIcon />
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
