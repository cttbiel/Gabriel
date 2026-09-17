import React from 'react';
import styles from '../sections/Projects/ProjectsStyles.module.css';

function ProjectCard({ src, link, tag, title, description, stats, actionText, isDownload }) {
  return (
    <article className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <img src={src} alt={`${title} preview`} className={styles.cardImage} />
        {tag && <span className={styles.cardTag}>{tag}</span>}
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{description}</p>
        
        {stats && (
          <div className={styles.statsPill}>
            <span>{stats}</span>
          </div>
        )}

        <div className={styles.cardFooter}>
          <a 
            href={link} 
            target="_blank" 
            rel="noreferrer" 
            download={isDownload ? true : undefined}
            className={styles.cardActionBtn}
          >
            <span>{actionText}</span>
            <svg 
              className={styles.actionIcon} 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {isDownload ? (
                <>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </>
              ) : (
                <>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </>
              )}
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;