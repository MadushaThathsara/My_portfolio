import React from 'react';
import { Facebook, Instagram, Email, LinkedIn, GitHub, WhatsApp } from '@mui/icons-material';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact_section}>
      <h2>Get In Touch</h2>
      <div className={styles.contact_content}>
        <p>Feel free to reach out to me for collaborations or opportunities!</p>
        <div className={styles.contact_links}>
          <a href="https://web.facebook.com/madusha.thathsara.54/?viewas=&should_open_composer=false&show_switched_toast=false&show_invite_to_follow=false&show_switched_tooltip=false&show_podcast_settings=false&show_community_review_changes=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook />
          </a>
          <a href="https://www.instagram.com/_._madush_._/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram />
          </a>
          <a href="mailto:madushathathsara994@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
            <Email />
          </a>
          <a href="https://www.linkedin.com/in/madusha-thathsara-24a398311" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedIn />
          </a>
          <a href="https://github.com/madushathathsara" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHub />
          </a>
          <a href="https://wa.me/94786348028" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <WhatsApp />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 