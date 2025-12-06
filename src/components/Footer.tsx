import './Footer.css';
import { getWhatsAppUrl } from '../constants/contact';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta">
          <h2 className="footer-title">Ready for Neverland?</h2>
          <div className="footer-buttons">
            <a href={getWhatsAppUrl()} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
            <a href="#" className="btn btn-outline">Book on Booking.com</a>
            <a href="#" className="btn btn-outline">Book on Agoda</a>
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
