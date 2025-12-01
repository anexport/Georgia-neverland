import './Reviews.css';

const reviews = [
  {
    text: "The perfect place to disconnect. The bamboo huts are cozy and the staff makes you feel like family.",
    author: "Sarah J., UK"
  },
  {
    text: "Incredible value for money. The location is quiet and peaceful, away from the busy south.",
    author: "Marc D., Germany"
  },
  {
    text: "Loved the communal dinners! Great way to meet people. Highly recommend for solo travelers.",
    author: "Elena R., Spain"
  }
];

const Reviews = () => {
  return (
    <section className="section reviews">
      <div className="reviews-overlay"></div>
      <div className="container reviews-content">
        <div className="rating-badge">
          <span className="rating-score">8.9</span>
          <span className="rating-text">Fabulous</span>
        </div>
        <h2 className="section-title reviews-title">Guest Love</h2>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <p className="review-text">"{review.text}"</p>
              <p className="review-author">- {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
