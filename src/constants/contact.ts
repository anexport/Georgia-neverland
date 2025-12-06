const WHATSAPP_PHONE = '639692186943';
const WHATSAPP_MESSAGE = "Hello! I'm interested in booking at Georgia's Neverland Hostel.";

export const getWhatsAppUrl = (): string => {
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
};

