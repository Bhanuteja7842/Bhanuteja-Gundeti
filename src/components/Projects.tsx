import type { FC } from 'react';
import styles from './Projects.module.css';

interface ProjectsProps {
  onViewChange: (view: 'ecommerce' | 'navigation' | 'forms' | 'blog' | 'dashboard') => void;
}

const Projects: FC<ProjectsProps> = ({ onViewChange }) => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A premium noise-cancelling headphones product page with dynamic interaction.',
      tags: ['React', 'CSS Modules'],
      view: 'ecommerce' as const,
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000'
    },
    {
      title: 'Interactive Dashboard',
      description: 'Real-time analytics dashboard with dynamic data updates and activity logs.',
      tags: ['TypeScript', 'State Management'],
      view: 'dashboard' as const,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000'
    },
    {
      title: 'Blogging Platform',
      description: 'A complete CRUD application for creating, editing, and publishing blog posts.',
      tags: ['LocalStorage', 'CRUD'],
      view: 'blog' as const,
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000'
    },
    {
      title: 'Comprehensive Forms',
      description: 'Advanced form handling with validation and multiple input types.',
      tags: ['Validation', 'UX'],
      view: 'forms' as const,
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000'
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Selected Work</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={styles.card} 
              onClick={() => onViewChange(project.view)}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.cardHeader}>
                <img src={project.image} alt={project.title} className={styles.projectImage} />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <div style={{ marginTop: '1rem', color: '#4a90e2', fontWeight: 600, fontSize: '0.9rem' }}>
                  View Project →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
