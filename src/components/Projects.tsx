import React from 'react';
import styles from './Projects.module.css';
import imgproject from '../images/download (17).jpeg';

const Projects = () => {
  const projects = [
    { name: 'Project 1',data:'This project about', img: imgproject },
    { name: 'Project 2',data:'This project about', img: imgproject },
    { name: 'Project 3',data:'This project about', img: imgproject }
  ];

  return (
    <section id="projects" className={styles.projects_section}>
      <h2>My <span>Projects</span></h2>
      <div className={styles.projects_container}>
      <div className={styles.projects_grid}>
        {projects.map((project, index) => (
          <div className={styles.project_card} key={`${project.name}-${index}`}>
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