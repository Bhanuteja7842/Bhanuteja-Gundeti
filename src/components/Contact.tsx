import type { FC } from 'react';
import styles from './Contact.module.css';

const Contact: FC = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <div className={styles.grid}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Let's talk about your next project</h3>
            <p className={styles.infoText}>
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Email</span>
                <span className={styles.detailValue}>gundetibhanuteja012@gmail.com</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Social</span>
                <div className={styles.socials}>
                  <a href="https://www.linkedin.com/in/gundeti-bhanuteja-b30094388/">LinkedIn</a>
                  <a href="#">GitHub</a>
                  <a href="#">Twitter</a>
                </div>
              </div>
            </div>
          </div>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
