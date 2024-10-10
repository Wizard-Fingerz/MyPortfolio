import { Input, InputAdornment } from '@mui/material';
import styles from './Footer.module.css';
import Image from 'next/image';
import { Email } from '@mui/icons-material'; // Import the Email icon from MUI


function Footer() {
    const currentYear = new Date().getFullYear();
    return (

        <footer className={styles.footer}>
            <div className={styles.logo}>
                <Image src="/assets/wizcode_watermark.png" alt="wizcode Logo" width={200} height={50} />

            </div>

            <div className={styles.newsletter}>
                <h3>Subscribe to our newsletter</h3>
                <Input
                    type="email"
                    placeholder="Input your email"
                    className={styles.input}
                    startAdornment={
                        <InputAdornment position="start">
                            <Email />
                        </InputAdornment>
                    }
                />
                <button className={styles.subscribeButton}>Subscribe</button>
            </div>


            <div className={styles.footerContent}>

                <div className={styles.footerLinks}>
                    <div className={styles.linkGroup}>
                        <h4>Product</h4>
                        <ul>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                        </ul>
                    </div>
                    <div className={styles.linkGroup}>
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">User guides</a></li>
                            <li><a href="#">Webinars</a></li>
                        </ul>
                    </div>
                    <div className={styles.linkGroup}>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>
                    <div className={styles.linkGroup}>
                        <h4>Plans & Pricing</h4>
                        <ul>
                            <li><a href="#">Personal</a></li>
                            <li><a href="#">Start up</a></li>
                            <li><a href="#">Organization</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.copyright}>
                <p>&copy;{currentYear} WizCode. • Privacy • Terms • Sitemap</p>
            </div>
            <div className={styles.socialLinks}>
                <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
            </div>

        </footer>
    );
}

export default Footer;