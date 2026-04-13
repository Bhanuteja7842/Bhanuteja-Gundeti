import type { FC } from 'react';
import styles from './SimpleNavigation.module.css';

const SimpleNavigation: FC = () => {
  return (
    <div className={styles.container}>
      {/* Navigation Menu */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>BrandName</div>
        <ul className={styles.navLinks}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about-simple">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact-simple">Contact</a></li>
        </ul>
      </nav>

      {/* Sections */}
      <main className={styles.mainContent}>
        <section id="home" className={`${styles.section} ${styles.homeSection}`}>
          <h1>Home Section</h1>
          <p>This is the homepage of our simple navigation example. It's designed to be clear and easy to navigate.</p>
        </section>

        <section id="about-simple" className={`${styles.section} ${styles.aboutSection}`}>
          <h1>About Us</h1>
          <p>Learn more about our mission and values. We prioritize user experience in everything we build.</p>
        </section>

        <section id="services" className={`${styles.section} ${styles.servicesSection}`}>
          <h1>Our Services</h1>
          <p>Discover the range of solutions we offer to help you succeed in the digital world.</p>
        </section>

        <section id="contact-simple" className={`${styles.section} ${styles.contactSection}`}>
          <h1>Contact Us</h1>
          <p>Have questions? We'd love to hear from you. Reach out through our contact channels.</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Simple Navigation Task. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SimpleNavigation;
