import React from 'react';
import styles from '../sections/Projects/ProjectsStyles.module.css';

function ProjectCard({ src, link, tag, title, description, stats, actionText, isDownload, url, urlBadge }) {
  // Split stats string by "·" into individual chips
  const statChips = stats ? stats.split('·').map(s => s.trim()).filter(Boolean) : [];

  return (
    <article className={styles.projectCard}>
      {/* Screenshot area */}
      <div className={styles.imageContainer}>
        <img src={src} alt={`${title} preview`} className={styles.cardImage} />
        {tag && <span className={styles.cardTag}>{tag}</span>}
      </div>

      {/* Mini browser topbar — rendered in CSS using portfolio's own design system */}
      {url && (
        <div className={styles.browserBar}>
          <div className={styles.browserDots}>
            <span className={`${styles.dot} ${styles.dotR}`}></span>
            <span className={`${styles.dot} ${styles.dotY}`}></span>
            <span className={`${styles.dot} ${styles.dotG}`}></span>
          </div>
          <div className={styles.browserUrl}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.lockSvg}>
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span>{url}</span>
          </div>
          {urlBadge && <span className={styles.browserBadge}>{urlBadge}</span>}
        </div>
      )}

      {/* Card body */}
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{description}</p>

        {statChips.length > 0 && (
          <div className={styles.statsRow}>
            {statChips.map((chip, i) => (
              <span key={i} className={styles.statChip}>{chip}</span>
            ))}
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
              width="15"
              height="15"
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