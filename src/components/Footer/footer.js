import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerTop}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={logo} alt="Cocktail Nation Logo"/>
                    </Link>
                </div>
                <ul className={styles.nav}>
                    <li>
                        <Link to="/recipes">Recipe</Link>
                    </li>
                    <li>
                        <Link to="/tools">Tools</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <div className={styles.socials}>
                    <a href="">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>
                    2021 &copy; Cocktail Nations by Oloruntomi
                </p>
            </div>
        </footer>
    )
}

export default Footer
