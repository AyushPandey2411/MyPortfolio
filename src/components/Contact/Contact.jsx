import React from 'react';

import styles from "./Contact.module.css";

import { getImageUrl } from '../../utils'

const Contact = () => {
  return <footer id="contact" className={styles.container}>
    <div className={styles.text}>
        <h2 >Contact</h2>
        <p>Feel free to reach out!</p>
    
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="email icon"/>
            <a href="mailto:ayushpandey24nov@gmail.com">Gmail/Ayush Pandey</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon"/>
            <a href="https://www.linkedin.com/in/ayush-pandey-9302b0258">Linkedin/Ayush Pandey</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="github icon"/>
            <a href="https://github.com/AyushPandey2411">Github/Ayush Pandey</a>
        </li>
    </ul>
  </footer>
}

export default Contact
