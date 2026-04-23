import React from 'react';
import styles from './Projects.module.css';
import chatify from '../images/chatify.png';
import { on } from 'events';

const Projects = () => {
  const projects = [
    { name: 'Chatify',data:'Online Chat Application', img: chatify, link:'https://chat-app-9hpg.onrender.com/login' },
    { name: 'Project 2',data:'This project about', img: chatify },
    { name: 'Project 3',data:'This project about', img: chatify }
  ];

  return (
    <section id="projects" className={styles.projects_section}>
      <h2>My <span>Projects</span></h2>
      <div className={styles.projects_container}>
      <div className={styles.projects_grid}>
        {projects.map((project, index) => (
          <div className={styles.project_card} key={`${project.name}-${index}`}
          onClick={() => window.open(project.link, '_blank')}
          >
            <div>
              <h3>{project.name}</h3>
              <p>{project.data}</p>
            </div>
            <div>
              <img src={project.img} alt={project.name} />
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Projects; 