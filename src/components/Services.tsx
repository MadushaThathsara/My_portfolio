import React from 'react';
import styles from './Services.module.css';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import LayersIcon from '@mui/icons-material/Layers';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import StorageIcon from '@mui/icons-material/Storage';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DatabaseIcon from '@mui/icons-material/Storage';

const Services = () => {
const services = [
  { name: 'Full Stack (MERN) Development', data:'Building complete web applications from frontend interfaces to backend systems and databases.', icon: LayersIcon },
  { name: 'Frontend Development', data:'Creating responsive, modern, and user-friendly interfaces using React, TypeScript, and modern web technologies.', icon: CodeIcon },
  { name: 'Backend Development', data:'Developing secure and scalable backend services, APIs, and server-side applications using Node.js and Java.', icon: ViewInArIcon },
   { name: 'Web Devolopment', data:'Building responsive and user-friendly websites tailored to your needs.', icon: LanguageIcon },
  { name: 'Mobile App Development', data:'Building cross-platform mobile applications with React Native and modern mobile technologies.', icon: PhoneAndroidIcon },
  { name: 'Database Management ', data:'Designing and managing efficient databases using MongoDB and other database technologies.', icon: DatabaseIcon },
];

  return (
    <section id="services" className={styles.services_section}>
      <h2>My <span>Services</span></h2>
      <div className={styles.services_grid}>
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div className={styles.service_card} key={`${service.name}-${index}`}>
              <div>
                <Icon className={styles.service_icon} />
              </div>
              <h3>{service.name}</h3>
              <p>{service.data}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services; 