// pages/experience.js
import { Container, Typography, Grid } from '@mui/material';
import ExperienceCard from '../components/ExperienceCard';

export default function Experience() {
  const experiences = [
    { company: 'Company 1', position: 'Position 1', duration: '2020-2021', description: 'Description of experience 1' },
    { company: 'Company 2', position: 'Position 2', duration: '2019-2020', description: 'Description of experience 2' },
    // Add more experiences here
  ];

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Experience
      </Typography>
      <Grid container spacing={4}>
        {experiences.map((experience, index) => (
          <Grid item xs={12} md={6} key={index}>
            <ExperienceCard {...experience} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
