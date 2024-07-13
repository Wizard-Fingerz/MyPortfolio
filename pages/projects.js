// pages/projects.js
import { Container, Typography, Grid } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    { title: 'Project 1', description: 'Description of project 1', link: '#' },
    { title: 'Project 2', description: 'Description of project 2', link: '#' },
    // Add more projects here
  ];

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
