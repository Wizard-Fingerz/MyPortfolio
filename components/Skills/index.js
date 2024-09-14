import styles from './Skills.module.css'

function Skills() {
    return (
        <section className={styles.skills}>
          <div className={styles.skillContainer}>
          <h2 className={styles.h2}>Skills</h2>
          <div className={styles.skillBar}>
              <h3>Data Skills</h3>
              <div className={styles.progressBar} style={{ width: '80%' }}></div>
            </div>
            <div className={styles.skillBar}>
              <h3>Development Skills</h3>
              <div className={styles.progressBar} style={{ width: '100%' }}></div>
            </div>
            <div className={styles.skillBar}>
              <h3>Design Skills</h3>
              <div className={styles.progressBar} style={{ width: '70%' }}></div>
            </div>
          </div>
        </section>
    );
}

export default Skills;