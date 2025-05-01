import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import { useContext } from 'react';
import { LanguageContext } from '../../common/LanguageContext';

function Skills() {
  const {theme} = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  const { texts } = useContext(LanguageContext);

  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>{texts.skills.title}</h1>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="HTML" />
          <SkillList src={checkMarkIcon} skill="CSS" />
          <SkillList src={checkMarkIcon} skill="JavaScript" />
          <SkillList src={checkMarkIcon} skill="TypeScript" />
          <SkillList src={checkMarkIcon} skill="Node" />
        </div>
        <hr />

        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="React" />
          <SkillList src={checkMarkIcon} skill="Angular" />
          <SkillList src={checkMarkIcon} skill="Vue" />
          <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        </div>
        <hr />

        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Java" />
          <SkillList src={checkMarkIcon} skill="Python" />
          <SkillList src={checkMarkIcon} skill="Git and GitHub" />
          <SkillList src={checkMarkIcon} skill="Bootstrap" />
        </div>
        <hr />
    </section>
  );
}

export default Skills;