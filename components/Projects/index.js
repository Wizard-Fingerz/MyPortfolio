import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Add this import
import styles from './Projects.module.css';

const Project = () => {
    const [activeTab, setActiveTab] = useState(0);

    const projects = [
        {
            title: 'Blockchain App',
            projects: [
                
                {
                    headers: 'Nkowe',
                    description: 'A platform that empowers education through technology - helps learners and educators connect, collaborate, and achieve their learning goals..',
                    image: '/assets/classroom.jpg',
                    url: 'https://nkowe.vercel.app/index'
                },
            ],
        },
        {
            title: 'Data Analysis',
            projects: [
                {
                    headers: 'IGradePro',
                    description: 'Analyzing customer behavior using Python and ML.',
                    image: '/assets/datascience.jpg',
                    url: ''
                },
            ],
        },
        {
            title: 'Software Development',
            projects: [
                
                {
                    headers: 'Nkowe',
                    description: 'A platform that empowers education through technology - helps learners and educators connect, collaborate, and achieve their learning goals..',
                    image: '/assets/classroom.jpg',
                    url: 'https://nkowe.vercel.app/index'
                },
                {
                    headers: 'IGradePro',
                    description: 'Predicting sales trends using data visualization.',
                    image: '/assets/datascience.jpg',
                    url: ''
                },
                {
                    headers: 'SMPP',
                    description: 'Analyzing customer behavior using Python and ML.',
                    image: '/assets/datascience.jpg',
                    url: ''
                },
                {
                    headers: 'Elektroniks',
                    description: 'Predicting sales trends using data visualization.',
                    image: '/assets/datascience.jpg',
                    url: ''
                },
                // add more projects here
            ],
        },
        {
            title: 'Machine Learning',
            projects: [
                {
                    headers: 'IGradePro',
                    description: 'Analyzing customer behavior using Python and ML.',
                    image: '/assets/datascience.jpg',
                    url: ''
                },
                {
                    headers: 'Nkowe',
                    description: 'A platform that empowers education through technology - helps learners and educators connect, collaborate, and achieve their learning goals..',
                    image: '/assets/classroom.jpg',
                    url: 'https://nkowe.vercel.app/index'
                },
             
                // add more projects here
            ],
        },

        {
            title: 'UI/UX Design',
            projects: [
                {
                    headers: 'Nkowe',
                    description: 'A platform that empowers education through technology - helps learners and educators connect, collaborate, and achieve their learning goals..',
                    image: '/assets/classroom.jpg',
                    url: ''
                },
                {
                    headers: 'Khefue',
                    description: 'Predicting sales trends using data visualization.',
                    image: '/assets/datascience.jpg',
                    url: ''
                },
                {
                    headers: 'Block App',
                    description: 'Analyzing customer behavior using Python and ML.',
                    image: '/assets/datascience.jpg',
                    url: ''
                },
                {
                    headers: 'Block App',
                    description: 'Predicting sales trends using data visualization.',
                    image: '/assets/datascience.jpg',
                    url: ''
                },
                // add more projects here
            ],
        },
        {
            title: 'Flutter Apps',
            projects: [
                {
                    headers: 'Wiz Poll',
                    description: 'Analyzing customer behavior using Python and ML.',
                    image: '/assets/datascience.jpg',
                    url: ''
                },
                {
                    headers: 'Wiz Band',
                    description: 'Predicting sales trends using data visualization.',
                    image: '/assets/datascience.jpg',
                    url: ''
                },
                {
                    headers: 'GreenPurse',
                    description: 'Analyzing customer behavior using Python and ML.',
                    image: '/assets/datascience.jpg',
                    url: ''
                },
                // add more projects here
            ],
        },
        // add more titles and projects here
    ];

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    return (
        <div>

            <h2 className={styles.h2}>Project</h2>

            <div className={styles.projectsContainer}>

                <div className={styles.tabs}>
                    {projects.map((projectGroup, index) => (
                        <button
                            key={index}
                            className={`${styles.tab} ${activeTab === index ? styles.activeTab : ''}`}
                            style={{
                                backgroundColor: index === 0 ? '#3498db' : index === 1 ? '#f1c40f' : index === 2 ? '#e74c3c' : index === 3 ? '#2ecc71' : index === 4 ? '#9b59b6' : '#1abc9c',
                                padding: '5px 15px',
                                fontSize: '12px',
                            }}
                            onClick={() => handleTabChange(index)}
                        >
                            {projectGroup.title}
                        </button>
                    ))}
                </div>
                <div className={styles.projectContent}>
                    {projects[activeTab] && (
                        <>
                            <div className={styles.projectGrid}>
                                {projects[activeTab].projects.map((project, index) => (
                                    <div key={index} className={styles.projectCard}>
                                        <Image src={project.image} alt={project.description} width={370} height={200} />
                                        <h3>{project.headers}</h3>
                                        <p>{project.description}</p>
                                        <Link href={project.url}> 
                                        
                                                <button className={styles.viewProject}>Click to view project</button>
                                            
                                        </Link>
                                    </div>
                                ))}
                            </div>

                            <button className={styles.loadMore}>Load More</button>
                        </>
                    )}
                </div>
            </div>

        </div>

    );
};

export default Project;