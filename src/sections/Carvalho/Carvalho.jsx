import styles from './CarvalhoStyles.module.css';
import spideygab from '../../assets/spideygab.png';
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
import {useTheme} from '../../common/ThemeContext';
import { useContext } from 'react';
import { LanguageContext } from '../../common/LanguageContext';
import flagPT from '../../assets/brasil.png';
import flagEN from '../../assets/england.png';
import flagFR from '../../assets/france.png';

function Carvalho() {
  const { theme, toggleTheme} = useTheme();
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

  const currentCV = cvMap[texts.language];

  return (
    <section id='carvalho' className={styles.container}>
      <div className={styles.colorModeContainer}> 
        <img className={styles.carvalho} src={spideygab} alt="Profile Picture of Gabriel Carvalho" />
        <div className={styles.iconWrapper}>
          <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
          <img className={styles.languageToggle} src={nextFlagIcon} alt="Switch language" onClick={toggleLanguage} />
        </div>
      </div>
    
      <div className={styles.info}>
        <h1 >Gabriel <br /> Carvalho</h1>
        <h2>{texts.header.role}</h2>
        <span>
          <a href="https://linkedin.com/in/cttbiel/" target="_blank">
        <img src={linkedinIcon} alt="LinkedIn Icon" />
        </a>

        <a href="https://github.com/cttbiel/" target="_blank">
        <img src={githubIcon} alt="GitHub Icon" />
        </a>

        <a href="https://www.instagram.com/cttbiel/" target="_blank">
        <img src={instagramIcon} alt="Instagram Icon" />
        </a>

      </span>
      <p className={styles.description}>{texts.header.description}</p>

        <a href={currentCV} download>
          <button className="hover">{texts.header.resume}</button>
        </a>
      </div>
    </section>
  );    
}

export default Carvalho;