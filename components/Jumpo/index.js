import React from 'react';
import styles from './Jumpo.module.css';

const JumpoBody = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/assets/Adewale Oladiti John Resume 2024.pdf'; // Use the relative path
        link.download = 'Adewale Oladiti John Resume 2025.pdf';
        link.click();
    };

    const handleDownload2 = () => {
        const link = document.createElement('a');
        link.href = '/assets/Oladiti Adewale John CV.pdf'; // Use the relative path
        link.download = 'Adewale Oladiti John Resume 2025 (Python Dev).pdf';
        link.click();
    };
    

    return <section className={styles.jump}>
        <div className={styles.heroContent}>
            <h2>Adewale John Oladiti - Full Stack Developer</h2>
            <p>Crafting innovative solutions in the world of web and mobile development.</p>

            <div>

            <button className={styles.downloadButton} onClick={handleDownload}>Download Full Stack CV</button>
            <button className={styles.downloadButton} onClick={handleDownload2}>Download Python Dev CV</button>
            </div>
            </div>
        <div className={styles.heroImage}></div>

    </section>;
};

export default JumpoBody;