import styles from './ContactStyles.module.css';
import { useContext } from 'react';
import { LanguageContext } from '../../common/LanguageContext';

function Contact() {
  const { texts } = useContext(LanguageContext);
  const c = texts.contact;

  return (
    <section id='contact' className={styles.container}>
      <h2 className='sectionTitle'>{c.title}</h2>
      <p className={styles.subtitle}>{c.subtitle}</p>

      <div className={styles.directContactPill}>
        <span className={styles.contactItem}>
          <span className={styles.contactIcon}>✉️</span>
          <a href="mailto:cttbiel@gmail.com">cttbiel@gmail.com</a>
        </span>
        <span className={styles.contactDivider}>•</span>
        <span className={styles.contactItem}>
          <span className={styles.contactIcon}>📍</span>
          <span>Belo Horizonte, MG</span>
        </span>
      </div>

      <form action="https://formspree.io/f/mwpldkae" method="POST" className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name" hidden>
            {c.name}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={c.name}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" hidden>
            {c.email}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={c.email}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" hidden>
            {c.message}
          </label>
          <textarea
            name="message"
            id="message"
            placeholder={c.message}
            required
            className={styles.textarea}
          ></textarea>
        </div>

        <button type="submit" className={styles.submitBtn}>
          {c.submit}
        </button>
      </form>
    </section>
  );
}

export default Contact;