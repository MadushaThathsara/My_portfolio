import React, { useEffect, useRef, useState } from 'react';
import styles from './Projects.module.css';
import chatify from '../images/chatify.png';
import staynest from '../images/staynest.png';
import TravelTrack from '../images/TravelTrack.jpg';
import ColorAssist from '../images/ColorAssist.jpg';
import AraliyaScents from '../images/Araliya Scents.png';
import GPACalculator from '../images/GPACalculator.png';
import NutriSnap from '../images/NutriSnap.png';

const Projects = () => {
  const projects = [
    { name: 'Chatify', data: 'Online Chat Application', img: chatify, link: 'https://github.com/MadushaThathsara/chat_app' },
    { name: 'StayNest', data: 'Online mobile Bording application UI/UX Design', img: staynest, link: 'https://www.behance.net/gallery/255623253/StayNest-Find-your-next-home-away-from-home' },
    { name: 'Travel Tracker', data: 'Tracking travel locations, messaging, and sending SOS alerts.', img: TravelTrack, link: 'https://github.com/RASHMIKA-LKI/TravelTrack'},
    { name: 'ColorAssist', data: 'Smart IoT-Based Color Identification & Safety Assistant System', img: ColorAssist },
    { name: 'Araliya Scents', data: 'Full-Stack Web Application (Group Project)', img: AraliyaScents, link:'https://github.com/nethara-vidmantha/araliya-scents-frontend' },
    { name: 'GPA Calculator', data: 'A web app for calculating and tracking student GPA.', img: GPACalculator, link:'https://github.com/MadushaThathsara/GPA-Calculator' },
    { name: 'NutriSnap', data: 'AI-Powered Nutrition Tracking Application ', img: NutriSnap, link:'https://github.com/MadushaThathsara/GYM' }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const isDraggingRef = useRef(false);

  // Mouse Wheel Vertical-to-Horizontal Scroll Listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault(); // Lock scroll to projects section (prevents page from scrolling up or down)
        container.scrollBy({
          left: e.deltaY * 3.5,
          behavior: 'auto'
        });
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsMouseDown(true);
    isDraggingRef.current = false;
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;

    if (Math.abs(x - startX) > 5) {
      isDraggingRef.current = true;
    }

    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleCardClick = (link?: string) => {
    if (!isDraggingRef.current && link) {
      window.open(link, '_blank');
    }
  };

  return (
    <section id="projects" className={styles.projects_section}>
      <h2>My <span>Projects</span></h2>
      <div 
        ref={containerRef}
        className={`${styles.projects_container} ${isMouseDown ? styles.dragging : ''}`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className={styles.projects_grid}>
          {projects.map((project, index) => (
            <div 
              className={styles.project_card} 
              key={`${project.name}-${index}`}
              onClick={() => handleCardClick(project.link)}
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