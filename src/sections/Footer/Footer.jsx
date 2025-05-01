import styles from './FooterStyles.module.css';
import { useContext } from 'react';
import { LanguageContext } from '../../common/LanguageContext';

function Footer() {

  const { texts } = useContext(LanguageContext);

  return (
    <section id='footer' className={styles.container} >
        <p>&copy; 2025 Gabriel Carvalho. <br />
          {texts.footer.rights}
        </p>
    </section>
  )
}

export default Footer