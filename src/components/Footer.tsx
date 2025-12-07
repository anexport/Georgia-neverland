import './Footer.css';
import { getWhatsAppUrl, BOOKING_COM_URL, AGODA_URL } from '../constants/contact';

const Footer = () => {
  return (
    <footer id="booking" className="footer">
      <div className="container">
        <div className="footer-cta">
          <h2 className="footer-title">Ready for Neverland?</h2>
          <div className="footer-buttons">
            <a href={getWhatsAppUrl()} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
            <a href={BOOKING_COM_URL} className="btn btn-outline" target="_blank" rel="noopener noreferrer">Book on Booking.com</a>
            <a href={AGODA_URL} className="btn btn-outline" target="_blank" rel="noopener noreferrer">Book on Agoda</a>
          </div>
        </div>
        <div className="footer-info">
          <p>© {new Date().getFullYear()} Georgia's Neverland Hostel</p>
          <p>Kalubian, Malapascua Island, Cebu, Philippines</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
