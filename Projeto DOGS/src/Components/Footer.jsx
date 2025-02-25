import React from 'react';
import styles from './Footer.module.css';
import FooterSVG from '../Assets/dogs-footer.svg?react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterSVG />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
