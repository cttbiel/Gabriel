import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import saudeMaterImg from '../../assets/saudemater_clean.png';
import alessandraImg from '../../assets/AlemDasAparencias.png';
import alessandraPDF from '../../assets/Alem_das_Aparencias_Alessandra_Nogueira.pdf';
import radarAcademicoImg from '../../assets/RadarAcademico_clean.png';
import brickStoreImg from '../../assets/BrickStore_clean.png';
import { useContext } from 'react';
import { LanguageContext } from '../../common/LanguageContext';

function Projects() {
  const { texts } = useContext(LanguageContext);
  const p = texts.projects;

  return (
    <section id='projects' className={styles.container}>
      <h2 className='sectionTitle'>{p.title}</h2>
      <div className={styles.projectsGrid}>

        {/* 1. Saúde Mater — Cliente comercial real */}
        <ProjectCard
          src={saudeMaterImg}
          link="https://saudemater.com.br"
          url="saudemater.com.br"
          urlBadge="AO VIVO"
          tag={p.saudemater.tag}
          title={p.saudemater.title}
          description={p.saudemater.desc}
          stats={p.saudemater.stats}
          actionText={p.saudemater.action}
          isDownload={false}
        />

        {/* 2. Além das Aparências — Cliente comercial real */}
        <ProjectCard
          src={alessandraImg}
          link={alessandraPDF}
          url="alemdasaparencias.vercel.app"
          urlBadge="PDF-FIRST"
          tag={p.alessandra.tag}
          title={p.alessandra.title}
          description={p.alessandra.desc}
          stats={p.alessandra.stats}
          actionText={p.alessandra.action}
          isDownload={true}
        />

        {/* 3. Radar Acadêmico — Plataforma SaaS */}
        <ProjectCard
          src={radarAcademicoImg}
          link="https://radaracademico.vercel.app"
          url="radaracademico.vercel.app"
          urlBadge="AO VIVO"
          tag={p.radaracademico.tag}
          title={p.radaracademico.title}
          description={p.radaracademico.desc}
          stats={p.radaracademico.stats}
          actionText={p.radaracademico.action}
          isDownload={false}
        />

        {/* 4. BrickStore — E-commerce */}
        <ProjectCard
          src={brickStoreImg}
          link="https://brickstore.vercel.app"
          url="brickstore.vercel.app"
          urlBadge="AO VIVO"
          tag={p.brickstore.tag}
          title={p.brickstore.title}
          description={p.brickstore.desc}
          stats={p.brickstore.stats}
          actionText={p.brickstore.action}
          isDownload={false}
        />

      </div>
    </section>
  );
}

export default Projects;