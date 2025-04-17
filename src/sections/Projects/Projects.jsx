import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';
import secretNumber from '../../assets/Secret Number.jpg'
import brickStore from '../../assets/BrickStore Logo.png';
import textDecoder from '../../assets/Text Decoder.png';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard
                src={viberr} link="https://github.com/cttbiel/spotify" 
                h3="Music Streaming Platform"
                p={"Music App"}
            />

            <ProjectCard
                src={secretNumber} link="https://github.com/cttbiel/secret_number_game" 
                h3="Secret Number Game"
                p={"What is the secret number?"}
            />

            <ProjectCard
                src={brickStore} link="https://github.com/cttbiel/brickstore" 
                h3="BrickStore"
                p={"Building Value, One Brick At A Time"}
            />

            <ProjectCard
                src={textDecoder} link="https://github.com/cttbiel/text-decoder" 
                h3="Text Decoder"
                p={"Decode it."}
            />
        </div>
    </section>

);
  
}

export default Projects