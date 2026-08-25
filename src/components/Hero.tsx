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
                <a href="mailto:madushathathsara994@gmail.com" target="_blank" >
                  <h3>Email</h3>
                  <p>madushathathsara994@gmail.com</p>
                </a>
            </div>
            <div>
                <a href="tel:+94786348028" target="_blank" >
                  <h3>Phone</h3>
                  <p>+94 78 634 8028</p>
                </a>
            </div>
            <div>
                <a 
                    href="https://maps.google.com/?q=Matara,+Sri+Lanka" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                  <h3>Location</h3>
                  <p>Matara, Sri Lanka</p>
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