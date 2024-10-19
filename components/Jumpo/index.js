import React from 'react';
import styles from './Jumpo.module.css';
import Resume from '../../public/assets/Adewale Oladiti John Resume 2024.pdf'

const JumpoBody = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = Resume;
        link.download = 'Adewale Oladiti John Resume 2024.pdf';
        link.click();
    };


    return <section className={styles.jump}>
        <div className={styles.heroContent}>
            <h2>Adewale John Oladiti - Full Stack Developer</h2>
            <p>Crafting innovative solutions in the world of web and mobile development.</p>
            <button className={styles.downloadButton} onClick={handleDownload}>Download CV</button>
            </div>
        <div className={styles.heroImage}></div>

    </section>;
};

export default JumpoBody;