// pages/index.js
import { Container, Typography, Box } from '@mui/material';
import ThreeDComponent from '../components/ThreeDComponent';

export default function Home() {
  return (
    <Container>
      <Box my={4}>
        <ThreeDComponent />
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="body1">
          I am a Software Engineer specializing in building exceptional digital experiences.
        </Typography>
      </Box>
    </Container>
  );
}
