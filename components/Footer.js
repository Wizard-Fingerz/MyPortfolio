// components/Footer.js
import { Box, Typography, Container, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', p: 3, mt: 4 }} component="footer">
      <Container maxWidth="lg">
        <Typography variant="body1" color="inherit">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </Typography>
        <Link color="inherit" href="https://github.com/yourusername" target="_blank" rel="noopener">
          GitHub
        </Link>
      </Container>
    </Box>
  );
};

export default Footer;
