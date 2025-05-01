import styles from './ContactStyles.module.css';
import { useContext } from 'react';
import { LanguageContext } from '../../common/LanguageContext';

function Contact() {

    const { texts } = useContext(LanguageContext);

  return (
    <section id='contact' className={styles.container} >
        <h1 className='sectionTitle' >{texts.contact.title}</h1>
        <form action="https://formspree.io/f/mwpldkae" method="POST">
            <div className='formGroup'>
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input type="text" name="name" id="name" placeholder={texts.contact.name} required/>
            </div>


            <div className='formGroup'>
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input type="text" name="email" id="email" placeholder={texts.contact.email} required/>
            </div>


            <div className='formGroup'>
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea type="text" name="message" id="message" placeholder={texts.contact.message} required></textarea>
            </div>

            <input type="submit" className='hover btn' value={texts.contact.submit} />
        </form>
    </section>
  );
}

export default Contact