import type { FC } from 'react';
import styles from './Hero.module.css';

const Hero: FC = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Building <span className={styles.highlight}>Digital Experiences</span> that Matter.
          </h1>
          <p className={styles.subtitle}>
            I am a Software Engineer focused on crafting high-performance, visually stunning web applications.
          </p>
          <div className={styles.cta}>
            <a href="#projects" className={styles.primaryBtn}>View My Work</a>
            <a href="#contact" className={styles.secondaryBtn}>Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
