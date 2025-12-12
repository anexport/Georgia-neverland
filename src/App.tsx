import { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Rooms from "./components/Rooms";
import Food from "./components/Food";
import Experiences from "./components/Experiences";
import Reviews from "./components/Reviews";
import Location from "./components/Location";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    });

    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="app">
      <Analytics />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header>
        <Hero />
      </header>
      <main id="main-content">
        <div className="fade-in-section">
          <Features />
        </div>
        <div className="fade-in-section">
          <Rooms />
        </div>
        <div className="fade-in-section">
          <Food />
        </div>
        <div className="fade-in-section">
          <Experiences />
        </div>
        <div className="fade-in-section">
          <Reviews />
        </div>
        <div className="fade-in-section">
          <Location />
        </div>
        <div className="fade-in-section">
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
