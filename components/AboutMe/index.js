import styles from './AboutMe.module.css';
import Image from 'next/image';

function AboutMe() {
    return (
        <section className={styles.aboutMe}>
          <div className={styles.aboutMeContainer}>
            <h2 className={styles.h2}>About Me</h2>
            <div className={styles.aboutMeContent}>
              <div className={styles.imageContainer}>
                <Image src="/assets/me.jpg" alt="About Me Image" width={200} height={200} />
              </div>
              <div className={styles.textContent}>
                <p>Hello! I&apos;m Adewale, a passionate Junior Full Stack Developer with a knack for creating seamless digital experiences. With a background in Python for ML and DL, Django for Backend, and React Next for Front End, I specialize in crafting intuitive and responsive applications. My journey in software engineering has been fueled by a love for innovation and a desire to push the boundaries of technology.</p>
              </div>
            </div>
          </div>
        </section>
    );
}

export default AboutMe;
