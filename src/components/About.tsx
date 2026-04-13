import type { FC } from 'react';
import styles from './About.module.css';

const About: FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <img 
              src="/Bhanuteja.jpeg" 
              alt="Gundeti Bhanuteja" 
              className={styles.profileImage}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <p className={styles.text}>
              I am a passionate software engineer with a deep love for building elegant solutions to complex problems. 
              My journey in tech began with a curiosity about how things work on the web, which evolved into a career 
              dedicated to creating user-centric digital experiences.
            </p>
            <p className={styles.text}>
              I specialize in front-end development, focusing on React and modern CSS techniques, 
              but I'm equally comfortable working across the full stack. I believe in clean code, 
              performance optimization, and continuous learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
