// components/Navbar.js
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <AppBar color='inherit' position="fixed" className={styles.header}>
      <Toolbar>
        <div className={styles.logo}>
          <Image src="/assets/wizcode_watermark.png" alt="wizcode Logo" width={200} height={50} />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/" passHref>
                <Button color="inherit">Projects</Button>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <Button color="inherit">Skills</Button>
              </Link>
            </li>
            <li>
              <Link href="/projects" passHref>
                <Button color="inherit">About Me</Button>
              </Link>
            </li>
            <li>
              <Link href="/experience" passHref>
                <Button color="inherit">Experience</Button>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <Button color="inherit">Contact</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;