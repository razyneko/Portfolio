import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png'
import profileImg from "../../assets/profile.png"
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import xLight from '../../assets/x-light.svg';
import xDark from '../../assets/x-dark.svg';
import resume from '../../assets/resume.pdf';
import { useTheme } from '../../common/ThemeContext';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import React from 'react';


const Hero = () => {
    
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Go', 'Javascript','React.js','Python'],
            typeSpeed: 60,
            loop: true,
            loopCount: Infinity,
            showCursor:false
         });
         return () => {
            typed.destroy();
          };
          
    },[])
    

    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const xIcon = theme === 'light' ? xLight : xDark;


  return (
    <section id='hero' className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={profileImg} alt="Ayush's Profile picture" />
        <img className={styles.colorMode} src={themeIcon} alt="theme-mode-icon" onClick={toggleTheme} />
    </div>
    <div className={styles.info}>
    <h1 className='name'>Ayush
        <br />
        Vishwakarma
    </h1>
<div className={styles.typed}><h2 ref={el}></h2>
    </div>
    <span>
        <a target="_blank"  href="https:www.github.com/razyneko">
        <img src={githubIcon} alt="github-icon" /></a>
        <a target="_blank" href="https://x.com/razyneko">
        <img src={xIcon} alt="x-icon" /></a>
    </span>
    <p className={styles.description}>
    Go developer with knowledge of JavaScript, React, and Frontend development, data science tools, beginner in DevOps.
    </p>
    <a href={resume} download>
    <button  className='text-dec hero-btn'>
        Resume
    </button>
    </a>
    </div>
    </section>
  )
}

export default Hero