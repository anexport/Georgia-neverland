import './Food.css';
import foodImage from '../assets/images/491563849.jpg';

const Food = () => {
  return (
    <section className="section food">
      <div className="container food-container">
        <div className="food-image-wrapper">
          <img 
            src={foodImage} 
            alt="Delicious island food" 
            className="food-image"
            loading="lazy"
          />
        </div>
        <div className="food-content">
          <h2 className="section-title food-title">Island Flavors</h2>
          <p className="food-description">
            Our on-site restaurant serves up a mix of local Filipino favorites and Asian comfort food. 
            Whether you're craving a hearty breakfast after a sunrise swim or a cold beer at sunset, we've got you covered.
          </p>
          <ul className="food-list">
            <li>🍚 Authentic Filipino & Asian Dishes</li>
            <li>🥗 Vegetarian & Vegan Options Available</li>
            <li>🍻 Bar with Cold Beers & Tropical Cocktails</li>
            <li>🔥 Communal Dinners & BBQ Nights</li>
          </ul>
          <a href="#" className="btn btn-primary">View Menu</a>
        </div>
      </div>
    </section>
  );
};

export default Food;
