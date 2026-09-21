import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import { useContext } from 'react';
import { LanguageContext } from '../../common/LanguageContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  const { texts } = useContext(LanguageContext);
  const s = texts.skills;

  const pillar1Skills = [
    'React 19 & Next.js 15',
    'TypeScript & JavaScript (ES6+)',
    'Node.js & REST APIs',
    'Tailwind CSS & CSS Modules',
    'HTML5 & CSS3 Moderno',
    'Python (automação & scripting)',
  ];

  const pillar2Skills = [
    'Apache HTTP Server & GZIP',
    'Git & GitHub Flow',
    'SEO Técnico & Performance Web',
    'Vercel & Deploy em Cloud',
    'Linux & Bash Scripting',
    'Prisma ORM & PostgreSQL',
  ];

  const pillar3Skills = [
    'Power BI & Modelagem DAX',
    'Meta Conversions API (CAPI)',
    'Google Analytics 4 & GTM',
    'Mapeamento de Processos (BPR)',
    'Indicadores Estratégicos (KPIs)',
    'Telemetria de Funil & Conversão',
  ];

  return (
    <section id='skills' className={styles.container}>
      <h2 className='sectionTitle'>{s.title}</h2>
      
      <div className={styles.pillarsGrid}>
        {/* Pillar 1: Software & Web */}
        <div className={styles.pillarCard}>
          <div className={styles.pillarHeader}>
            <div className={styles.pillarIcon}>⚡</div>
            <h3 className={styles.pillarTitle}>{s.p1Title}</h3>
          </div>
          <div className={styles.skillList}>
            {pillar1Skills.map((skill) => (
              <SkillList key={skill} src={checkMarkIcon} skill={skill} />
            ))}
          </div>
        </div>

        {/* Pillar 2: Architecture & Infra */}
        <div className={styles.pillarCard}>
          <div className={styles.pillarHeader}>
            <div className={styles.pillarIcon}>🛠️</div>
            <h3 className={styles.pillarTitle}>{s.p2Title}</h3>
          </div>
          <div className={styles.skillList}>
            {pillar2Skills.map((skill) => (
              <SkillList key={skill} src={checkMarkIcon} skill={skill} />
            ))}
          </div>
        </div>

        {/* Pillar 3: Data & Processes */}
        <div className={styles.pillarCard}>
          <div className={styles.pillarHeader}>
            <div className={styles.pillarIcon}>📊</div>
            <h3 className={styles.pillarTitle}>{s.p3Title}</h3>
          </div>
          <div className={styles.skillList}>
            {pillar3Skills.map((skill) => (
              <SkillList key={skill} src={checkMarkIcon} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;