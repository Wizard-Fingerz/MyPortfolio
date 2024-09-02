import React from 'react';
import Image from 'next/image';
import styles from './Home.module.css';
import Navbar from '../components/NavBar';
import JumpoBody from '../components/Jumpo';
import Project from '../components/Projects';

const Home = () => {
  return (
    <div className={styles.container}>
    <Navbar />

    <JumpoBody />

      <main className={styles.main}>


        <Project />
     

        <section className={styles.skills}>
          <h2>Skills</h2>
          <div className={styles.skillBar}>
            <h3>Data Skills</h3>
            <div className={styles.progressBar} style={{ width: '80%' }}></div>
          </div>
          <div className={styles.skillBar}>
            <h3>Development Skills</h3>
            <div className={styles.progressBar} style={{ width: '90%' }}></div>
          </div>
          <div className={styles.skillBar}>
            <h3>Design Skills</h3>
            <div className={styles.progressBar} style={{ width: '70%' }}></div>
          </div>
        </section>

        <section className={styles.aboutMe}>
          <h2>About Me</h2>
          <div className={styles.aboutMeContent}>
            <Image src="/about-me.jpg" alt="About Me Image" width={300} height={200} />
            <p>Hello! I&apos;m Alex, a passionate Junior Full Stack Developer with a knack for creating seamless digital experiences. With a background in Python for ML and DL, Django for Backend, and React Next for Front End, I specialize in crafting intuitive and responsive applications. My journey in software engineering has been fueled by a love for innovation and a desire to push the boundaries of technology.</p>
          </div>
        </section>

        <section className={styles.getInTouch}>
          <h2>Get In Touch</h2>
          <p>We&apos;d love to hear from you! Whether you have a question, feedback, or just want to say hello, drop us a message.</p>
          <button className={styles.sendMessageButton}>Send Message</button>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.logo}>
            <Image src="/logo.svg" alt="DevPortfolio Logo" width={50} height={50} />
            <h1>DevPortfolio</h1>
          </div>
          <div className={styles.newsletter}>
            <h3>Subscribe to our newsletter</h3>
            <input type="email" placeholder="Input your email" />
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.linkGroup}>
              <h4>Product</h4>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div>
            <div className={styles.linkGroup}>
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">User guides</a></li>
                <li><a href="#">Webinars</a></li>
              </ul>
            </div>
            <div className={styles.linkGroup}>
              <h4>Company</h4>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>
            <div className={styles.linkGroup}>
              <h4>Plans & Pricing</h4>
              <ul>
                <li><a href="#">Personal</a></li>
                <li><a href="#">Start up</a></li>
                <li><a href="#">Organization</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>©2022 Brand, Inc. • Privacy • Terms • Sitemap</p>
          </div>
          <div className={styles.socialLinks}>
            <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className={styles.madeWithVisily}>
          <p>Made with <Image src="/visily-logo.svg" alt="Visily Logo" width={80} height={30} /> </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;