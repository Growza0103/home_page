import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../styles/AboutPage.module.css";
import avocadoBottle from "../assets/farm3.jpg"; // First section image
import smallLeafImage from "../assets/wine.jpg"; // Small image between sections
import avocadoFarm from "../assets/grapes2.jpg"; // Second section image
import imageOne from "../assets/flower.jpg"; // Update with actual image paths
import imageTwo from "../assets/farm2.jpg"; // Update with actual image paths

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: false, // Ensures animations replay when scrolling back
      mirror: true, // Replays animation when scrolling up
    });
  }, []);

  return (
    <div>
      {/* First Section (Text Left, Image Right) */}
      <section className={styles.aboutUs}>
        <div className={styles.textContainer} data-aos="fade-up">
          <div className={styles.symbol}>✦</div>
          <h1>Premium Avocado Oil from the sun-kissed farms of Mexico</h1>
          <p>
            We've embarked on a journey inspired by nature’s richness and the 
            incredible benefits of avocado oil. Our brand is a celebration of 
            purity, flavor, and well-being.
          </p>
          <button className={styles.buyNow}>Buy Now</button>
        </div>
        <div className={styles.imageContainer1} data-aos="fade-left">
          <img src={avocadoBottle} alt="Avocado Oil Bottle" />
        </div>
      </section>

      {/* Second Section (Image Left, Small Image, Text Right) */}
      <section className={styles.farmToTable}>
        <div className={styles.imageContainer} data-aos="fade-right">
          <img src={avocadoFarm} alt="Avocado Farm" />
        </div>
        <div className={styles.smallImageContainer} data-aos="zoom-in">
          <img src={smallLeafImage} alt="Decorative Leaf" />
        </div>
        <div className={styles.textContainer} data-aos="fade-up">
          <h2>Farm to Table</h2>
          <p>
            The avocados are grown in Michoacán and bottled in India.  
            We only source 100% pure and unrefined avocado oil.  
            The avocados are hand-sorted, never over-processed, to give you the purest emerald green oil.  
            We deliver products that have maximum nutritional value and minimal environmental impact.
          </p>
        </div>
      </section>

      {/* Third Section (Text Left, Image Right) */}
      <section className={styles.imageGridSection}>
        <div className={styles.textContainer} data-aos="fade-up">
          <h2>Pure & Sustainable Farming</h2>
          <p>
            Our commitment to sustainable farming ensures that every product we
            deliver is of the highest quality. We work closely with local farmers
            to bring the freshest, most natural products to your table.
          </p>
        </div>
        <div className={styles.imageContainer} data-aos="fade-left">
          <img src={imageTwo} alt="Sustainable farming" />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
