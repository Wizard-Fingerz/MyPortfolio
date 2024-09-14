import React from 'react';
import Image from 'next/image';
import styles from './Home.module.css';
import Navbar from '../components/NavBar';
import JumpoBody from '../components/Jumpo';
import Project from '../components/Projects';
import Skills from '../components/Skills';
import AboutMe from '../components/AboutMe';
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />

      <JumpoBody />

      <main className={styles.main}>


        <Project />

        <Skills />
        <AboutMe />
        <GetInTouch />
      </main>

<Footer />

    </div>
  );
};

export default Home;