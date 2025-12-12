import { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "What are the check-in and check-out times?",
    answer: "Check-in is from 2:00 PM to 8:00 PM, and check-out is until 11:00 AM. If you arrive early, you're welcome to leave your bags and relax in our common area."
  },
  {
    question: "Is there Wi-Fi available?",
    answer: "Yes, we have free Wi-Fi available in the common areas. It's generally reliable, but please remember we are on an island!"
  },
  {
    question: "Can I rent a motorbike or park mine?",
    answer: "Yes, we can help arrange motorbike rentals. If you have your own, we have a safe parking area on the property."
  },
  {
    question: "Do you have vegetarian food options?",
    answer: "Absolutely! Our on-site restaurant offers a variety of delicious vegetarian and vegan dishes."
  },
  {
    question: "Can you help book tours and dives?",
    answer: "Yes! We can help organize thresher shark dives, island hopping tours, and snorkeling trips with trusted local operators."
  },
  {
    question: "Is the hostel good for solo travelers?",
    answer: "Definitely! We have a very social atmosphere with communal dinners and shared spaces, making it easy to meet other travelers."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFAQ(index);
    }
  };

  return (
    <section className="section faq" aria-labelledby="faq-heading">
      <div className="container">
        <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={index} className={`faq-item ${isActive ? 'active' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-expanded={isActive}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="faq-question-text">{faq.question}</h3>
                  <span className="faq-toggle" aria-hidden="true">
                    {isActive ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  hidden={!isActive}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
