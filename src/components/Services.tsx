import React from 'react';
import styles from './Services.module.css';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
// import { Style } from '@mui/icons-material';

const Services = () => {
const services = [
  { name: 'Web Devolopment', data:'Building responsive and user-friendly websites tailored to your needs.', icon: ViewInArIcon },
  { name: 'UI/UX Design', data:'Designing intuitive interfaces with seamless user experiences.', icon: DragIndicatorIcon },
  { name: 'Design Trends', data:'Applying modern design trends to craft fresh, engaging user experiences.', icon: DesignServicesIcon },
  { name: 'Customer Support', data:'Providing reliable, friendly support to ensure smooth client experiences.', icon: SupportAgentIcon },
  { name: 'Banding', data:'Designing strong brand identities that connect with your audience.', icon: AutoAwesomeMotionIcon },
  { name: 'Marketing ', data:'Developing creative marketing strategies to grow and promote your business.', icon: QueryStatsIcon },
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