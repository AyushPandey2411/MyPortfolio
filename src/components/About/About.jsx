import React from 'react'
import styles from "./About.module.css";
import { getImageUrl } from '../../utils'

const About = () => {
  return (
     <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")}
             alt="my Image" className={styles.aboutImage}/>
        
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="cursor"/>
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p> I am a frontend developer with experience in building 
                    responsive and optimized sites</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server"/>
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>I have experienced in developing fast and 
                    optimized back-end systems and Restful Apis </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
            <img src={getImageUrl("about/mlIcon.png")} alt="machine"/>
                <div className={styles.aboutItemText}>
                    <h3>ML Engineer</h3>
                    <p>As a skilled ML Engineer, I specialize in designing and deploying robust machine learning models, 
                        leveraging advanced algorithms to solve complex problems and drive innovation. With a strong foundation in data science and software engineering, 
                        I am dedicated to transforming data into actionable insights and intelligent solutions. </p>
                </div>
            </li>
        </ul>
        </div>
     </section>
  );
};

export default About
