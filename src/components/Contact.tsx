import React from 'react';
import { Facebook, Instagram, Email, LinkedIn, GitHub, WhatsApp } from '@mui/icons-material';
import styles from './Contact.module.css';

const Contact = () => {
  const contact = [
    { name: 'Facebook', icon: Facebook, href: 'https://web.facebook.com/madusha.thathsara.54/?viewas=&should_open_composer=false&show_switched_toast=false&show_invite_to_follow=false&show_switched_tooltip=false&show_podcast_settings=false&show_community_review_changes=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/_._madush_._/' },
    { name: 'Email', icon: Email, href: 'mailto:madushathathsara994@gmail.com' },
    { name: 'LinkedIn', icon: LinkedIn, href: 'https://www.linkedin.com/in/madusha-thathsara/' },
    { name: 'GitHub', icon: GitHub, href: 'https://github.com/madushathathsara' },
    { name: 'WhatsApp', icon: WhatsApp, href: 'https://wa.me/94786348028' },
  ]
  return (
    <section id="contact" className={styles.contact_section}>
      <h2>Get In Touch</h2>
      <div className={styles.contact_content}>
        <p>Feel free to reach out to me for collaborations or opportunities!</p>
        <div className={styles.contact_links}>
          {contact.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a key={index} href={contact.href} target="_blank" rel="noopener noreferrer" aria-label={contact.name}>
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact; 