import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';

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
                src={freshBurger} link="https://github.com/cttbiel/secret_number_game" 
                h3="Secret Number Game"
                p={"What is the secret number?"}
            />

            <ProjectCard
                src={hipsster} link="https://github.com/cttbiel/brickstore" 
                h3="BrickStore"
                p={"Your Online Construction Marketplace"}
            />

            <ProjectCard
                src={fitLift} link="https://github.com/cttbiel/text-decoder" 
                h3="Text Decoder"
                p={"So.. Do you have a secret message that no one should be able to understand? Here you can decode it."}
            />
        </div>
    </section>

);
  
}

export default Projects