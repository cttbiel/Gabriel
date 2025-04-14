import styles from './SkillsStyles.modules.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg'

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1>Skills</h1>
        <div className={styles.skillsList}>
            <span>
                <img src={checkMarkIcon} alt="Checkmark icon"/>
                <p>HTML</p>
            </span>
        </div>
    </section>
  )
}

export default Skills