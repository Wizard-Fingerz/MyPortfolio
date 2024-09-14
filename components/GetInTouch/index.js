import styles from './GetInTouch.module.css'

function GetInTouch() {
    return(

        <section className={styles.getInTouch}>
          <h2>Get In Touch</h2>
          <p>We&apos;d love to hear from you! Whether you have a question, feedback, or just want to say hello, drop us a message.</p>
          <button className={styles.sendMessageButton}>Send Message</button>
        </section>
    )
}

export default GetInTouch;