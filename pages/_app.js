// pages/_app.js
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '.';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Home /> */}
      <Component {...pageProps} />
      
    </ThemeProvider>
  );
}

export default MyApp;
