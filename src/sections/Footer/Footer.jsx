import styles from './FooterStyles.module.css';
import { useContext } from 'react';
import { LanguageContext } from '../../common/LanguageContext';

function Footer() {
  const { texts } = useContext(LanguageContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer id='footer' className={styles.container}>
      <p>
        &copy; {currentYear} Gabriel Carvalho. <br className={styles.breakMobile} />
        {texts.footer.rights}
      </p>
    </footer>
  );
}

export default Footer;