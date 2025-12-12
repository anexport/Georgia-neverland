const WHATSAPP_PHONE = '639692186943';
const WHATSAPP_MESSAGE = "Hello! I'm interested in booking at Georgia's Neverland Hostel.";

export const getWhatsAppUrl = (): string => {
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
};

export const BOOKING_COM_URL = 'https://www.booking.com/hotel/ph/georgias-neverland-hostel.html';
export const AGODA_URL = 'https://www.agoda.com/georgia-s-neverland-hostel/hotel/cebu-ph.html?selectedproperty=45887838';
export const INSTAGRAM_URL = 'https://www.instagram.com/georgiasneverlandhostel/';

