import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Projects.module.css';

const Project = () => {
    const [activeTab, setActiveTab] = useState(0);

    const projects = [
        {
            title: 'Blockchain App',
            projects: [
                {
                    description: 'A decentralized application for secure transactions.',
                    image: '/assets/blockchain.jpg',
                },
                {
                    description: 'A blockchain-based supply chain management system.',
                    image: '/assets/blockchain.jpg',
                },
                {
                    description: 'A decentralized application for secure transactions.',
                    image: '/assets/blockchain.jpg',
                },
                {
                    description: 'A blockchain-based supply chain management system.',
                    image: '/assets/blockchain.jpg',
                },
                {
                    description: 'A decentralized application for secure transactions.',
                    image: '/assets/blockchain.jpg',
                },
                {
                    description: 'A blockchain-based supply chain management system.',
                    image: '/assets/blockchain.jpg',
                },
                {
                    description: 'A decentralized application for secure transactions.',
                    image: '/assets/blockchain.jpg',
                },
                {
                    description: 'A blockchain-based supply chain management system.',
                    image: '/assets/blockchain.jpg',
                },
                // add more projects here
            ],
        },
        {
            title: 'Data Analysis',
            projects: [
                {
                    description: 'Analyzing customer behavior using Python and ML.',
                    image: '/assets/datascience.jpg',
                },
                {
                    description: 'Predicting sales trends using data visualization.',
                    image: '/assets/datascience.jpg',
                },
                {
                    description: 'Analyzing customer behavior using Python and ML.',
                    image: '/assets/datascience.jpg',
                },
                {
                    description: 'Predicting sales trends using data visualization.',
                    image: '/assets/datascience.jpg',
                },
                // add more projects here
            ],
        },
        {
            title: 'Software Development',
            projects: [
                {
                    description: 'Analyzing customer behavior using Python and ML.',
                    image: '/assets/datascience.jpg',
                },
                {
                    description: 'Predicting sales trends using data visualization.',
                    image: '/assets/datascience.jpg',
                },
                {
                    description: 'Analyzing customer behavior using Python and ML.',
                    image: '/assets/datascience.jpg',
                },
                {
                    description: 'Predicting sales trends using data visualization.',
                    image: '/assets/datascience.jpg',
                },
                // add more projects here
            ],
        },
        {
            title: 'Machine Learning',
            projects: [
                {
                    description: 'Analyzing customer behavior using Python and ML.',
                    image: '/assets/datascience.jpg',
                },
                {
                    description: 'Predicting sales trends using data visualization.',
                    image: '/assets/datascience.jpg',
                },
                {
                    description: 'Analyzing customer behavior using Python and ML.',
                    image: '/assets/datascience.jpg',
                },
                {
                    description: 'Predicting sales trends using data visualization.',
                    image: '/assets/datascience.jpg',
                },
                // add more projects here
            ],
        },

        {
            title: 'UI/UX Design',
            projects: [
                {
                    description: 'Analyzing customer behavior using Python and ML.',
                    image: '/assets/datascience.jpg',
                },
                {
                    description: 'Predicting sales trends using data visualization.',
                    image: '/assets/datascience.jpg',
                },
                {
                    description: 'Analyzing customer behavior using Python and ML.',
                    image: '/assets/datascience.jpg',
                },
                {
                    description: 'Predicting sales trends using data visualization.',
                    image: '/assets/datascience.jpg',
                },
                // add more projects here
            ],
        },
        {
            title: 'Flutter Apps',
            projects: [
                {
                    description: 'Analyzing customer behavior using Python and ML.',
                    image: '/assets/datascience.jpg',
                },
                {
                    description: 'Predicting sales trends using data visualization.',
                    image: '/assets/datascience.jpg',
                },
                {
                    description: 'Analyzing customer behavior using Python and ML.',
                    image: '/assets/datascience.jpg',
                },
                {
                    description: 'Predicting sales trends using data visualization.',
                    image: '/assets/datascience.jpg',
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
                    <div className={styles.projectGrid}>
                        {projects[activeTab].projects.map((project, index) => (
                            <div key={index} className={styles.projectCard}>
                                <Image src={project.image} alt={project.description} width={300} height={200} />
                                <h3>{project.description}</h3>
                                <p>{project.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Project;