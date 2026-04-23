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
            <p>Web Developer | Designer | Creative Thinker</p>
            <button>
            <a href="#contact">Contact Me</a>
            </button>
        </div>
        <div className={styles.hero_contact}>
            <div>
                <h3>Email</h3>
                <a href="">
                    madushathathsara@994@gmail.com
                </a>
            </div>
            <div>
                <h3>Phone</h3>
                <a href="">
                    +94 78 634 8028
                </a>
            </div>
            <div>
                <h3>Location</h3>
                <a href="">
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