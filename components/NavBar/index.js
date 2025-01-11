import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggle = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <AppBar color="inherit" position="fixed" className={styles.header}>
      <Toolbar className={styles.toolbar}>
        <div className={styles.logo}>
          <Image src="/assets/wizcode_watermark.png" alt="wizcode Logo" width={150} height={40} />
        </div>
        {windowWidth > 768 ? (
          <nav className={styles.nav}>
            <ul>
              {[
                { label: 'Projects', href: '/' },
                { label: 'Skills', href: '/about' },
                { label: 'About Me', href: '/projects' },
                { label: 'Experience', href: '/experience' },
                { label: 'Contact', href: '/contact' },
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.href} passHref>
                    <Button color="inherit">{item.label}</Button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleToggle}>
              <MenuIcon />
            </IconButton>
            <nav className={`${styles.navMobile} ${open ? styles.open : ''}`}>
              <IconButton className={styles.closeButton} onClick={closeMenu}>
                <CloseIcon />
              </IconButton>
              <ul>
                {[
                  { label: 'Projects', href: '/' },
                  { label: 'Skills', href: '#' },
                  { label: 'About Me', href: '#' },
                  { label: 'Experience', href: '#' },
                  { label: 'Contact', href: '#' },
                ].map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} passHref>
                      <Button color="inherit" onClick={closeMenu}>{item.label}</Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
