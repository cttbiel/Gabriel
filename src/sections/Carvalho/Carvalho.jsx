import styles from './CarvalhoStyles.module.css';
import portraitImg from '../../assets/gabriel_portrait.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin light.png';
import linkedinDark from '../../assets/linkedin dark.png';
import githubLight from '../../assets/github light.png';
import githubDark from '../../assets/github dark.png';
import cttlabLogoBlue from '../../assets/cttlab_logo_blue.png';
import cttlabLogoWhite from '../../assets/cttlab_logo_white.png';
import CVen from '../../assets/Gabriel Carvalho Resume.pdf';
import CVfr from '../../assets/Gabriel Carvalho CV.pdf';
import CVpt from '../../assets/Gabriel Carvalho Curriculo.pdf';
import { useTheme } from '../../common/ThemeContext';
import { useContext } from 'react';
import { LanguageContext } from '../../common/LanguageContext';
import flagPT from '../../assets/brasil.png';
import flagEN from '../../assets/england.png';
import flagFR from '../../assets/france.png';

function Carvalho() {
  const { theme, toggleTheme } = useTheme();
  const { texts, toggleLanguage, nextFlag } = useContext(LanguageContext);

  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const cttlabIcon = theme === 'light' ? cttlabLogoBlue : cttlabLogoWhite;

  const flagIcons = {
    en: flagEN,
    pt: flagPT,
    fr: flagFR
  };
  const nextFlagIcon = flagIcons[nextFlag];

  const cvMap = {
    en: CVen,
    pt: CVpt,
    fr: CVfr
  };

  const currentCV = cvMap[texts.language] || CVpt;

  return (
    <section id='carvalho' className={styles.container}>
      {/* Top Controls Bar */}
      <div className={styles.topBar}>
        <div className={styles.brandPill}>
          <span className={styles.statusDot}></span>
          <span>Gabriel Carvalho</span>
        </div>
        <div className={styles.controlsGroup}>
          <button 
            type="button" 
            className={styles.controlBtn} 
            onClick={toggleTheme} 
            title="Alternar Tema / Toggle Theme"
            aria-label="Alternar Tema"
          >
            <img src={themeIcon} alt="Theme mode" />
          </button>
          <button 
            type="button" 
            className={styles.controlBtn} 
            onClick={toggleLanguage} 
            title="Mudar Idioma / Change Language"
            aria-label="Mudar Idioma"
          >
            <img src={nextFlagIcon} alt="Next language" />
          </button>
        </div>
      </div>

      {/* Main Hero Grid */}
      <div className={styles.heroGrid}>
        {/* Left / Info column */}
        <div className={styles.info}>
          <div className={styles.badge}>
            {texts.header.badge}
          </div>
          <h1 className={styles.name}>Gabriel Carvalho</h1>
          <h2 className={styles.role}>{texts.header.role}</h2>
          <p className={styles.description}>{texts.header.description}</p>

          <div className={styles.actions}>
            <a href={currentCV} download className={styles.resumeLink}>
              <button type="button" className={styles.primaryBtn}>{texts.header.resume}</button>
            </a>
            <div className={styles.socials}>
              <a href="https://linkedin.com/in/cttbiel/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={styles.socialBtn}>
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://github.com/cttbiel/" target="_blank" rel="noreferrer" aria-label="GitHub" className={styles.socialBtn}>
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://cttlab.vercel.app" target="_blank" rel="noreferrer" aria-label="CTTLAB" className={`${styles.socialBtn} ${styles.cttlabBtn}`}>
                <img src={cttlabIcon} alt="CTTLAB" className={styles.cttlabLogo} />
                <span>CTTLAB</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right / Photo Column */}
        <div className={styles.avatarWrapper}>
          <div className={styles.photoFrame}>
            <img 
              className={styles.portrait} 
              src={portraitImg} 
              alt="Gabriel Carvalho - Engenheiro de Computação & Software" 
            />
          </div>
        </div>
      </div>

      {/* Trajectory & Experience Cards */}
      <div className={styles.trajectoryContainer}>
        <div className={styles.trajectoryCard}>
          <div className={styles.trajHeader}>
            <span className={styles.companyTag}>GOL LINHAS AÉREAS</span>
            <span className={styles.techTag}>BPR · BI · AEROTECH TV</span>
          </div>
          <h3 className={styles.trajTitle}>{texts.header.golRole}</h3>
          <p className={styles.trajDesc}>{texts.header.golDesc}</p>
        </div>

        <div className={styles.trajectoryCard}>
          <div className={styles.trajHeader}>
            <span className={styles.companyTag}>CTTLAB</span>
            <span className={styles.techTag}>PERFORMANCE · CRO · META CAPI</span>
          </div>
          <h3 className={styles.trajTitle}>{texts.header.cttlabRole}</h3>
          <p className={styles.trajDesc}>{texts.header.cttlabDesc}</p>
          <div className={styles.trajLinks}>
            <a href="https://cttlab.vercel.app" target="_blank" rel="noreferrer" className={styles.trajLink}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              Site
            </a>
            <a href="https://www.instagram.com/cttlab/" target="_blank" rel="noreferrer" className={styles.trajLink}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              Instagram
            </a>
            <a href="https://linkedin.com/company/cttlab" target="_blank" rel="noreferrer" className={styles.trajLink}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carvalho;