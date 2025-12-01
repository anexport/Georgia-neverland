import './Location.css';

const Location = () => {
  return (
    <section className="section location">
      <div className="container">
        <h2 className="section-title">How to Find Us</h2>
        <div className="location-content">
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123456789!2d124.123456!3d11.345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDIwJzQ0LjQiTiAxMjTCsDA3JzI0LjQiRQ!5e0!3m2!1sen!2sph!4v1600000000000!5m2!1sen!2sph"
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
            <a href="https://goo.gl/maps/placeholder" target="_blank" rel="noopener noreferrer" className="btn btn-outline location-btn">
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
