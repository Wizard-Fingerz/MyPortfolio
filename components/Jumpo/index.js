import React from 'react';
import styles from './Jumpo.module.css';

const JumpoBody = () => {
    return <section className={styles.jump}>
        <div className={styles.heroContent}>
            <h2>Adewale John Oladiti - Full Stack Developer</h2>
            <p>Crafting innovative solutions in the world of web and mobile development.</p>
            <button className={styles.downloadButton}>Download CV</button>
        </div>
        <div className={styles.heroImage}></div>

    </section>;
};

export default JumpoBody;