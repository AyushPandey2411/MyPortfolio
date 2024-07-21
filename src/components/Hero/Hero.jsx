import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils'

const Hero = () => {
  return( <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hii, I'm Ayush Pandey</h1>
        <p className={styles.description}>I am a Full Stack Developer and passionate Machine Learning enthusiast</p>
        <a href="mailto:ayushpandey24nov@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Hero image " className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
   
  </section>);
};

export default Hero
