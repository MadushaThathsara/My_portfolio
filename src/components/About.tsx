import React from 'react';
import styles from './About.module.css';
import img from '../images/WhatsApp Image 2025-05-25 at 00.15.55_29d24784.jpg';

const About = () => {
  return (
    <section id="about" className={styles.about_section}>
      <div className={styles.Image_content}><img src={img} alt="about" /></div>
      <div className={styles.about_content}>
        <h3>Who am I?</h3>
        <h2>I am Madusha Thathsara, MERN Stack Developer</h2>
        <p>
          I am a dedicated web developer and designer who loves creating beautiful and functional websites. I focus on building user-friendly experiences using modern technologies and clean code. My passion lies in combining creative design with technical solutions to make websites that look great and work smoothly. I'm always eager to learn new skills and take on exciting projects.
        </p>
        <div>
          <section>
          <h4>Name: </h4>
          <h4>Madusha Thathsara</h4>
          </section>
          <section>
            <h4>Age: </h4>
            <h4>22</h4>
          </section>
          <section>
            <h4>From: </h4>
            <h4>Matara, Sri Lanka</h4>
          </section>
          <section>
            <h4>Email: </h4>
            <h4>madushathathsara@994@gmail.com</h4>
          </section>
        </div>
        <button>
          <a href="">Download CV</a>
        </button>
      </div>
    </section>
  );
};

export default About; 