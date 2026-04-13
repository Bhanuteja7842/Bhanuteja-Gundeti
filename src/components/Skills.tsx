import type { FC } from 'react';
import styles from './Skills.module.css';

const Skills: FC = () => {
  const skillList = [
    'HTML5 & CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 
    'Express', 'PostgreSQL', 'Git & GitHub', 'REST APIs', 'UI/UX Design'
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Technical Skills</h2>
        <div className={styles.skillGrid}>
          {skillList.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
