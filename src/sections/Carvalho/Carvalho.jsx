import styles from './CarvalhoStyles.module.css';
import portraitImg from '../../assets/gabriel_portrait.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin light.png';
import linkedinDark from '../../assets/linkedin dark.png';
import githubLight from '../../assets/github light.png';
import githubDark from '../../assets/github dark.png';
import instagramLight from '../../assets/instagram light.png';
import instagramDark from '../../assets/instagram.png';
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
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;

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
              <a href="https://www.instagram.com/cttbiel/" target="_blank" rel="noreferrer" aria-label="Instagram" className={styles.socialBtn}>
                <img src={instagramIcon} alt="Instagram" />
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
        </div>
      </div>
    </section>
  );
}

export default Carvalho;