import styles from './ProjectsStyles.module.css';
import musique from '../../assets/musique.png';
import ProjectCard from '../../common/ProjectCard';
import secretNumber from '../../assets/Secret Number.jpg'
import brickStore from '../../assets/BrickStore Logo.png';
import textDecoder from '../../assets/textdecoder.png';
import { useContext } from 'react';
import { LanguageContext } from '../../common/LanguageContext';

function Projects() {

    const { texts } = useContext(LanguageContext);

  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>{texts.projects.title}</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard
                src={musique} link="https://github.com/cttbiel/spotify" 
                h3="Musique"
                p={texts.projects.musique}
            />

            <ProjectCard
                src={secretNumber} link="https://github.com/cttbiel/secret_number_game" 
                h3={texts.projects.secretn}
                p={texts.projects.secret}
            />

            <ProjectCard
                src={brickStore} link="https://github.com/cttbiel/brickstore" 
                h3="BrickStore"
                p={texts.projects.brick}
            />

            <ProjectCard
                src={textDecoder} link="https://github.com/cttbiel/text-decoder" 
                h3={texts.projects.decodern}
                p={texts.projects.decoder}
            />
        </div>
    </section>

);
  
}

export default Projects