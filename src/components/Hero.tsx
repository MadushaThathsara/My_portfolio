import React from 'react';
import styles from './Hero.module.css';
import img from '../images/my3.png'

const Hero = () => {
  return (
    <section id="hero" className={styles.hero_section}>
      <div className={styles.hero_content}>
        <div className={styles.hero_content_text}>
            <p>Hi There. I am</p>
            <h1>MADUSHA <span>THATHSARA |</span></h1>
            <p>BICT Undergraduate | Full-Stack (MERN), Web & Mobile Application Development</p>
            <button>
            <a href="#contact">Contact Me</a>
            </button>
        </div>
        <div className={styles.hero_contact}>
            <div>
                <h3>Email</h3>
                <a href="mailto:madushathathsara994@gmail.com">
                    madushathathsara994@gmail.com
                </a>
            </div>
            <div>
                <h3>Phone</h3>
                <a href="tel:+94786348028">
                    +94 78 634 8028
                </a>
            </div>
            <div>
                <h3>Location</h3>
                <a 
                    href="https://maps.google.com/?q=Matara,+Sri+Lanka" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Matara, Sri Lanka
                </a>
            </div>
        </div>
      </div>
      <div className={styles.hero_image}>     
        <img src={img} alt="hero-image" />
      </div>
    </section>
  );
};

export default Hero; 