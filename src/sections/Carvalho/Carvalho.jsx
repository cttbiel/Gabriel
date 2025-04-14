import styles from './CarvalhoStyles.module.css';
import spideygab from '../../assets/spideygab.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import CV from '../../assets/cv.pdf';
import {useTheme} from '../../common/ThemeContext';

function Carvalho() {
  const { theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;

  return <section id='carvalho' className={styles.container}>
    <div className={styles.colorModeContainer}> 
      <img className={styles.carvalho} src={spideygab} alt="Profile Picture of Gabriel Carvalho" />
      <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
    </div>
    
    <div className={styles.info}>
      <h1 >Gabriel <br /> Carvalho</h1>
      <h2>Software Engineer</h2>
      <span>
        <a href="https://linkedin.com/in/cttbiel/" target="_blank">
        <img src={linkedinIcon} alt="LinkedIn Icon" />
        </a>

        <a href="https://github.com/cttbiel/" target="_blank">
        <img src={githubIcon} alt="GitHub Icon" />
        </a>

        <a href="https://twitter.com/cttbiel/" target="_blank">
        <img src={twitterIcon} alt="Twitter Icon" />
        </a>

      </span>
      <p className={styles.description}>Passionate for developing modern software solutions.</p>

      <a href={CV} download>
        <button className="hover">Resume</button>
      </a>
    </div>
  </section>;

    
}

export default Carvalho