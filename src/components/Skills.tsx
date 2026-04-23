import React from 'react';
import styles from './Skills.module.css';
import imgReact from '../images/react-svgrepo-com.png';
import imgTypeScript from '../images/typescript-16-svgrepo-com.png';
import imgJavaScript from '../images/javascript-16-svgrepo-com.png';
import imgHtml from '../images/html5-01-svgrepo-com.png';
import imgCSS from '../images/css3-01-svgrepo-com.png';
import imgNodejs from '../images/node-js-svgrepo-com.png';
import imgExpress from '../images/express-svgrepo-com.png';
import imgMongoDB from '../images/mongodb-svgrepo-com.png';
import figma from '../images/figma-svgrepo-com.png';

const Skills = () => {
  const skills = [
    { name: 'React', img: imgReact },
    { name: 'TypeScript', img: imgTypeScript },
    { name: 'JavaScript', img: imgJavaScript },
    { name: 'Html', img: imgHtml },
    { name: 'CSS', img: imgCSS },
    { name: 'Node.js', img: imgNodejs },
    { name: 'Express', img: imgExpress },
    { name: 'MongoDB', img: imgMongoDB },
    { name: 'Figma', img: figma },
  ];

  return (
    <section id="skills" className={styles.skills_section}>
      <h2>My <span>Skills</span></h2>
      <main className={styles.skills_main}>
        <div className={styles.skills_container}>
          {[...skills, ...skills].map((skill, index) => (
            <div className={styles.skills_card} key={`${skill.name}-${index}`}>
              <div>
                <img src={skill.img} alt={skill.name} />
              </div>
              <div>
                <h3>{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Skills; 